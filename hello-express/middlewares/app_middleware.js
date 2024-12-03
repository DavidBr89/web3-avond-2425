const appMidlleware = (req, res, next) => {
  console.log("Hallo vanuit de app level middleware");
  //   Dit is om de request/response cyclus te gaan stoppen - Conditioneel bij een bepaalde check.
  //   res.send("Response vanuit app level middleware");
  next();
};

module.exports = appMidlleware;
