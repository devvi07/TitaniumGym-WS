const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const usuarioSchema = new Schema({
  nombre: String,
  password: String,
  tipoUsuario: Number,
  data:{}
}, { timestamps: true });

module.exports = mongoose.model('Usuario', usuarioSchema);