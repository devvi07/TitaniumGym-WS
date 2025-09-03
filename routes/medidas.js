const express = require("express");
const router = express.Router();
const medidasController = require("../controllers/MedidasController");

router.get("/", medidasController.getMedidas);
router.get("/:id", medidasController.getMedidaByUser);
router.post("/", medidasController.crearMedida);

module.exports = router;