const express = require('express');
const router = express.Router();
const ObjectId= require('mongoose').Types.ObjectId;

var { Category } = require('../models/category');

//Route to save category
router.post('/', (req, res) => {
    let category = new Category({
        name: req.body.name,
    });
    category.save((err,doc) => {
        if (!err) { res.send(doc); }
        else { console.log('Error in category save :' + JSON.stringify(err, undefined, 2)); }
    });
});
//Route to get category
router.get('/', (req, res) => {
    Category.find((err, docs) => {
        if(docs){
            res.send(docs);
        } else {
            console.log('Error retreiving product: ' + JSON.stringify(err, undefined, 2));
            res.status(400).send('Error retreiving product');

        }
    })
});
//Route to update category
router.put('/:id', (req, res) => {
    console.log(req.body);
    if(!ObjectId.isValid(req.params.id))
        return res.status(400).send(`No record with given id ${req.params.id}`);
    let category = {
        name: req.body.name,
    };
    Category.findByIdAndUpdate(req.params.id, { $set: category}, {new: true}, (err, doc) => {
        if(!err){
            res.send(doc);
        } else {
            console.log('Error updating category: ' + JSON.stringify(err, undefined, 2));
        }
    });
});
//Route to delete category
router.delete('/:id', (req, res) => {
    if(!ObjectId.isValid(req.params.id))
        return res.status(400).send(`No record with given id ${req.params.id}`);
    Category.findByIdAndRemove(req.params.id, (err, doc) => {
        if(!err){
            res.send(doc);
        } else {
            console.log('Error deleting category: ' + JSON.stringify(err, undefined, 2));
        }
    });
});

module.exports = router;
