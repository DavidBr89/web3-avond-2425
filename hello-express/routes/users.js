const express = require("express");
const UserController = require("../controllers/user_controller");
const router = express.Router();

const { body, param } = require("express-validator");
const UsersValidators = require("../validators/users_validator");

/* GET users listing. */
// router.get("/", function (req, res, next) {
//   res.send("respond with a resource");
// });

// TODO: CRUD operaties voor de users + login/register

router.get("/", UserController.getAll);

router.get("/:id", UsersValidators.idValidator, UserController.getById);

router.get(
  "/email/:email",
  UsersValidators.emailValidator,
  UserController.getByEmail
);

// router.post("/", UsersValidators.createUserValidator, UserController.create);

router.patch(
  "/:id",
  UsersValidators.updateUserValidator,
  UserController.update
);

router.delete("/:id", UsersValidators.idValidator, UserController.delete);

module.exports = router;
