const mongoose = require('mongoose');

var Provider = mongoose.model('order', {
    name: { type: String},
    usuario: { type: String},
	comedor: { type: String},
	description: { type: String},
	producto: {type: String},
	cantidad: {type: Number}
}, 'Orders');

module.exports = { Provider };