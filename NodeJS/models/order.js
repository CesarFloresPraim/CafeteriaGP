const mongoose = require('mongoose');

var Order = mongoose.model('order', {
    user: { type: String },
	droom: { type: String },
	description: { type: String },
	products: { type: Array },
	dateTime: { type: Date }
}, 'Orders');

module.exports = { Order };