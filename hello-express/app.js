// IMPORTS
// Thirdparty module
const express = require("express");
const cookieParser = require("cookie-parser");
const logger = require("morgan");
// import express from "express" -> Nieuwere manier zoals in React ES modules

// Core module
// const path = require("path");

// Lokale module
const indexRouter = require("./routes/index");
const usersRouter = require("./routes/users");
const productsRouter = require("./routes/products");

// APP GEÏNITIALISEERD
const app = express();

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
// VERWIJDEREN WANT GEEN WEBSITE VIA EXPRESS
// app.use(express.static(path.join(__dirname, "public")));

app.use("/", indexRouter);
app.use("/users", usersRouter);
// Koppeling tussen het "/products" pad en onze productsRouter
app.use("/products", productsRouter);

// EXPORT
module.exports = app;
