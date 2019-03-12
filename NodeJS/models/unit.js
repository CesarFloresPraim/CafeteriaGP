const mongoose = require('mongoose');

var Unit = mongoose.model('unit', {
    name: { type: String}
}, 'unit');

module.exports = { Unit };
