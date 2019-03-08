const mongoose = require('mongoose');

var User = mongoose.model('user', {
    name: { type: String},
    lastname: { type: String},
    username: { type: String},
    password: { type: String},
    email: { type: String},
    type: { type: String}
<<<<<<< HEAD
}, 'Users');
=======
}, 'users');
>>>>>>> c97375209915a5d832411817943bb5d87d282900

module.exports = { User };
