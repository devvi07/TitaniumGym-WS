const mongoose = require('mongoose');

const customersSchema = new mongoose.Schema({
  first_name: String,
  last_name: String,
  email: String,
  phone: String,
  date_of_birth: Date,
  gender: String,
  address: String,
  emergency_contact_name: String,
  emergency_contact_phone: String,
  is_active: Boolean,
  user_type: Number,
  profile_url: String,
  dias_restantes: Number
}, { timestamps: true });

module.exports = mongoose.model('Custumers', customersSchema);
