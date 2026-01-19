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