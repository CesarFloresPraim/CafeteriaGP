const express = require('express');
const router = express.Router();
const ObjectId= require('mongoose').Types.ObjectId;

var { Usertype } = require('../models/usertype');

//Route to save usertype
router.post('/', (req, res) => {
    let usertype = new Usertype({
        name: req.body.name,
    });
    usertype.save((err,doc) => {
        if (!err) { res.send(doc); }
        else { console.log('Error in usertype save :' + JSON.stringify(err, undefined, 2)); }
    });
});
//Route to get usertype
router.get('/', (req, res) => {
    Usertype.find((err, docs) => {
        if(docs){
            res.send(docs);
        } else {
            console.log('Error retreiving product: ' + JSON.stringify(err, undefined, 2));
            res.status(400).send('Error retreiving product');

        }
    })
});
//Route to update usertype
router.put('/:id', (req, res) => {
    console.log(req.body);
    if(!ObjectId.isValid(req.params.id))
        return res.status(400).send(`No record with given id ${req.params.id}`);
    let usertype = {
        name: req.body.name,
    };
    Usertype.findByIdAndUpdate(req.params.id, { $set: usertype}, {new: true}, (err, doc) => {
        if(!err){
            res.send(doc);
        } else {
            console.log('Error updating usertype: ' + JSON.stringify(err, undefined, 2));
        }
    });
});
//Route to delete usertype
router.delete('/:id', (req, res) => {
    if(!ObjectId.isValid(req.params.id))
        return res.status(400).send(`No record with given id ${req.params.id}`);
    Usertype.findByIdAndRemove(req.params.id, (err, doc) => {
        if(!err){
            res.send(doc);
        } else {
            console.log('Error deleting usertype: ' + JSON.stringify(err, undefined, 2));
        }
    });
});

module.exports = router;
