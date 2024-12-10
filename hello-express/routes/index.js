const express = require("express");
const UserController = require("../controllers/user_controller");
const UsersValidators = require("../validators/users_validator");
const authMiddleware = require("../middlewares/auth_middleware");
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

router.get("/verify", authMiddleware, UserController.verify);

router.get("/logout", authMiddleware, UserController.logout);

module.exports = router;
