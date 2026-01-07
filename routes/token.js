const express = require("express");
const router = express.Router();
const jwt = require("jsonwebtoken");

router.post("/", (req, res) => {
  const { usuario, password } = req.body;

  if (!usuario || !password) {
    return res.status(400).json({ msg: "usuario y password requeridos" });
  }

  // Validar contra ENV
  if (
    usuario !== process.env.API_USER ||
    password !== process.env.API_PASSWORD
  ) {
    return res.status(401).json({ msg: "Credenciales inválidas" });
  }

  // Payload mínimo
  const payload = {
    usuario,
    type: "api"
  };

  const token = jwt.sign(payload, process.env.JWT_SECRET, {
    expiresIn: process.env.JWT_EXPIRES_IN || "1d"
  });

  res.json({ token });
});

module.exports = router;
