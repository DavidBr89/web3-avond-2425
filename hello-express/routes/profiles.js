const express = require("express");
const UsersValidators = require("../validators/users_validator");
const ProfileController = require("../controllers/profile_controller");
const authMiddleware = require("../middlewares/auth_middleware");
const router = express.Router();

// ROUTER LEVEL -> MOET INGELOGD ZIJN
router.use(authMiddleware);

router.get("/", UsersValidators.idValidator, ProfileController.getById);
// OPGELET VALIDATIE TOEVOEGEN
router.post("/", ProfileController.create);

module.exports = router;
