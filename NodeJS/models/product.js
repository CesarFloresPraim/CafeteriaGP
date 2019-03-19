const mongoose = require('mongoose');

var Product = mongoose.model('product', {
    name: { type: String},
    type: { type: String},
    unit: { type: Array},
    description: { type: String},
    price: {type: Number},
    provider: {type: Array}
}, 'products');

module.exports = { Product };
