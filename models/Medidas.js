const mongoose = require('mongoose');

const medidasSchema = new mongoose.Schema({
  peso: Number,
  grasa: Number,
  cuello: Number,
  hombros: Number,
  pecho: Number,
  cintura: Number,
  cadera: Number,
  fecha: { type: Date, default: Date.now },
  usuario: { type: mongoose.Schema.Types.ObjectId, ref: 'Usuario' }
});

module.exports = mongoose.model('Medidas', medidasSchema);