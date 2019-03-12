const mongoose = require('mongoose');

var DiningRoom = mongoose.model('diningroom', {
    name: { type: String},
	manager: { type: String},
	zip_code: { type: String},
    street: { type: String},
	number: { type: String},
	street_address: { type: String},
	settlement: { type: String},
}, 'diningrooms');

module.exports = { DiningRoom };
