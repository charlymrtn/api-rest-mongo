'use strict'

const mongoose = require('mongoose');
const { Schema } = mongoose;

const productSchema = new Schema({
    name: { type: String, required: true},
    description: { type: String, required: true},
    price: { type: Number, default: 0, required: true },
    photo: { type: String, required: true },
    category: { type: String, required: true, enum: ['computers','accesories','phones']}
});

module.exports = mongoose.model('Product', productSchema);