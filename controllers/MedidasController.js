const Medidas = require("../models/Medidas");

exports.getMedidas = async (req, res) => {
  const medida = await Medidas.find();
  res.json(medida);
};

exports.crearMedida = async (req, res) => {
  const nuevo = new Medidas(req.body);
  await nuevo.save();
  res.status(201).json(nuevo);
};

exports.getMedidaByUser = async (req, res) => {
  try {

    const { usuario } = req.params;
    console.log('usuario ',usuario);
    const filtro = {};

    if (usuario) filtro.usuario = usuario;

    const medidas = await Medidas.find(filtro)
    res.json(medidas);

  } catch {
    res.status(400).json({ error: "Usuario inexistente" });
  }
};
