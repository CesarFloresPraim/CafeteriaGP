const express = require('express');
const router = express.Router();
const ObjectId= require('mongoose').Types.ObjectId;

var { Order } = require('../models/order');
//Route to save order
router.post('/', (req, res) => {
    console.log(req.body);
    let order= new Order({
        user: req.body.form.user,
        droom: req.body.form.droom,
        description: req.body.form.description,
        products: req.body.cart,
        dateTime: new Date(),
        status: false
    });
    order.save((err,doc) => {
        if (!err) { res.send(doc); }
        else { console.log('Error in order save :' + JSON.stringify(err, undefined, 2)); }
    });
});
//Route to get all order
router.get('/', (req, res) => {
    Order.find((err, docs) => {
        if(docs){
            res.send(docs);
        } else {
            console.log('Error retreiving order: ' + JSON.stringify(err, undefined, 2));
            res.status(400).send('Error retreiving order');

        }
    })
});
//Route to get order
router.get('/:name', (req, res) => {
    Order.find({'droom':req.params.name }, (err, docs) => {
        if(docs){
            res.send(docs);
        } else {
            console.log('Error retreiving order: ' + JSON.stringify(err, undefined, 2));
            res.status(400).send('Error retreiving order');

        }
    })
});
//Route to update order
router.put('/:id', (req, res) => {
    console.log(req.body);
    if(!ObjectId.isValid(req.params.id))
        return res.status(400).send(`No record with given id ${req.params.id}`);
/*    let order = {
        user: req.body.user,
        droom: req.body.droom,
        description: req.body.description,
        products: req.body.products,
        dateTime: req.body.dateTime,
        status: req.body.status

    };*/

        Order.findByIdAndUpdate(req.params.id, { $set: {approvedProducts: req.body, status: true}}, (err, doc) => {
        if(!err){
            res.send(doc);
        } else {
            console.log('Error updating order: ' + JSON.stringify(err, undefined, 2));
        }
    });
});
//Route to delete order
router.delete('/:id', (req, res) => {
    if(!ObjectId.isValid(req.params.id))
        return res.status(400).send(`No record with given id ${req.params.id}`);
    Order.findByIdAndRemove(req.params.id, (err, doc) => {
        if(!err){
            res.send(doc);
        } else {
            console.log('Error deleting order: ' + JSON.stringify(err, undefined, 2));
        }
    });
});

module.exports = router;

