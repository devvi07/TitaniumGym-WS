const express = require("express");
const router = express.Router();
const checkoutController = require("../controllers/CheckOutController");

router.get("/", checkoutController.getCheckOut);
router.get("/:id", checkoutController.getCheckOutById);
router.post("/", checkoutController.crearCheckOut);
router.put("/:id", checkoutController.actualizarCheckOut);
router.delete("/:id", checkoutController.eliminarCheckOut);

module.exports = router;