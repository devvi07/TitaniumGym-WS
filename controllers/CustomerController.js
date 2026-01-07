const Customer = require("../models/Customers");

exports.getCustomers = async (req, res) => {
  const customer = await Customer.find();
  res.json(customer);
};

exports.getCustomerById = async (req, res) => {
  try {
    const { id } = req.params;

    const customer = await Customer.findById(id);

    if (!customer) {
      return res.status(404).json({ error: "Customer inexistente" });
    }

    res.json(customer);

  } catch (error) {
    res.status(400).json({ error: "ID inválido" });
  }
};


exports.crearCustomer = async (req, res) => {
  const nuevo = new Customer(req.body);
  await nuevo.save();
  res.status(201).json(nuevo);
};

exports.actualizarCustomer = async (req, res) => {
  try {
    const actualizado = await Customer.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!actualizado) return res.status(404).json({ mensaje: "No encontrado" });
    res.json(actualizado);
  } catch {
    res.status(400).json({ error: "ID inválido" });
  }
};

exports.eliminarCustomer = async (req, res) => {
  try {
    const eliminado = await Customer.findByIdAndDelete(req.params.id);
    if (!eliminado) return res.status(404).json({ mensaje: "No encontrado" });
    res.json({ mensaje: "Custumer eliminado" });
  } catch {
    res.status(400).json({ error: "ID inválido" });
  }
};