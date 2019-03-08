const mongoose = require('mongoose');

var User = mongoose.model('user', {
    name: { type: String},
    lastname: { type: String},
    username: { type: String},
    password: { type: String},
    email: { type: String},
    type: { type: String}
}, 'Users');

module.exports = { User };
