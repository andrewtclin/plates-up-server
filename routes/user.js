const express = require("express");
const router = express.Router();
const {
  getUser,
  createUser,
  updateUser,
  deleteUser,
} = require("../controllers/user");

router.get("/", getUser);
router.post("/", createUser);
router.put("/:username", updateUser);
router.delete("/:username", deleteUser);

module.exports = router;
