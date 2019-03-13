const express = require('express');
const router = express.Router();
const ObjectId= require('mongoose').Types.ObjectId;

var { Type } = require('../models/type');

//Route to save type
router.post('/', (req, res) => {
    let type = new Type({
        name: req.body.name,
    });
    type.save((err,doc) => {
        if (!err) { res.send(doc); }
        else { console.log('Error in type save :' + JSON.stringify(err, undefined, 2)); }
    });
});
//Route to get type
router.get('/', (req, res) => {
    Type.find((err, docs) => {
        if(docs){
            res.send(docs);
        } else {
            console.log('Error retreiving type: ' + JSON.stringify(err, undefined, 2));
            res.status(400).send('Error retreiving type');

        }
    })
});
//Route to update type
router.put('/:id', (req, res) => {
    console.log(req.body);
    if(!ObjectId.isValid(req.params.id))
        return res.status(400).send(`No record with given id ${req.params.id}`);
    let type = {
        name: req.body.name,
    };
    Type.findByIdAndUpdate(req.params.id, { $set: type}, {new: true}, (err, doc) => {
        if(!err){
            res.send(doc);
        } else {
            console.log('Error updating type: ' + JSON.stringify(err, undefined, 2));
        }
    });
});
//Route to delete type
router.delete('/:id', (req, res) => {
    if(!ObjectId.isValid(req.params.id))
        return res.status(400).send(`No record with given id ${req.params.id}`);
    Type.findByIdAndRemove(req.params.id, (err, doc) => {
        if(!err){
            res.send(doc);
        } else {
            console.log('Error deleting type: ' + JSON.stringify(err, undefined, 2));
        }
    });
});

module.exports = router;
