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

    /*const medida = await Medidas.findById(req.params.id);
    if (!medida) return res.status(404).json({ mensaje: "No encontrado" });*/

    const { usuario } = req;
    console.log('usuario ',usuario);
    const filtro = {};

    if (usuario) filtro.usuario = usuario;

    const medidas = await Medidas.find(filtro)
    res.json(medidas);

  } catch {
    res.status(400).json({ error: "ID inválido" });
  }
};
