const mongoose = require('mongoose');

var DiningRoom = mongoose.model('diningroom', {
    name: { type: String},
	postalCode: { type: String},
    street: { type: String},
	number: { type: String},
	streetAddress: { type: String},
	settlement: { type: String},
}, 'DinningRooms');

module.exports = { DiningRoom };