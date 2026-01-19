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
    const { usuario } = req.params;

    console.log("PARAM usuario:", usuario);
    console.log("TIPO:", typeof usuario);

    const historico = await EjerciciosHistorico.find({ usuario });

    console.log("RESULTADO:", historico.length);

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