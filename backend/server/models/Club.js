const mongoose = require('mongoose');

const clubSchema = new mongoose.Schema({
    name: { type: String, required: true, unique: true },
    description: { type: String },
    logo: { type: String, default: '' },
    members: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }],
    createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Club', clubSchema); 