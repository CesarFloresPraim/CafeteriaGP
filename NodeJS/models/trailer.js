const mongoose = require('mongoose');

var Trailer = mongoose.model('trailer', {
    destiny: { type: Array},
    products: { type: Array},
    putBy: { type: String}
}, 'trailers');

module.exports = { Trailer };
