const express = require("express");
const {
  loginUser,
  signUpUser,
  getUser,
  editUser,
  deleteUser,
} = require("../controllers/memberController");
const authenticateUser = require("../middlewares/authUser");
const router = express.Router();

router.post("/login", loginUser);
router.post("/register", signUpUser);
router.get("/get-member", authenticateUser, getUser);
router.put("/update-member", authenticateUser, editUser);
router.delete("/delete-member", authenticateUser, deleteUser);

module.exports = router;
