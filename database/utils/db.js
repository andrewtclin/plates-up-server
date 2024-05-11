const mysql = require("mysql2");

// run sql query
async function executeQuery(
  sqlScript,
  params = [],
  rootDb = false,
  multipleStatements = false
) {
  const connectionConfig = {
    host: "localhost",
    user: "root",
    password: "password",
    multipleStatements: multipleStatements,
  };

  if (!rootDb) {
    connectionConfig.database = "plates_up";
  }

  const connection = mysql.createConnection(connectionConfig).promise();

  try {
    // executing script
    const results = await connection.query(sqlScript, params);
    return results;
  } catch (err) {
    console.error("Error during SQL execution:", err);
    throw err;
  } finally {
    await connection.end();
  }
}

module.exports = { executeQuery };
