const mongoose = require('mongoose');

var Provider = mongoose.model('provider', {
    name: { type: String},
	telephone: {type: String},
	email: {type: String},
	rfc: { type: String},
	zip_code: { type: String},
    street: { type: String},
	number: { type: String},
	outter_number: { type: String},
	neighborhood: { type: String},
}, 'providers');

module.exports = { Provider };
