const { executeQuery } = require("../database/utils/db");
const { apiResult } = require("../utils/apiResult");

// get exercises
const getExercise = async (req, res) => {
  const userId = req.query.userId;

  try {
    const sql = "CALL GetExercises(?)";
    const [[exerciseInfo]] = await executeQuery(sql, [userId]);
    console.log(exerciseInfo);

    if (exerciseInfo) {
      apiResult(res, 200, exerciseInfo, "Exercises retrieved successfully");
    } else {
      apiResult(res, 404, {}, "No exercise not found");
    }
  } catch (err) {
    console.error("Failed to retrieve exercise:", err);
    apiResult(res, 500, {}, "Failed to retrieve exercise");
  }
};

// create new exercise
const createExercise = async (req, res) => {
  const { exerciseName, userId } = req.body;

  try {
    // prepare to call stored procedure
    const sql = "CALL CreateExercise(?, ?)";

    // execute the stored procedure
    await executeQuery(sql, [exerciseName, userId]);

    apiResult(res, 200, "", "Exercise created successfully");
  } catch (err) {
    console.error("Failed to create exercise:", err);
    apiResult(res, 500, {}, "Failed to create exercise");
  }
};

module.exports = {
  createExercise,
  getExercise,
};
