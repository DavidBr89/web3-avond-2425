const express = require("express");
const UserController = require("../controllers/user_controller");
const router = express.Router();

/* GET users listing. */
// router.get("/", function (req, res, next) {
//   res.send("respond with a resource");
// });

// TODO: CRUD operaties voor de users + login/register

router.get("/", UserController.getAll);

router.get("/:id", UserController.getById);

router.get("/email/:email", UserController.getByEmail);

router.post("/", UserController.create);

router.patch("/:id", UserController.update);

router.delete("/:id", UserController.delete);

module.exports = router;
