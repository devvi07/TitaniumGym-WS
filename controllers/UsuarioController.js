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

exports.actualizarUsuario = async (req, res) => {
  try {
    const actualizado = await Usuario.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!actualizado) return res.status(404).json({ mensaje: "No encontrado" });
    res.json(actualizado);
  } catch {
    res.status(400).json({ error: "ID inválido" });
  }
};

exports.eliminarUsuario = async (req, res) => {
  try {
    const eliminado = await Usuario.findByIdAndDelete(req.params.id);
    if (!eliminado) return res.status(404).json({ mensaje: "No encontrado" });
    res.json({ mensaje: "Usuario eliminado" });
  } catch {
    res.status(400).json({ error: "ID inválido" });
  }
};

exports.getUserById = async (req, res) => {
  try {
    const { id } = req.params;

    const usuario = await Usuario.findById(id);

    if (!usuario) 
      return res.status(404).json({ error: "Usuario inexistente" });
    

    res.json(usuario);

  } catch (error) {
    res.status(400).json({ error: "ID inválido" });
  }
};