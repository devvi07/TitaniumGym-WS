const Usuario = require("../models/Usuario");

exports.getUsuarios = async (req, res) => {
  const usuario = await Usuario.find();
  res.json(usuario);
};

exports.crearUsuario = async (req, res) => {
  const nuevo = new Usuario(req.body);
  await nuevo.save();
  res.status(201).json(nuevo);
};

exports.login = async (req, res) => {
  const { nombre, password } = req.body;

  const usuario = await Usuario.findOne({ nombre: nombre });

  if (!usuario)
    return res.status(401).json({ mensaje: '¡Usuario inexistente!' });

  const pass = password === usuario.password;

  if (!pass)
    return res.status(401).json({ mensaje: '¡Contraseña incorrecta!' });

  res.json({ mensaje: 'Login exitoso', usuario });
  
};