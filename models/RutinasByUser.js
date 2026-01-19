const mongoose = require('mongoose');

const rutinasByUserSchema = new mongoose.Schema({
  usuario: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Usuario',
    required: true
  },
  dia: {
    type: String,
    required: true
  },
  ejercicios: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Ejercicios'
    }
  ],
  data:[],
  cardio: {
    type: String,
    required: true
  }
}, { timestamps: true });

module.exports = mongoose.model('RutinasByUser', rutinasByUserSchema);
