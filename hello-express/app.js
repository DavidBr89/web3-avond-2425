// Dit package zorgt ervoor dat we met .env files kunnen gaan werken
require("dotenv").config();

// IMPORTS
// Thirdparty module
const express = require("express");
const cookieParser = require("cookie-parser");
const logger = require("morgan");
const helmet = require("helmet");
const cors = require("cors");
// import express from "express" -> Nieuwere manier zoals in React ES modules

// Core module
// const path = require("path");

// Lokale module
const indexRouter = require("./routes/index");
const usersRouter = require("./routes/users");
const productsRouter = require("./routes/products");
const profilesRouter = require("./routes/profiles");
const appMidlleware = require("./middlewares/app_middleware");

// APP GEÏNITIALISEERD
const app = express();

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

// HELMET
app.use(helmet());

// CORS
app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  })
);

// VERWIJDEREN WANT GEEN WEBSITE VIA EXPRESS
// app.use(express.static(path.join(__dirname, "public")));

// Custom middleware - APP Level middleware
// app.use((req, res, next) => {
//   console.log("Hallo vanuit de app level middleware");
//   //   Dit is om de request/response cyclus te gaan stoppen - Conditioneel bij een bepaalde check.
//   //   res.send("Response vanuit app level middleware");
//   next();
// });

app.use(appMidlleware);

app.use("/", indexRouter);
app.use("/users", usersRouter);
// Koppeling tussen het "/products" pad en onze productsRouter
app.use("/products", productsRouter);
app.use("/profiles", profilesRouter);

// EXPORT
module.exports = app;
