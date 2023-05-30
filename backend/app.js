const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const csurf = require("csurf");
const helmet = require("helmet");
const cookieParser = require("cookie-parser");
const { ValidationError } = require("sequelize");
// const indexRoutes = require('./routes/index');
const { environment } = require("./config");
const { restoreUser, requireAuth } = require("./utils/auth");
const isProduction = environment === "production";

console.log("Prod: ", isProduction);

const userRoutes = require("./routes/users");
const thingsToDoListTagRouter = require("./routes/thingsToDoListTags");
const thingsToDoListRouter = require("./routes/thingsToDoLists");
const thingsToDoRouter = require("./routes/thingsToDo");
const businessesRouter = require("./routes/businesses");
const descriptionsRouter = require("./routes/customDescriptions");
const experiencesRouter = require("./routes/customExperiences");

const app = express();

app.use(morgan("dev"));
app.use(cookieParser());
app.use(express.json());

if (isProduction) {
  app.use(cors());
  app.use(
    csurf({
      cookie: {
        secure: isProduction,
        sameSite: isProduction && "Lax",
        httpOnly: true,
      },
    })
  );
}

app.use(
  helmet({
    contentSecurityPolicy: false,
  })
);

// app.use('/', indexRoutes);

app.use(restoreUser);

app.use("/api/users", userRoutes);
app.use("/api/thingtodolisttag", thingsToDoListTagRouter);
app.use("/api/thingstodolists", thingsToDoListRouter);
app.use("/api/thingstodo", thingsToDoRouter);
app.use("/api/businesses", businessesRouter);
app.use("/api/descriptions", descriptionsRouter);
app.use("/api/experiences", experiencesRouter);

app.use((err, _req, _res, next) => {
  // check if error is a Sequelize error:
  if (err instanceof ValidationError) {
    err.errors = err.errors.map((e) => e.message);
    err.title = "Validation error";
  }
  next(err);
});

app.use((_req, _res, next) => {
  const err = new Error("The requested resource couldn't be found.");
  err.title = "Resource Not Found";
  err.errors = ["The requested resource couldn't be found."];
  err.status = 404;
  next(err);
});

app.use((err, _req, res, _next) => {
  res.status(err.status || 500);
  console.error(err);
  res.json({
    title: err.title || "Server Error",
    message: err.message,
    errors: err.errors,
    stack: isProduction ? null : err.stack,
  });
});

module.exports = app;
