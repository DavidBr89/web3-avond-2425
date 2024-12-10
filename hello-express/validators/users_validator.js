const { body, param } = require("express-validator");

const UsersValidators = {
  idValidator: [param("id").isInt()],
  emailValidator: [param("email").isString().isEmail()],
  createUserValidator: [
    body("firstName")
      .isString()
      .withMessage("Voornaam is verplicht")
      .notEmpty()
      .withMessage("Voornaam mag niet leeg zijn!")
      .trim(),
    body("lastName")
      .isString()
      .withMessage("Achternaam is verplicht")
      .notEmpty()
      .withMessage("Achternaam mag niet leeg zijn!")
      .trim(),
    body("email")
      .isString()
      .withMessage("Email is verplicht")
      .isEmail()
      .withMessage("Geen geldig email adres")
      .normalizeEmail(),
    body("password")
      .isString()
      .withMessage("Wachtwoord is verplicht")
      .notEmpty()
      .withMessage("Wachtwoord mag niet leeg zijn!")
      .isStrongPassword({
        minLength: 8,
        minNumbers: 1,
        minSymbols: 1,
        minUppercase: 1,
      })
      .withMessage(
        "Wachtwoord moet minstens uit 8 karakters bestaan waarvan 1 hoofdletter, 1 cijfer en 1 speciaal karakter."
      ),
    body("age")
      .isInt()
      .withMessage("Leeftijd moet nummeriek zijn")
      .optional()
      .trim(),
  ],
  updateUserValidator: [
    param("id").isInt(),
    body("firstName").isString().optional(),
    body("lastName").isString().optional(),
    body("email").isString().isEmail().optional(),
    body("password").isString().optional().isStrongPassword({
      minLength: 8,
      minNumbers: 1,
      minSymbols: 1,
      minUppercase: 1,
    }),
    body("age").isInt().optional(),
  ],
  loginValidator: [
    body("email").isString().isEmail(),
    body("password").isString().notEmpty(),
  ],
};

module.exports = UsersValidators;
