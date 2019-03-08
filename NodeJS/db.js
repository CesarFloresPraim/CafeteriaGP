const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/ProjectGammaDB', { useNewUrlParser: true }, (err) => {
    !err? console.log("MongoDB connection succeeded...") : console.log('Error in DB connection' + JSON.stringify(err, undefined, 2));
});

module.exports = mongoose;
