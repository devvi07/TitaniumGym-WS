const express = require("express");
const router = express.Router();
const ejerciciosHistoricoController = require("../controllers/EjerciciosHistoricoController");

router.get("/", ejerciciosHistoricoController.getEjerciciosHistorico);
router.get("/:usuario/:ejercicio", ejerciciosHistoricoController.getEjerciciosHistoricoByUser);
router.post("/", ejerciciosHistoricoController.creaEjerciciosHistorico);

module.exports = router;