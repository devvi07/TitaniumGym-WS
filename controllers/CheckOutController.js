const CheckOut = require("../models/CheckOuts");

exports.getCheckOut = async (req, res) => {
  const checkout = await CheckOut.find();
  res.json(checkout);
};

exports.getCheckOutById = async (req, res) => {
  try {
    const { id } = req.params;

    const checkout = await CheckOut.findById(id);

    if (!checkout) {
      return res.status(404).json({ error: "CheckOut inexistente" });
    }

    res.json(checkout);

  } catch (error) {
    res.status(400).json({ error: "ID inválido" });
  }
};

exports.crearCheckOut = async (req, res) => {
  const nuevo = new CheckOut(req.body);
  await nuevo.save();
  res.status(201).json(nuevo);
};

exports.actualizarCheckOut = async (req, res) => {
  try {
    const actualizado = await CheckOut.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!actualizado) return res.status(404).json({ mensaje: "No encontrado" });
    res.json(actualizado);
  } catch {
    res.status(400).json({ error: "ID inválido" });
  }
};

exports.eliminarCheckOut = async (req, res) => {
  try {
    const eliminado = await CheckOut.findByIdAndDelete(req.params.id);
    if (!eliminado) return res.status(404).json({ mensaje: "No encontrado" });
    res.json({ mensaje: "CheckOut eliminado" });
  } catch {
    res.status(400).json({ error: "ID inválido" });
  }
};