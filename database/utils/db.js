const mysql = require("mysql2");

// run sql query
async function executeQuery(sqlScript, rootDb = false) {
  const connectionConfig = {
    host: "localhost",
    user: "root",
    password: "password",
    multipleStatements: true,
  };

  if (!rootDb) {
    connectionConfig.database = "plates-up";
  }

  const connection = mysql.createConnection(connectionConfig).promise();

  try {
    // executing script
    const results = await connection.query(sqlScript);
    return results;
  } catch (err) {
    console.error("Error during SQL execution:", err);
    throw err;
  } finally {
    await connection.end();
  }
}

module.exports = { executeQuery };
