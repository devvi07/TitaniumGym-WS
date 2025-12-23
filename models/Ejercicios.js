const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ejerciciosSchema = new Schema({
    idEjercicio: String,
    idRutina: { type: mongoose.Schema.Types.ObjectId, ref: 'Rutinas' },
    nombre: String,
    instruccion: String,
    tecnicaIntensidad: String,
    series: String,
    repeticiones: String,
    descanso: String,
    video: String,
}, { timestamps: true });

module.exports = mongoose.model('Ejercicios', ejerciciosSchema);