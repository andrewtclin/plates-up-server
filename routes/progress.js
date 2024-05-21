const express = require("express");
const router = express.Router();
const { newProgress, getProgress } = require("../controllers/progress");

router.post("/", newProgress);
router.get("/", getProgress);

module.exports = router;
