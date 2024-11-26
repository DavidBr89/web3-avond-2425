// Lokale module

const express = require("express");
const router = express.Router();

// ROUTES AFHANDELEN
// "/products" -> Alle producten opvragen (GET), product opvragen op id (GET), product aanmaken (POST), product updaten (PUT/PATCH), product verwijderen (DELETE)

// GET "/products/" => Alle producten opvragen
// (req, res) => {} => Request handler (callback) -> code wordt uitgevoerd bij het afhandelen van deze request
router.get("/", (request, response) => {
  // Gebruik makend van het response object -> send() methode
  // Eindtoestand
  response.send(
    "<html><head></head><body><h1>Alle producten</h1></body></html>"
  );
});

// GET "/products/test" => Testpagina tonen
router.get("/test", (req, res) => {
  res.send("Testpagina");
});

// OPGELET -> VOLGORDE IS BIJLANGRIJK
// GET "/products/12" => Eén product opvragen met deze specifieke id (dynamisch)
router.get("/:id", (req, res) => {
  res.send("Product met id: ...");
});

// POST "/products/" => Een nieuw product kan aanmaken
router.post("/", (req, res) => {
  res.send("Product is aangemaakt!");
});

// PUT "/products/12" => Een product te updaten
router.put("/:id", (req, res) => {
  res.send("Product is geüpdated");
});

// PATCH "/products/12" => Een product updaten maar meestal maar een gedeelte
router.patch("/:id", (req, res) => {
  res.send("Product is gepatched.");
});

// DELETE "/products/12" => Een product met id verwijderen
router.delete("/:id", (req, res) => {
  res.send("Product is verwijderd");
});

// EXPORT
module.exports = router;
