const express = require('express');
const router = express.Router();
const ObjectId= require('mongoose').Types.ObjectId;

var { User } = require('../models/user');

//Route to save user
router.post('login/', (req, res) => {
    let user = new User({
        name: req.body.name,
        lastname: req.body.lastname,
        username: req.body.username,
        password: req.body.password
    });
    user.save((err,doc) => {
        if (!err) { res.send(doc); }
        else { console.log('Error in Employee Save :' + JSON.stringify(err, undefined, 2)); }
    });
});
//Route to get user
router.get('login/:username', (req, res) => {
    if(!ObjectId.isValid(req.params.username))
        return res.status(400).send(`No record with given id ${req.params.username}`);
    User.findBy(req.params.username, (err, doc) => {
        if(!err){
            res.send(doc);
        } else {
            console.log('Error retreiving user: ' + JSON.stringify(err, undefined, 2));
        }
    })
});
//Route to update user
router.put('login/:id', (req, res) => {
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
router.delete('login/:id', (req, res) => {
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
