const mongoose = require('mongoose');
const Ejercicios = require("../models/Ejercicios");

exports.getEjercicios = async (req, res) => {
  const ejercicio = await Ejercicios.find();
  res.json(ejercicio);
};

exports.crearEjercicio = async (req, res) => {
  const nuevo = new Ejercicios(req.body);
  await nuevo.save();
  res.status(201).json(nuevo);
};

exports.getEjercicioByRutina = async (req, res) => {
  try {
    const { idRutina } = req.params;

    const ejercicios = await Ejercicios.find({
      idRutina: new mongoose.Types.ObjectId(idRutina)
    }).populate('idRutina');

    res.json(ejercicios);
  } catch (error) {
    console.error(error);
    res.status(500).json({ msg: 'Error al obtener ejercicios' });
  }
};

exports.getEjercicioByRutinas = async (req, res) => {
  try {
    const { idRutinas } = req.body;

    const ejercicios = await Ejercicios.find({
      idRutina: {
        $in: idRutinas.map(id => new mongoose.Types.ObjectId(id))
      }
    }).populate('idRutina');

    res.json(ejercicios);
  } catch (error) {
    console.error(error);
    res.status(500).json({ msg: 'Error al obtener ejercicios' });
  }
};
