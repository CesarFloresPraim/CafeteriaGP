const mongoose = require('mongoose');

var Type = mongoose.model('type', {
    name: { type: String}
}, 'type');

module.exports = { Type };
