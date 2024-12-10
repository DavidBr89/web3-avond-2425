const express = require("express");
const UserController = require("../controllers/user_controller");
const UsersValidators = require("../validators/users_validator");
const router = express.Router();

/* GET home page. */
router.get("/", function (req, res, next) {
  res.send("Hello Express vanuit Web 3!");
});

router.post("/login", UsersValidators.loginValidator, UserController.login);
router.post(
  "/register",
  UsersValidators.createUserValidator,
  UserController.create
);

module.exports = router;
