const express = require("express");
const router = express.Router();
const {
  createExercise,
  getExercise,
  deleteExercise,
  updateExercise,
} = require("../controllers/exercise");

router.post("/", createExercise);
router.get("/", getExercise);
router.delete("/", deleteExercise);
router.put("/", updateExercise);

module.exports = router;
