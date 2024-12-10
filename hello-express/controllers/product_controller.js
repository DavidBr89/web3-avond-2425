// Controller voor de CRUD methodes
const ProductController = {
  createProduct: async (req, res) => {},
  getAllProducts: async (req, res) => {},
  getProductById: async (req, res) => {},
  updateProduct: async (req, res) => {},
  deleteProduct: async (req, res) => {},
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
