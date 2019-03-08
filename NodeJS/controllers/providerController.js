const express = require('express');
const router = express.Router();
const ObjectId= require('mongoose').Types.ObjectId;

var { Provider } = require('../models/provider');

//Route to save user
router.post('/', (req, res) => {
    let provider = new Provider({
        name: req.body.name,
        contact: req.body.contact,
        telephone: req.body.telephone,
        email: req.body.email,
        rfc: req.body.rfc,
        postalCode: req.body.postalCode,
        street: req.body.street,
        number: req.body.number,
        streetAddress: req.body.streetAddress,
        settlement:req.body.settlement
    });
    provider.save((err,doc) => {
        if (!err) { res.send(doc); }
        else { console.log('Error in Provider Save :' + JSON.stringify(err, undefined, 2)); }
    });
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
        type: req.body.type,
        description: req.body.type,
        price: req.body.price
    };
    Provider.findByIdAndUpdate(req.params.id, { $set: product}, {new: true}, (err, doc) => {
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
