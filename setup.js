// database initialization script
const fs = require("fs");
const path = require("path");
const { executeQuery } = require("./database/utils/db");

async function initializeDatabase(
  sqlPath,
  params = [],
  rootDb = false,
  multipleStatements = false
) {
  try {
    const storedProcedurePath = path.join(".", "database", "sql");
    const sqlFilePath = path.join(storedProcedurePath, sqlPath);
    const sql = fs.readFileSync(sqlFilePath, "utf8");
    await executeQuery(sql, params, rootDb, multipleStatements);
    console.log(`SQL at ${sqlPath} executed successfully.`);
  } catch (err) {
    console.error(`Error executing SQL at ${sqlPath}:`, err);
    process.exit(1);
  }
}

initializeDatabase("setup/setup.sql", [], true, true);
initializeDatabase("user/createUser.sql", [], false, true);
initializeDatabase("user/getUser.sql", [], false, true);
initializeDatabase("user/updateUser.sql", [], false, true);
initializeDatabase("user/deleteUser.sql", [], false, true);
initializeDatabase("login/login.sql", [], false, true);
initializeDatabase("exercise/createExercise.sql", [], false, true);
initializeDatabase("exercise/getExercise.sql", [], false, true);
initializeDatabase("exercise/deleteExercise.sql", [], false, true);
initializeDatabase("exercise/updateExercise.sql", [], false, true);
initializeDatabase("progress/newProgress.sql", [], false, true);
initializeDatabase("progress/getProgress.sql", [], false, true);
