const mongoose = require('mongoose');

var Usertype = mongoose.model('usertype', {
    name: { type: String}
}, 'usertype');

module.exports = { Usertype };
