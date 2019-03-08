const mongoose = require('mongoose');

<<<<<<< HEAD
mongoose.connect('mongodb://localhost:27017/ProjectGammaDB', { useNewUrlParser: true }, (err) => {
    !err? console.log("MongoDB connection succeeded...") : console.log('Error in DB connection' + JSON.stringify(err, undefined, 2));
=======
mongoose.connect('mongodb://localhost:27017/cafeteria', { useNewUrlParser: true }, (err) => {
    !err? console.log("MongoDB connection succeeded...") : console.log('Error in DB connecction' + JSON.stringify(err, undefined, 2));
>>>>>>> c97375209915a5d832411817943bb5d87d282900
});

module.exports = mongoose;
