const mongoose = require('mongoose');
var bcrypt = require('bcrypt');

var User = mongoose.model('user', {
    name: { type: String},
    lastname: { type: String},
    username: { type: String},
    password: { type: String, require: true},
    email: { type: String, require: true },
    type: { type: String, require: true},
    dinningRooms: { type: Array }
}, 'users');

// User.prototype.HashPassword = function(password){
//     return bcrypt.hashSync(password, 10);
// }

// User.prototype.isValidPassword = function (hashedpassword){
//     return bcrypt.compareSync(hashedpassword, this.password);
// }
module.exports = { User };
