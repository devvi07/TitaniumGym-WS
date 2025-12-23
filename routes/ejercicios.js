const express = require("express");
const router = express.Router();
const ejerciciosController = require("../controllers/EjerciciosController");

router.get("/", ejerciciosController.getEjercicios);
router.get("/:idRutina", ejerciciosController.getEjercicioByRutina);
router.post("/", ejerciciosController.crearEjercicio);

module.exports = router;