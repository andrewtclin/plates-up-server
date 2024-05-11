// server configuration
const SERVER_HOST = "0.0.0.0";
const SERVER_PORT = 3000;
const SERVER_DEBUG = true;

// logger information
const LOG_FILENAME = process.env.LOG_FILENAME || "logger-api";

// database configuration
const MYSQL_HOST = process.env.MYSQL_HOST || "localhost";
const MYSQL_PORT = parseInt(process.env.MYSQL_PORT, 10) || 3306;
const MYSQL_USER = process.env.MYSQL_USER || "root";
const MYSQL_PASSWORD = process.env.MYSQL_PASSWORD || "password";
const MYSQL_DATABASE = process.env.MYSQL_DATABASE || "my_database";

module.exports = {
  SERVER_HOST,
  SERVER_PORT,
  SERVER_DEBUG,
  LOG_FILENAME,
  MYSQL_HOST,
  MYSQL_PORT,
  MYSQL_USER,
  MYSQL_PASSWORD,
  MYSQL_DATABASE,
};
