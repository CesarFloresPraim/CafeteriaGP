const express = require('express');
const router = express.Router();
const ObjectId= require('mongoose').Types.ObjectId;

var { Product } = require('../models/product');

//Route to save user
router.post('/', (req, res) => {
    let product = new Product({
        name: req.body.name,
        type: req.body.type,
        description: req.body.description,
        price: req.body.price
    });
    product.save((err,doc) => {
        if (!err) { res.send(doc); }
        else { console.log('Error in Product Save :' + JSON.stringify(err, undefined, 2)); }
    });
});
//Route to get user
router.post('/:username', (req, res) => {
    Product.findOne({name: req.params.name }, (err, doc) => {
        if(doc){
                res.send({
                    name: doc.name
                });
        } else {
            console.log('Error retreiving user: ' + JSON.stringify(err, undefined, 2));
            res.status(400).send('Wrong username/password');
        }
    })
});
//Route to update user
router.put('/:id', (req, res) => {
    if(!ObjectId.isValid(req.params.id))
        return res.status(400).send(`No record with given id ${req.params.id}`);
    let user = {
        name: req.body.name,
        type: req.body.type,
        description: { type: String},
        price: {type: Number}
    };
    User.findByIdAndUpdate(req.params.id, { $set: product}, {new: true}, (err, doc) => {
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
