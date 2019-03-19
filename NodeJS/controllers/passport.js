var passport = require('passport'), 
    LocalStrategy = require('passport-local').Strategy;
const bcrypt = require('bcrypt');
const User = require('../models/user');

    passport.use('local', new LocalStrategy({
        usernameField: 'username',
        passwordField: 'password'
    },
        function(username, password, done) {
          User.findOne({ username: username }, function (err, user) {
            if (err) { return done(err); }
            if (!user) {
              return done(null, false, { message: 'Incorrect username.' });
            }
            if (password !== user.password) {
              return done(null, false, { message: 'Incorrect password.' });
            }
            return done(null, user);
          });
        }
      ));
    //passport documentation

    passport.serializeUser((user, done) =>{
        done(null, user._id);
    });

    passport.deserializeUser(function(_id,done){
        User.findById(_id, function(err, user){
            done(err, user);
        })
    });
