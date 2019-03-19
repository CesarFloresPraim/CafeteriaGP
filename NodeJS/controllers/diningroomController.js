const express = require('express');
const router = express.Router();
const ObjectId= require('mongoose').Types.ObjectId;

var { DiningRoom } = require('../models/diningroom');

//Route to save diningroom
router.post('/', (req, res) => {
    let diningroom = new DiningRoom({
        name: req.body.name,
        manager: req.body.manager,
        zip_code: req.body.zip_code,
        street: req.body.street,
        number: req.body.number,
        street_address: req.body.street_address,
        settlement: req.body.settlement
    });
    diningroom.save((err,doc) => {
        if (!err) { res.send(doc); }
        else { console.log('Error in dinning room Save :' + JSON.stringify(err, undefined, 2)); }
    });
});
//Route to get room
router.get('/:_id', (req, res) => {
    DiningRoom.findOne({_id: req.params._id }, (err, doc) => {
        if(doc){
            res.send(doc);
        } else {
            console.log('Error retreiving dinning room: ' + JSON.stringify(err, undefined, 2));
            res.status(400).send('Wrong name');
        }
    })
});
//Route to get all rooms
router.get('/', (req, res) => {
    DiningRoom.find((err, docs) => {
        if(docs){
            res.send(docs);
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
    let diningroom = {
        name: req.body.name,
        manager: req.body.manager,
        zip_code: req.body.zip_code,
        street: req.body.street,
        number: req.body.number,
        street_address: req.body.street_address,
        settlement: req.body.settlement
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
