const express = require('express');
const router = express.Router();
const ObjectId= require('mongoose').Types.ObjectId;

var { Trailer } = require('../models/trailer');

//Route to save product
router.post('/', (req, res) => {
    let trailer = new Trailer({
        destiny: req.body.destiny,
        products: req.body.products,
        putBy: req.body.putBy
    });
    console.log(trailer);
    trailer.save((err,doc) => {
        if (!err) { res.send(doc); }
        else { console.log('Error in Product Save :' + JSON.stringify(err, undefined, 2)); }
    });
});


module.exports = router;
