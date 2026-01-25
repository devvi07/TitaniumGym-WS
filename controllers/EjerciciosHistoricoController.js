const mongoose = require('mongoose');
const EjerciciosHistorico = require("../models/EjerciciosHistorico");

exports.getEjerciciosHistorico = async (req, res) => {
  const historico = await EjerciciosHistorico.find();
  res.json(historico);
};

exports.creaEjerciciosHistorico = async (req, res) => {
  const nuevo = new EjerciciosHistorico(req.body);
  await nuevo.save();
  res.status(201).json(nuevo);
};

exports.getEjerciciosHistoricoByUser = async (req, res) => {
  try {
    let { usuario } = req.params;
    usuario = usuario.trim();

    let query;

    if (mongoose.Types.ObjectId.isValid(usuario)) {
      query = {
        $or: [
          { usuario: usuario },
          { usuario: new mongoose.Types.ObjectId(usuario) }
        ]
      };
    } else {
      query = { usuario };
    }

    const historico = await EjerciciosHistorico.find(query);

    res.json(historico);

  } catch (error) {
    console.error(error);
    res.status(500).json({ msg: 'Error al obtener ejercicios' });
  }
};




exports.getEjerciciosHistoricoByUserEx = async (req, res) => {
  try {
    const { usuario, ejercicio } = req.params;

    const historico = await EjerciciosHistorico.find({
      usuario,
      ejercicio
    });

    res.json(historico);

  } catch (error) {
    console.error(error);
    res.status(500).json({ msg: 'Error al obtener ejercicios' });
  }
};

exports.getEjerciciosHistoricoByUserExArr = async (req, res) => {
  try {
    const { usuario } = req.params;
    const { ejercicios } = req.body; // arreglo de IDs

    if (!Array.isArray(ejercicios) || ejercicios.length === 0) {
      return res.status(400).json({ msg: 'Debes enviar un arreglo de ejercicios' });
    }

    const historico = await EjerciciosHistorico.find({
      usuario,
      ejercicio: { $in: ejercicios }
    }).sort({ fecha: -1 }); // opcional: más recientes primero

    res.json(historico);

  } catch (error) {
    console.error(error);
    res.status(500).json({ msg: 'Error al obtener ejercicios' });
  }
};
