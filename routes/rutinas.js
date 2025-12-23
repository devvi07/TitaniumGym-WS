const express = require("express");
const router = express.Router();
const rutinasController = require("../controllers/RutinasController");

router.get("/", rutinasController.getMedidas);
router.post("/", rutinasController.crearRutina);

module.exports = router;