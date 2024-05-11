const bcrypt = require("bcrypt");
const { executeQuery } = require("../database/utils/db");
const { apiResult } = require("../utils/apiResult");

const loginUser = async (req, res) => {
  const { username, password } = req.body;
  try {
    const sql = "CALL UserLogin(?)";
    const [[[user]]] = await executeQuery(sql, [username]);

    // if user not found
    if (!user) {
      apiResult(res, 200, { success: false }, "User not found");
      return;
    }

    // validate password
    const validPassword = await bcrypt.compare(password, user.password_hash);
    if (validPassword) {
      apiResult(res, 200, { success: true }, "Login successful");
    } else {
      apiResult(res, 200, { success: false }, "Invalid username or password");
    }
  } catch (err) {
    console.error("Failed to login user:", err);
    apiResult(res, 500, { success: false }, "Failed to login user");
  }
};

module.exports = {
  loginUser,
};
