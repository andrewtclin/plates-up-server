const express = require("express");
const appEnv = require("../env");

const writeLog = (level, msg) => {
  logger.log(level, msg);
};

// HTTP code status and default descriptions
const status = {
  200: "OK",
  400: "Bad Request",
  401: "Unauthorized",
  403: "Forbidden",
  404: "Not Found",
  405: "Method Not Allowed",
  500: "Internal Server Error",
};

const defaultDescription = {
  200: "Successful response",
  400: "Please check parameters or query validity.",
  401: "Please read the document to check API.",
  403: "Please read the document to check API.",
  404: "Please read the document to check API.",
  405: "Please read the document to check API.",
  500: "Please contact API server manager.",
};

const apiResult = (res, code, data = {}, description = "") => {
  if (description === "") {
    description = defaultDescription[code];
  }
  res.status(code).json({
    code: code,
    status: status[code],
    result: data,
    description: description,
  });
};

module.exports = { apiResult, writeLog };
