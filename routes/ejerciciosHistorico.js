const express = require("express");
const router = express.Router();
const ejerciciosHistoricoController = require("../controllers/EjerciciosHistoricoController");

router.get("/", ejerciciosHistoricoController.getEjerciciosHistorico);
router.get("/:usuario", ejerciciosHistoricoController.getEjerciciosHistoricoByUser);
router.get("/:usuario/:ejercicio", ejerciciosHistoricoController.getEjerciciosHistoricoByUserEx);
router.post("/", ejerciciosHistoricoController.creaEjerciciosHistorico);

module.exports = router;