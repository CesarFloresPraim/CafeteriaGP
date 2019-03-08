const mongoose = require('mongoose');

var Product = mongoose.model('product', {
    name: { type: String},
    type: { type: String},
    description: { type: String},
    price: {type: Number}
}, 'products');

module.exports = { Product };
