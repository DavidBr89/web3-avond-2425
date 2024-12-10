const prisma = require("../config/prisma");

const ProfileController = {
  getById: async (req, res) => {
    const { userId } = req;

    try {
      const profile = await prisma.user.findUnique({
        select: {
          profile: true,
        },
        where: {
          id: +userId,
        },
      });

      res.json(profile.profile);
    } catch (error) {
      res.status(500).send(error);
    }
  },
  create: async (req, res) => {
    const { userId } = req;
    const data = req.body;

    try {
      const newProfile = await prisma.profile.create({
        data: {
          bio: data.bio,
          user: {
            // Relaties in Prisma te connecteren met elkaar
            connect: {
              id: +userId,
            },
          },
        },
      });

      res.status(201).json(newProfile);
    } catch (error) {
      res.status(500).send(error);
    }
  },
};

module.exports = ProfileController;
