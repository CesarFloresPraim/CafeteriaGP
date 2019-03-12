const express = require('express');
const router = express.Router();
const ObjectId= require('mongoose').Types.ObjectId;

var { Unit } = require('../models/unit');

//Route to save unit
router.post('/', (req, res) => {
    let unit = new Unit({
        name: req.body.name,
    });
    unit.save((err,doc) => {
        if (!err) { res.send(doc); }
        else { console.log('Error in unit save :' + JSON.stringify(err, undefined, 2)); }
    });
});
//Route to get unit
router.get('/', (req, res) => {
    Unit.find((err, docs) => {
        if(docs){
            res.send(docs);
        } else {
            console.log('Error retreiving unit: ' + JSON.stringify(err, undefined, 2));
            res.status(400).send('Error retreiving unit');

        }
    })
});
//Route to update unit
router.put('/:id', (req, res) => {
    console.log(req.body);
    if(!ObjectId.isValid(req.params.id))
        return res.status(400).send(`No record with given id ${req.params.id}`);
    let unit = {
        name: req.body.name,
    };
    Unit.findByIdAndUpdate(req.params.id, { $set: unit}, {new: true}, (err, doc) => {
        if(!err){
            res.send(doc);
        } else {
            console.log('Error updating unit: ' + JSON.stringify(err, undefined, 2));
        }
    });
});
//Route to delete unit
router.delete('/:id', (req, res) => {
    if(!ObjectId.isValid(req.params.id))
        return res.status(400).send(`No record with given id ${req.params.id}`);
    Unit.findByIdAndRemove(req.params.id, (err, doc) => {
        if(!err){
            res.send(doc);
        } else {
            console.log('Error deleting unit: ' + JSON.stringify(err, undefined, 2));
        }
    });
});

module.exports = router;
