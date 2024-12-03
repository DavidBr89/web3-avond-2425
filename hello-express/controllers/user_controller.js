const prisma = require("../config/prisma");

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
      // TODO: Validatie op deze params

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
      // TODO:  Validatie op deze params

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
  create: async (req, res) => {
    try {
      const newUser = req.body;
      // TODO: Validatie toevoegen

      await prisma.user.create({
        data: newUser,
      });

      // 201 - Created
      res.sendStatus(201);
    } catch (error) {
      res.status(500).send(error);
    }
  },
  update: async (req, res) => {
    try {
      const { id } = req.params;
      const updatedUser = req.body;
      // TODO: Validatie toevoegen
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
      // TODO: Validatie toevoegen

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
  //   login: () => {},
  //   register: () => {},
};

module.exports = UserController;
