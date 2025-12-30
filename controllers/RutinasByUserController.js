const mongoose = require('mongoose');
const RutinasByUser = require("../models/RutinasByUser");

exports.getRutinas = async (req, res) => {
  const rutina = await RutinasByUser.find();
  res.json(rutina);
};

exports.creaRutinaByUser = async (req, res) => {
  const nuevo = new RutinasByUser(req.body);
  await nuevo.save();
  res.status(201).json(nuevo);
};

exports.getRutinaByUser = async (req, res) => {
  try {
    const { usuario } = req.params;

    const ejercicios = await RutinasByUser.find({
      usuario: new mongoose.Types.ObjectId(usuario)
    }).populate('ejercicios');

    res.json(ejercicios);
  } catch (error) {
    console.error(error);
    res.status(500).json({ msg: 'Error al obtener ejercicios' });
  }
};