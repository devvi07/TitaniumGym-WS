const express = require("express");
const router = express.Router();
const rutinasByUserController = require("../controllers/RutinasByUserController");

router.get("/", rutinasByUserController.getRutinas);
router.get("/:usuario", rutinasByUserController.getRutinaByUser);
router.post("/", rutinasByUserController.creaRutinaByUser);

module.exports = router;