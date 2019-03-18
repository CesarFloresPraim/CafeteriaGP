const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');
const ObjectId= require('mongoose').Types.ObjectId;
const passport = require('passport');

var  { User }  = require('../models/user');

//Route to save user
router.post('/', (req, res) => {
    let user = new User({
        name: req.body.name,
        lastname: req.body.lastname,
        username: req.body.username,
        email: req.body.email,
        password: bcrypt.hashSync(req.body.password, 10),
        type: req.body.type
    });
    
    user.save((err,doc) => {
        if (!err) { res.send(doc); }
        else { console.log('Error in user Save :' + JSON.stringify(err, undefined, 2)); }
    });
});
//Route to get user for login
router.post('/login', (req, res, next) => {
    passport.authenticate('local', {
        successRedirect: '/maincafe',
        failureRedirect: '/login',
        failureFlash: true
    })(req,res,next);
}) 
// router.post('/:username', (req, res) => {
//     User.findOne({username: req.params.username }, (err, doc) => {
//         if(doc){
//             if(doc.password === req.body.password){
//                 res.send({
//                     username: doc.username,
//                     name: doc.name,
//                     lastname: doc.lastname,
//                     _id: doc._id
//                 });
//             } else {
//                 res.status(400).send('Wrong username/password');
//             }
//         } else {
//             console.log('Error retreiving user: ' + JSON.stringify(err, undefined, 2));
//             res.status(400).send('Wrong username/password');
//         }
//     })
// });
//Route to update user
router.put('/:id', (req, res) => {
    if(!ObjectId.isValid(req.params.id))
        return res.status(400).send(`No record with given id ${req.params.id}`);
    let user = {
        name: req.body.name,
        lastname: req.body.lastname,
        username: req.body.username,
        password: req.body.password
    };
    User.findByIdAndUpdate(req.params.id, { $set: user}, {new: true}, (err, doc) => {
        if(!err){
            res.send(doc);
        } else {
            console.log('Error updating user: ' + JSON.stringify(err, undefined, 2));
        }
    });
});
//Route to delete user
router.delete('/:id', (req, res) => {
    if(!ObjectId.isValid(req.params.id))
        return res.status(400).send(`No record with given id ${req.params.id}`);
    User.findByIdAndRemove(req.params.id, (err, doc) => {
        if(!err){
            res.send(doc);
        } else {
            console.log('Error deleting user: ' + JSON.stringify(err, undefined, 2));
        }
    });
});

module.exports = router;
