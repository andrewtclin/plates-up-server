const express = require("express");
const logger = require("morgan");
const env = require("./env");
const swaggerjsdoc = require("swagger-jsdoc");
const swaggerui = require("swagger-ui-express");

const app = express();

//#region ------ server configuration ------
// debug logger
app.use(logger("dev"));

// data parser
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
//#endregion ------ server configuration ------

//#region  ------ api routes ------
// routes registerations
const userRouter = require("./routes/user");
const loginRouter = require("./routes/login");
const exerciseRouter = require("./routes/exercise");
const progressRouter = require("./routes/progress");

// endpoints definition
app.use("/apis/v1/user", userRouter);
app.use("/apis/v1/login", loginRouter);
app.use("/apis/v1/exercise", exerciseRouter);
app.use("/apis/v1/progress", progressRouter);

const options = {
  definition: {
    openapi: "3.0.0",
    servers: [{ url: `http://${env.SERVER_HOST}:${env.SERVER_PORT}/` }],
    info: {
      title: "Plates-Up API Documentation",
      version: "1.0.0",
      description: "The exercise logs API for Plates-Up.",
    },
    contact: {
      name: "TC. Lin",
      url: "https://tclin.jastudio-tech.com/",
      email: "chuntcdj@gmail.com",
    },
  },
  apis: ["./routes/*.js"],
};
const specs = swaggerjsdoc(options);
app.use("/api-docs", swaggerui.serve, swaggerui.setup(specs));

//#endregion ------ api routes ------

//#region ------ api error handling ------
app.use((req, res, next) => {
  const err = new Error("Not Found");
  err.status = 404;
  next(err);
});

app.use((err, req, res, next) => {
  res.status(err.status || 500).json({
    message: err.message,
    error: req.app.get("env") === "development" ? err : {},
  });
});
//#endregion ------ api error handling ------

// run server
app.listen(env.SERVER_PORT, env.SERVER_HOST, () => {
  console.log(
    `Server running at http://${env.SERVER_HOST}:${env.SERVER_PORT}/`
  );
  console.log(
    "Server is running in " +
      (env.SERVER_DEBUG ? "debug" : "production") +
      " mode"
  );
});

module.exports = app;
