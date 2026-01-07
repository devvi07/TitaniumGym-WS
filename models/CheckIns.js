const mongoose = require('mongoose');

const checkinsSchema = new mongoose.Schema({
    customer_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Custumers',
        required: true
    },
    check_in_time: { type: Date,default: Date.now},
    check_out_time: { type: Date,default: Date.now},
    notes: String,
}, { timestamps: true });

module.exports = mongoose.model('CheckIns', checkinsSchema);