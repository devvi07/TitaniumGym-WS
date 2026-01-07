const jwt = require("jsonwebtoken");

module.exports = function (req, res, next) {
  const authHeader = req.headers.authorization;

  if (!authHeader) {
    return res.status(401).json({ msg: "Token requerido" });
  }

  const [type, token] = authHeader.split(" ");

  if (type !== "Bearer" || !token) {
    return res.status(401).json({ msg: "Token mal formado" });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.tokenData = decoded;
    next();
  } catch (err) {
    return res.status(401).json({ msg: "Token inválido o expirado" });
  }
};
