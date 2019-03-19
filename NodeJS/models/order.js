const mongoose = require('mongoose');

var Order = mongoose.model('order', {
    user: { type: String },
	droom: { type: String },
	description: { type: String },
	products: { type: Array },
	dateTime: { type: Date},
	status: { type: Boolean},
	approvedProducts: {type: Array}
	}, 'orders');

module.exports = { Order };
