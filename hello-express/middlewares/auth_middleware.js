const jwt = require("jsonwebtoken");

const authMiddleware = (req, res, next) => {
  const cookie = req.cookies;

  if (cookie) {
    const token = cookie.web3;

    if (token) {
      const decodedPayload = jwt.verify(token, process.env.JWT_SECRET);

      if (decodedPayload) {
        req.userId = decodedPayload.sub;
        next();
        return;
      }
    }
  }
  res.sendStatus(401);
};

module.exports = authMiddleware;
