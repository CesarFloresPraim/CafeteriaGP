const mongoose = require('mongoose');

var Provider = mongoose.model('provider', {
    name: { type: String},
	contact: { type: String},
	telephone: {type: String},
	email: {type: String},
	rfc: { type: String},
	postalCode: { type: String},
    street: { type: String},
	number: { type: String},
	streetAddress: { type: String},
	settlement: { type: String},
}, 'Providers');

module.exports = { Provider };