const mongoose = require('mongoose');
var bcrypt = require('bcrypt');

var User = mongoose.model('user', {
    name: { type: String},
    lastname: { type: String},
    username: { type: String},
    password: { type: String},
    email: { type: String},
    type: { type: String}
}, 'users');

// function HashPassword(password){
//     return bcrypt.hashSync(password, 10);
// }

function isValidPassword(hashedpassword){
    return bcrypt.compareSync(hashedpassword, this.password);
}
module.exports = { User };
