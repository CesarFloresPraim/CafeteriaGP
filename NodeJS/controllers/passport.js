const LocalStrategy = require('passport-local').Strategy;
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const User = require('../models/user');

module.exports = function(passport) {
    passport.use('local',
        new LocalStrategy({ usernameField: 'username'}, (username, password, done) => {
            User.findOne({ username: username})
            .then(user => {
                if(!user){
                    return done(null, false, {message: 'user not registered'});
                }
                //match pw
                bcrypt.compare(password, user.password, (err,isMatch) => {
                    if(err) throw err;

                    if(isMatch){
                        return done(null, user);
                    } else {
                        return done(null, false, { message: 'incorrect password'});
                    }
                });
            })
            .catch(err => console.log(err));
        })
    );
    //passport documentation

    passport.serializeUser((user, done) =>{
        done(null, user._id);
    });

    passport.deserializeUser(function(id,done){
        User.findById(id, function(err, user){
            done(err, user);
        })
    })
}