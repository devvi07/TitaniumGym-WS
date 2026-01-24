const CheckIn = require("../models/CheckIns");

exports.getCheckIn = async (req, res) => {
  const checkin = await CheckIn.find();
  res.json(checkin);
};

exports.getCheckInById = async (req, res) => {
  try {
    const { id } = req.params;

    const checkin = await CheckIn.findById(id);

    if (!checkin) {
      return res.status(404).json({ error: "CheckIn inexistente" });
    }

    res.json(checkin);

  } catch (error) {
    res.status(400).json({ error: "ID inválido" });
  }
};

exports.crearCheckIn = async (req, res) => {
  const nuevo = new CheckIn(req.body);
  await nuevo.save();
  res.status(201).json(nuevo);
};

/*exports.actualizarCheckIn = async (req, res) => {
  try {
    const actualizado = await CheckIn.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!actualizado) return res.status(404).json({ mensaje: "No encontrado" });
    res.json(actualizado);
  } catch {
    res.status(400).json({ error: "ID inválido" });
  }
};*/

exports.actualizarCheckIn = async (req, res) => {
  try {
    const actualizado = await CheckIn.findOneAndUpdate(
      { customer_id: req.params.customer_id }, // filtro por atributo
      req.body,                                // datos a actualizar
      { new: true }                            // devolver documento actualizado
    );

    if (!actualizado) {
      return res.status(404).json({ mensaje: "No encontrado" });
    }

    res.json(actualizado);

  } catch (error) {
    res.status(400).json({ error: "Error al actualizar", detalle: error.message });
  }
};


exports.eliminarCheckIn = async (req, res) => {
  try {
    const eliminado = await CheckIn.findByIdAndDelete(req.params.id);
    if (!eliminado) return res.status(404).json({ mensaje: "No encontrado" });
    res.json({ mensaje: "CheckIn eliminado" });
  } catch {
    res.status(400).json({ error: "ID inválido" });
  }
};