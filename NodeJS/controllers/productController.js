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
router.get('/:name', (req, res) => {
    Product.findOne({name: req.params.name }, (err, doc) => {
        if(doc){
                res.send({
                    name: doc.name
                });
        } else {
            console.log('Error retreiving product: ' + JSON.stringify(err, undefined, 2));
            res.status(400).send('Wrong name');
        }
    })
});
//Route to update user
router.put('/:id', (req, res) => {
    if(!ObjectId.isValid(req.params.id))
        return res.status(400).send(`No record with given id ${req.params.id}`);
    let product = {
        name: req.body.name,
        type: req.body.type,
        description: req.body.type,
        price: req.body.price
    };
    Product.findByIdAndUpdate(req.params.id, { $set: product}, {new: true}, (err, doc) => {
        if(!err){
            res.send(doc);
        } else {
            console.log('Error updating product: ' + JSON.stringify(err, undefined, 2));
        }
    });
});
//Route to delete user
router.delete('/:id', (req, res) => {
    if(!ObjectId.isValid(req.params.id))
        return res.status(400).send(`No record with given id ${req.params.id}`);
    Product.findByIdAndRemove(req.params.id, (err, doc) => {
        if(!err){
            res.send(doc);
        } else {
            console.log('Error deleting product: ' + JSON.stringify(err, undefined, 2));
        }
    });
});

module.exports = router;
