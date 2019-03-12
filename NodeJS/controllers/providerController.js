const express = require('express');
const router = express.Router();
const ObjectId= require('mongoose').Types.ObjectId;

var { Provider } = require('../models/provider');

//Route to save user
router.post('/', (req, res) => {
    console.log(req.body);
    let provider = new Provider({
        name: req.body.name,
        telephone: req.body.telephone,
        email: req.body.email,
        rfc: req.body.rfc,
        zip_code: req.body.zip_code,
        street: req.body.street,
        number: req.body.number,
        outter_number: req.body.outter_number,
        neighborhood:req.body.neighborhood
    });
    provider.save((err,doc) => {
        if (!err) { res.send(doc); }
        else { console.log('Error in Provider Save :' + JSON.stringify(err, undefined, 2)); }
    });
});
//Route to all provider
router.get('/', (req, res) => {
    Provider.find((err, docs) => {
        if(docs){
            res.send(docs);
        } else {
            console.log('Error retreiving provider: ' + JSON.stringify(err, undefined, 2));
            res.status(400).send('Wrong name');
        }
    })
});
//Route to get provider
router.get('/:name', (req, res) => {
    Provider.findOne({name: req.params.name }, (err, doc) => {
        if(doc){
                res.send({
                    name: doc.name
                });
        } else {
            console.log('Error retreiving provider: ' + JSON.stringify(err, undefined, 2));
            res.status(400).send('Wrong name');
        }
    })
});
//Route to update user
router.put('/:id', (req, res) => {
    if(!ObjectId.isValid(req.params.id))
        return res.status(400).send(`No record with given id ${req.params.id}`);
    let provider = {
        name: req.body.name,
        telephone: req.body.telephone,
        email: req.body.email,
        rfc: req.body.rfc,
        zip_code: req.body.zip_code,
        street: req.body.street,
        number: req.body.number,
        outter_number: req.body.outter_number,
        neighborhood:req.body.neighborhood
    };
    Provider.findByIdAndUpdate(req.params.id, { $set: provider}, {new: true}, (err, doc) => {
        if(!err){
            res.send(doc);
        } else {
            console.log('Error updating provider: ' + JSON.stringify(err, undefined, 2));
        }
    });
});
//Route to delete user
router.delete('/:id', (req, res) => {
    if(!ObjectId.isValid(req.params.id))
        return res.status(400).send(`No record with given id ${req.params.id}`);
    Provider.findByIdAndRemove(req.params.id, (err, doc) => {
        if(!err){
            res.send(doc);
        } else {
            console.log('Error deleting provider: ' + JSON.stringify(err, undefined, 2));
        }
    });
});

module.exports = router;
