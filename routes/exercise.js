const express = require("express");
const router = express.Router();
const { createExercise, getExercise } = require("../controllers/exercise");

router.post("/", createExercise);
router.get("/", getExercise);

module.exports = router;
