const express = require('express');
const router = express.Router();
const ObjectId= require('mongoose').Types.ObjectId;

var { DiningRoom } = require('../models/diningroomController');

//Route to save user
router.post('/', (req, res) => {
    let diningroom = new DiningRoom({
        name: req.body.name,
        postalCode: req.body.name,
        street: req.body.name,
        number: req.body.name,
        streetAddress: req.body.name,
        settlement: req.body.name
    });
    diningroom.save((err,doc) => {
        if (!err) { res.send(doc); }
        else { console.log('Error in dinning room Save :' + JSON.stringify(err, undefined, 2)); }
    });
});
//Route to get user
router.get('/:name', (req, res) => {
    DiningRoom.findOne({name: req.params.name }, (err, doc) => {
        if(doc){
                res.send({
                    name: doc.name
                });
        } else {
            console.log('Error retreiving dinning room: ' + JSON.stringify(err, undefined, 2));
            res.status(400).send('Wrong name');
        }
    })
});
//Route to update user
router.put('/:id', (req, res) => {
    if(!ObjectId.isValid(req.params.id))
        return res.status(400).send(`No record with given id ${req.params.id}`);
    let DiningRoom = {
        name: req.body.name,
        type: req.body.type,
        description: req.body.type,
        price: req.body.price
    };
    DiningRoom.findByIdAndUpdate(req.params.id, { $set: diningroom}, {new: true}, (err, doc) => {
        if(!err){
            res.send(doc);
        } else {
            console.log('Error updating dinning room: ' + JSON.stringify(err, undefined, 2));
        }
    });
});
//Route to delete user
router.delete('/:id', (req, res) => {
    if(!ObjectId.isValid(req.params.id))
        return res.status(400).send(`No record with given id ${req.params.id}`);
    DiningRoom.findByIdAndRemove(req.params.id, (err, doc) => {
        if(!err){
            res.send(doc);
        } else {
            console.log('Error deleting dinning room: ' + JSON.stringify(err, undefined, 2));
        }
    });
});

module.exports = router;
