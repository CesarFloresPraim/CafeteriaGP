const express = require('express');
const router = express.Router();
const ObjectId= require('mongoose').Types.ObjectId;

var { Product } = require('../models/product');

//Route to save product
router.post('/', (req, res) => {
    let product = new Product({
        name: req.body.prod.name,
        type: req.body.prod.type,
        unit: req.body.possible,
        description: req.body.prod.description,
        price: req.body.prod.price,
        provider: req.body.prod.provider
    });
    console.log(product);
    product.save((err,doc) => {
        if (!err) { res.send(doc); }
        else { console.log('Error in Product Save :' + JSON.stringify(err, undefined, 2)); }
    });
});
//Route to get product
router.get('/', (req, res) => {
    Product.find((err, docs) => {
        if(docs){
                res.send(docs);
        } else {
            console.log('Error retreiving product: ' + JSON.stringify(err, undefined, 2));
            res.status(400).send('Error retreiving products');

        }
    })
});
//Route to get user
router.get('/:name', (req, res) => {
    Product.find({"name" : {$regex :`${req.params.name}.*`}}, (err, docs) => {
        if(docs){
            res.send(docs);
        } else {
            console.log('Error retreiving product: ' + JSON.stringify(err, undefined, 2));
            res.status(400).send('Error retreiving products');

        }
    })
});
//Route to get user
router.get('/category2/:cat/:search', (req, res) => {
    console.log(req.params.cat, req.params.search);
    Product.find(    {$and:[ {"type": req.params.cat}, {"name": {$regex :`${req.params.search}.*`}}

        ]}, (err, docs) => {
        if(docs){
            res.send(docs);
        } else {
            console.log('Error retreiving product: ' + JSON.stringify(err, undefined, 2));
            res.status(400).send('Error retreiving products');

        }
    })

});
//Route to get user
router.get('/category/:category', (req, res) => {
    Product.find(    {$or:[
            {"type": req.params.category}
        ]}, (err, docs) => {
        if(docs){
            res.send(docs);
        } else {
            console.log('Error retreiving product: ' + JSON.stringify(err, undefined, 2));
            res.status(400).send('Error retreiving products');

        }
    })

});
//Route to update user
router.put('/:id', (req, res) => {
    console.log(req.body);
    if(!ObjectId.isValid(req.params.id))
        return res.status(400).send(`No record with given id ${req.params.id}`);
    let product = {
        _id: req.body._id,
        name: req.body.name,
        type: req.body.type,
        unit: req.body.unit,
        description: req.body.description,
        price: req.body.price,
        provider: req.body.provider
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
