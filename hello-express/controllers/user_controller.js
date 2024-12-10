const prisma = require("../config/prisma");
const { validationResult } = require("express-validator");
const bcrypt = require("bcrypt");

const jwt = require("jsonwebtoken");

// CRUD - Create Read Update Delete (Destroy)
const UserController = {
  getAll: async (req, res) => {
    try {
      // Alles op te vragen -> SELECT id, firstName, lastName, email FROM users ORDER BY email ASC
      const users = await prisma.user.findMany({
        // Je kan geen include en select samen gebruiken
        // include: {
        //   profile: {
        //     select: {
        //       id: true,
        //       bio: true,
        //       birthday: true,
        //     },
        //   },
        // },
        select: {
          id: true,
          firstName: true,
          lastName: true,
          email: true,
          profile: {
            select: {
              id: true,
              bio: true,
              birthday: true,
            },
          },
        },
        // where: {

        // }
        // orderBy: {
        //   email: "asc",
        // },
      });

      res.json(users);
    } catch (error) {
      // Prisma Error - Server error
      res.status(500).json(error);
    }
  },
  getById: async (req, res) => {
    try {
      const { id } = req.params;

      const validationErrors = validationResult(req);

      if (!validationErrors.isEmpty()) {
        return res.status(400).json({ errors: validationErrors.array() });
      }

      const user = await prisma.user.findUnique({
        where: {
          id: Number.parseInt(id),
        },
        select: {
          id: true,
          firstName: true,
          lastName: true,
        },
      });

      //   if (user) {
      //     res.json(user);
      //   } else {
      //     res.sendStatus(404);
      //   }
      res.json(user);
    } catch (error) {
      res.status(500).send(error);
    }
  },
  getByEmail: async (req, res) => {
    try {
      const { email } = req.params;

      const validationErrors = validationResult(req);

      if (!validationErrors.isEmpty()) {
        return res.status(400).json({ errors: validationErrors.array() });
      }

      const user = await prisma.user.findUnique({
        where: {
          email: email,
        },
        select: {
          id: true,
          firstName: true,
          lastName: true,
          email: true,
        },
      });

      //   if (user) {
      //     res.json(user);
      //   } else {
      //     res.sendStatus(404);
      //   }
      res.json(user);
    } catch (error) {
      res.status(500).send(error);
    }
  },
  // Register
  create: async (req, res) => {
    try {
      const newUser = req.body;

      const validationErrors = validationResult(req);

      if (!validationErrors.isEmpty()) {
        return res.status(400).json({ errors: validationErrors.array() });
      }

      // Wachtwoord hashen
      const hashedPassword = await bcrypt.hash(newUser.password, 12);

      await prisma.user.create({
        data: {
          ...newUser,
          password: hashedPassword,
        },
      });

      // 201 - Created
      res.status(201).json({ ...newUser, password: undefined });
    } catch (error) {
      res.status(500).send(error);
    }
  },
  update: async (req, res) => {
    try {
      const { id } = req.params;
      const updatedUser = req.body;

      const validationErrors = validationResult(req);

      if (!validationErrors.isEmpty()) {
        return res.status(400).json({ errors: validationErrors.array() });
      }

      const user = await prisma.user.update({
        data: updatedUser,
        where: {
          id: Number.parseInt(id),
        },
      });

      res.json(user);
    } catch (error) {
      res.status(500).send(error);
    }
  },
  delete: async (req, res) => {
    try {
      const { id } = req.params;

      const validationErrors = validationResult(req);

      if (!validationErrors.isEmpty()) {
        return res.status(400).json({ errors: validationErrors.array() });
      }

      await prisma.user.delete({
        where: {
          id: Number.parseInt(id),
        },
      });
      //   204 - No Content
      res.sendStatus(204);
    } catch (error) {
      res.status(500).send(error);
    }
  },
  login: async (req, res) => {
    const { email, password } = req.body;

    const validationErrors = validationResult(req);

    if (!validationErrors.isEmpty()) {
      return res.status(400).json({ errors: validationErrors.array() });
    }

    try {
      const user = await prisma.user.findUnique({
        where: {
          email: email,
        },
      });

      if (!user) {
        return res.sendStatus(401);
      }

      // Wachtwoorden vergelijken
      const isPasswordMatch = await bcrypt.compare(password, user.password);

      if (isPasswordMatch) {
        // JWT Token aanmaken

        const payload = {
          sub: user.id,
          role: "user",
          iat: Date.now(),
        };
        const token = jwt.sign(payload, process.env.JWT_SECRET, {
          expiresIn: "7d",
        });

        // Server cookie
        res.cookie("web3", token, {
          httpOnly: true,
          // Enkel HTTPS
          // secure: true
          expires: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000),
        });
        res.json({ ...user, password: undefined });
      } else {
        res.sendStatus(401);
      }
    } catch (error) {
      res.status(500).send(error);
    }
  },
  verify: async (req, res) => {
    const { userId } = req;

    try {
      const user = await prisma.user.findUnique({
        select: {
          id: true,
          firstName: true,
          lastName: true,
          email: true,
        },
        where: {
          id: +userId,
        },
      });

      res.json(user);
    } catch (error) {
      res.status(500).send(error);
    }
  },
  logout: async (req, res) => {
    // Verwijderen van de server cookie
    res.clearCookie("web3").send("ok");
  },
  //   login: () => {},
  //   register: () => {},
};

module.exports = UserController;
