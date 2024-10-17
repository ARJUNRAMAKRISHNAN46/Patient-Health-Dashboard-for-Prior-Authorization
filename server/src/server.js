const express = require("express");
const userRouter = require("./routes/memberRoutes");
const docsRouter = require("./routes/docsRoutes");
const cors = require("cors");
const rateLimit = require("express-rate-limit");
const morgan = require("morgan");
const helmet = require("helmet");
const connectToDatabase = require("./config/dbConnection");
require("dotenv").config();
const cookieParser = require("cookie-parser");

// const csurf = require("csurf");
// const authenticateUser = require("./middlewares/authUser");

const app = express();
const PORT = process.env.PORT;

const corsOptions = {
  origin: "http://localhost:5173",
  methods: ["GET", "POST", "PUT", "DELETE"],
  allowedHeaders: ["Content-Type", "Authorization"],
  credentials: true,
  optionsSuccessStatus: 200,
};

const limiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 100,
  message: "Too many requests from this IP, please try again after 15 minutes.",
  headers: true,
});

// const csrfProtection = csurf({
//   cookie: true,
// });

// app.use(csrfProtection);
// app.use(authenticateUser);

connectToDatabase();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(limiter);
app.use(cookieParser());
app.use(helmet());
app.use(morgan("dev"));
app.use(cors(corsOptions));
app.use("/", userRouter);
app.use("/docs", docsRouter);

app.listen(PORT, () => {
  console.log(`server starts in http://localhost:${PORT}`);
});
