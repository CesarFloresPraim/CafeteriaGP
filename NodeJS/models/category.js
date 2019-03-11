const mongoose = require('mongoose');

var Category = mongoose.model('category', {
    name: { type: String}
}, 'category');

module.exports = { Category };
