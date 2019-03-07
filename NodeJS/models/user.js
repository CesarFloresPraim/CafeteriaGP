const mongoose = require('mongoose');

var User = mongoose.model('user', {
    name: { type: String},
    lastname: { type: String},
    username: { type: String},
    password: { type: String},
}, 'users')

module.exports = { User };
