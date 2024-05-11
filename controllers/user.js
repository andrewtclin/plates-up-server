const { apiResult } = require("../utils/apiResult");

const getUser = (req, res) => {
  apiResult(res, 200, {}, "");
};

const postUser = async (req, res) => {
  const { username, password } = req.body;

  try {
    console.log("username:", username);
    console.log("password:", password);
    apiResult(res, 200);
  } catch (err) {
    apiResult(res, 500, {}, "Failed to create user");
  }
};

module.exports = {
  getUser,
  postUser,
};
