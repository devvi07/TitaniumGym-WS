const express = require("express");
const router = express.Router();
const usuarioController = require("../controllers/UsuarioController");

router.get("/", usuarioController.getUsuarios);
router.get("/:id", usuarioController.getUserById);
router.post("/", usuarioController.crearUsuario);
router.post("/login", usuarioController.login);
router.put("/:id", usuarioController.actualizarUsuario);
router.delete("/:id", usuarioController.eliminarUsuario);

module.exports = router;