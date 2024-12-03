const ProductsMiddlewares = {
  routerMiddleware: (req, res, next) => {
    console.log("Hallo vanuit de Products Router Level Middleware");
    next();
  },
  pathMiddleware: (req, res, next) => {
    console.log("Hallo vanuit de lokale middleware products/test");
    next();
  },
};

module.exports = ProductsMiddlewares;
