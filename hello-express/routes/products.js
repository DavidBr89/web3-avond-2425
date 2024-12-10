// Lokale module

const express = require("express");
const router = express.Router();

const ProductController = require("../controllers/product_controller");
const ProductsMiddlewares = require("../middlewares/products_middlewares");

// ROUTER LEVEL MIDDLEWARE -> Deze code wordt enkel dan uitgevoerd bij het /products pad en zijn subpaden

router.use(ProductsMiddlewares.routerMiddleware);

// TODO: Alle functies in de controller gaan steken

// ROUTES AFHANDELEN
// "/products" -> Alle producten opvragen (GET), product opvragen op id (GET), product aanmaken (POST), product updaten (PUT/PATCH), product verwijderen (DELETE)

// GET "/products/" => Alle producten opvragen
// (req, res) => {} => Request handler (callback) -> code wordt uitgevoerd bij het afhandelen van deze request
router.get("/", ProductController.getAllProducts);

router.get("/:id", ProductController.getProductById);

router.post("/", ProductController.createProduct);

router.put("/:id", ProductController.updateProduct);

router.delete("/:id", ProductController.deleteProduct);

// // GET "/products/test" => Testpagina tonen
// router.get(
//   "/test",
//   ProductsMiddlewares.pathMiddleware,
//   ProductController.testFn
// );

// // TEST STATUSCODES

// router.get("/error", (req, res) => {
//   // Internal server error
//   res.sendStatus(500);
// });

// router.get("/login", (req, res) => {
//   // BAD REQUEST (400) - Incorrect formaat van data, meestal gebruikt bij validatie
//   //   res.sendStatus(400);
//   // UNAUTHORIZED (401) - Gebruiker is niet ingelogd
//   //   res.sendStatus(401);
//   // FORBIDDEN (403) - Rollen te maken -> Gebruiker is ingelogd maar heeft bijvoorbeeld geen admin rechten
//   res.sendStatus(403);
// });

// // OPGELET -> VOLGORDE IS BIJLANGRIJK
// // GET "/products/12" => Eén product opvragen met deze specifieke id (dynamische parameter)
// router.get("/:id", (req, res) => {
//   // De id komt uit uw params object vanuit het request object
//   const { id } = req.params;

//   //   TODO: Product opvragen uit de databank met de gegeven id
//   const product = {
//     id: Number.parseInt(id),
//     name: "Web 3 boek",
//   };

//   //   res.send(`Product met id: ${id}`);
//   res.json(product);
// });

// // POST "/products/" => Een nieuw product kan aanmaken
// // Vanuit de body property -> haal je de data vanuit het request object van de client
// router.post("/", (req, res) => {
//   const newProduct = req.body;

//   // TODO: Product aanmaken in de databank
//   // Statuscode voor created - 201 -> teruggeven via status() methode
//   res.status(201).json({ id: 14, ...newProduct });
//   //   res.send("Product is aangemaakt!");
// });

// // PUT "/products/12" => Een product te updaten
// router.put("/:id", (req, res) => {
//   res.send("Product is geüpdated");
// });

// // PATCH "/products/12" => Een product updaten maar meestal maar een gedeelte
// router.patch("/:id", (req, res) => {
//   res.send("Product is gepatched.");
// });

// // DELETE "/products/12" => Een product met id verwijderen
// router.delete("/:id", (req, res) => {
//   const { id } = req.params;
//   //   TODO: Het product met de id verwijderen uit uw databank
//   //   De status methode -> geen eindtoestand
//   //   De sendStatus() methode -> wel eindtoestand
//   res.sendStatus(204);
// });

// // Fallback route
// router.all("/*fallback", (req, res) => {
//   res.sendStatus(404);
// });

// EXPORT
module.exports = router;
