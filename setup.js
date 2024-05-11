const fs = require("fs");
const path = require("path");
const { executeQuery } = require("./database/utils/db");

async function setupDatabase() {
  try {
    // extract db setup sql script
    const sqlFilePath = path.join(".", "database", "sql", "setup", "setup.sql");
    const sql = fs.readFileSync(sqlFilePath, "utf8");

    // run sql script
    const results = await executeQuery(sql, true);
    console.log("Database setup completed with results:", results);
  } catch (err) {
    console.error("Failed to set up the database:", err);
    process.exit(1);
  }
}

setupDatabase();
