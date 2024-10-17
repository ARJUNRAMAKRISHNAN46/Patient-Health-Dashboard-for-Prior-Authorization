const express = require("express");
const {
  loginUser,
  signUpUser,
  getUser,
  editUser,
  deleteUser,
} = require("../controllers/userController");
const authenticateUser = require("../middlewares/authUser");
const router = express.Router();

router.post("/login", loginUser);
router.post("/register", signUpUser);
router.get("/get-user", authenticateUser, getUser);
router.put("/update-user", authenticateUser, editUser);
router.delete("/delete-user", authenticateUser, deleteUser);

module.exports = router;
