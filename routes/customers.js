const express = require("express");
const router = express.Router();
const customersController = require("../controllers/CustomerController");

router.get("/", customersController.getCustomers);
router.get("/:id", customersController.getCustomerById);
router.post("/", customersController.crearCustomer);
router.put("/:id", customersController.actualizarCustomer);
router.delete("/:id", customersController.eliminarCustomer);


module.exports = router;