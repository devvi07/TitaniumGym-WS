const express = require("express");
const router = express.Router();
const checkinController = require("../controllers/CheckInsController");

router.get("/", checkinController.getCheckIn);
router.get("/:id", checkinController.getCheckInById);
router.post("/", checkinController.crearCheckIn);
//router.put("/:id", checkinController.actualizarCheckIn);
router.put("/:customer_id", checkinController.actualizarCheckIn);
router.delete("/:id", checkinController.eliminarCheckIn);


module.exports = router;