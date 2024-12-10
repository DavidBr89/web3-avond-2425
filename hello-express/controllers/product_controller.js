const prisma = require("../config/prisma");

// Controller voor de CRUD methodes
const ProductController = {
  getAllProducts: async (req, res) => {
    try {
      const products = await prisma.product.findMany({
        include: {
          category: true,
        },
      });

      res.json(products);
    } catch (error) {
      res.status(500).send(error);
    }
  },
  getProductById: async (req, res) => {
    try {
      const { id } = req.params;

      // TODO: Validatie

      const product = await prisma.product.findUnique({
        where: {
          // id: Number.parseInt(id)
          id: +id,
        },
      });

      res.json(product);
    } catch (error) {
      res.status(500).send(error);
    }
  },
  createProduct: async (req, res) => {
    try {
      const newData = req.body;
      // TODO: Validatie

      const newProduct = await prisma.product.create({
        data: newData,
      });

      res.status(201).json(newProduct);
    } catch (error) {
      res.status(500).send(error);
    }
  },
  updateProduct: async (req, res) => {
    try {
      const { id } = req.params;
      const newData = req.body;

      // TODO: Validatie

      const updatedProduct = await prisma.product.update({
        where: {
          id: +id,
        },
        data: newData,
      });

      res.json(updatedProduct);
    } catch (error) {
      res.status(500).send(error);
    }
  },
  deleteProduct: async (req, res) => {
    try {
      const { id } = req.params;

      // TODO: Validatie

      await prisma.product.delete({
        where: {
          id: +id,
        },
      });

      res.sendStatus(204);
    } catch (error) {
      res.status(500).send(error);
    }
  },
  // testFn: (req, res) => {
  //   const { lang, color } = req.query;

  //   // Opvragen van de waarde van uw environment variabele met de key
  //   console.log(process.env.MSG);

  //   switch (lang) {
  //     case "nl":
  //       res.send("Dit is de testpagina.");
  //       break;
  //     case "en":
  //       res.send("This is the testpage.");
  //       break;
  //     default:
  //       res.send("Dit is de testpagina. FALLBACK.");
  //       break;
  //   }

  //   //   if (lang) {
  //   //     if (lang === "nl") {
  //   //       return res.send("Dit is de testpagina.");
  //   //     } else if (lang === "en") {
  //   //       return res.send("This is the testpage.");
  //   //     }
  //   //   }

  //   //   res.send("Dit is de testpagina. FALLBACK.");

  //   //   res.send("Testpagina");
  // },
};

// ProductController gaan exporteren
module.exports = ProductController;
