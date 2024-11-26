// Controller voor de CRUD methodes
const ProductController = {
  createProduct: () => {},
  getAllProducts: (request, response) => {
    // Gebruik makend van het response object -> send() methode
    // Eindtoestand
    response.send(
      "<html><head></head><body><h1>Alle producten</h1></body></html>"
    );
  },
  getProductById: (req, res) => {},
  updateProduct: () => {},
  deleteProduct: () => {},
};

// ProductController gaan exporteren
module.exports = ProductController;
