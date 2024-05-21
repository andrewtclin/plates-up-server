const { executeQuery } = require("../database/utils/db");
const { apiResult } = require("../utils/apiResult");

// New Progress
const newProgress = async (req, res) => {
  const { exerciseId, userId, weights } = req.body;

  try {
    // prepare to call stored procedure
    const sql = "CALL NewProgress(?, ?, ?)";

    // execute the stored procedure
    await executeQuery(sql, [exerciseId, userId, weights]);

    apiResult(res, 200, "", "Progress created successfully");
  } catch (err) {
    console.error("Failed to create progress:", err);
    apiResult(res, 500, {}, "Failed to create progress");
  }
};

// Get Progress
const getProgress = async (req, res) => {
  const userId = req.query.userId;

  try {
    // prepare to call stored procedure
    const sql = "CALL GetProgress(?)";

    // execute the stored procedure
    const [[progresses]] = await executeQuery(sql, [userId]);
    if (progresses) {
      apiResult(res, 200, progresses, "Progress retrieved successfully");
    }
  } catch (err) {
    console.error("Failed to retrieve progress:", err);
    apiResult(res, 500, {}, "Failed to retrieve progress");
  }
};

module.exports = {
  newProgress,
  getProgress,
};
