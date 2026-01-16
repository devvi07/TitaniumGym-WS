const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ejerciciosHistoricoSchema = new Schema({
  usuario: String,
  ejercicio: String,
  ejercicioNombre: String,
  raiting: String,
  peso: Number,
  series: Number,
  repeticiones: Number,
  fecha: {
    type: Date,
    default: Date.now,
    index: true
  }
}, { timestamps: true });

module.exports = mongoose.model('EjerciciosHistorico', ejerciciosHistoricoSchema);