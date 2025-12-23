const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const rutinasSchema = new Schema({
    idRutina: String,
    nombre: String,
}, { timestamps: true });

module.exports = mongoose.model('Rutinas', rutinasSchema);