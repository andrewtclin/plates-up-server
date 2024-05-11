const { executeQuery } = require("../database/utils/db");
const { apiResult } = require("../utils/apiResult");
const { getPasswordHash } = require("../models/user");

// get user information
const getUser = async (req, res) => {
  const username = req.query.username;

  try {
    const sql = "CALL GetUser(?)";
    const [[[user]]] = await executeQuery(sql, [username]);

    if (user) {
      apiResult(
        res,
        200,
        {
          username: user.username,
          email: user.email,
          lastname: user.lastname,
          firstname: user.firstname,
        },
        "User retrieved successfully"
      );
    } else {
      apiResult(res, 404, {}, "User not found");
    }
  } catch (err) {
    console.error("Failed to retrieve user:", err);
    apiResult(res, 500, {}, "Failed to retrieve user");
  }
};

// create new user
const createUser = async (req, res) => {
  const { username, password, email, lastname, firstname } = req.body;

  try {
    const hashedPassword = await getPasswordHash(password);

    // prepare to call stored procedure
    const sql = "CALL CreateUser(?, ?, ?, ?, ?)";

    // execute the stored procedure with username and hashed password
    await executeQuery(sql, [
      username,
      hashedPassword,
      email,
      lastname,
      firstname,
    ]);

    apiResult(res, 200, { username: username }, "User created successfully");
  } catch (err) {
    console.error("Failed to create user:", err);
    apiResult(res, 500, {}, "Failed to create user");
  }
};

// update user information
const updateUser = async (req, res) => {
  const username = req.params.username;
  const { firstname, lastname, email, password } = req.body;

  try {
    const hashedPassword = password ? await getPasswordHash(password) : null;

    // prepare to call the stored procedure
    const sql = "CALL UpdateUser(?, ?, ?, ?, ?)";

    // execute the stored procedure with provided user details
    await executeQuery(sql, [
      username,
      firstname,
      lastname,
      email,
      hashedPassword,
    ]);

    apiResult(res, 200, {}, "User updated successfully");
  } catch (err) {
    console.error("Failed to update user:", err);
    apiResult(res, 500, {}, "Failed to update user");
  }
};

// delete user information
const deleteUser = async (req, res) => {
  const username = req.params.username;

  try {
    const sql = "CALL DeleteUser(?)";

    await executeQuery(sql, [username]);

    apiResult(res, 200, {}, "User deleted successfully");
  } catch (err) {
    console.error("Failed to delete user:", err);
    apiResult(res, 500, {}, "Failed to delete user");
  }
};

module.exports = {
  getUser,
  createUser,
  updateUser,
  deleteUser,
};
