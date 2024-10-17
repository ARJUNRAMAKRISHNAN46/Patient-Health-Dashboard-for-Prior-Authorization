const express = require("express");
const {
  getDocs,
  addDocs,
  updateDocs,
  deleteDocs,
} = require("../controllers/docsController");
const authenticateUser = require("../middlewares/authUser");
const router = express.Router();

router.get("/get-docs", authenticateUser, getDocs);
router.post("/add-doc", authenticateUser, addDocs);
router.put("/update-doc", authenticateUser, updateDocs);
router.delete("/delete-doc", authenticateUser, deleteDocs);

module.exports = router;
