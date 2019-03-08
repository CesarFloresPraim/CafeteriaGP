const express = require('express');
var router = express.Router();
var ObjectId = require('mongoose').Types.ObjectId;

var { Employee } = require('../models/employee');


// => localhost:3000/employees/list
router.get('/', (req, res) => {
    Employee.find((err,docs) => {
        if(!err){ res.send(docs); }
        else{console.log('Error in retrieval of: Employees' + JSON.stringify(err, undefined, 2))}
    });
});

router.get('/:id',  (req, res) =>{
    if(!ObjectId.isValid(req.params.id))
        return res.status(400).send(`No record exists with id: ${req.params}`);

    Employee.findById(req.params.id, (err,doc) => {
        if(!err){
            res.send(doc);
        } else {
            console.log('Error in retriving employee' + JSON.stringify(err, undefined, 2));
        }
    });
});

router.post('/', (req, res) => {
    var emp = new Employee({
        name: req.body.name,
        position: req.body.position,
        office: req.body.office,
        salary: req.body.salary,
    });
    emp.save((err,docs) => {if(!err){ res.send(docs); }
    else{console.log('Error saving Employee' + JSON.stringify(err, undefined, 2));}
    });
});

router.put('/:id', (req, res) => {
    if(!ObjectId.isValid(req.params.id))
        return res.status(400).send(`No record exists with id: ${req.params}`);

        var emp = {
            name: req.body.name,
            position: req.body.position,
            office: req.body.office,
            salary: req.body.salary,
        };
        Employee.findByIdAndUpdate(req.params.id, { $set: emp}, {new: true}, (err,doc) =>{
            if(!err){
                res.send(doc);
            } else {
                console.log('Error in updating employee' + JSON.stringify(err, undefined, 2));
            }    
        });
    });

router.delete('/:id', (req, res) => {
    if(!ObjectId.isValid(req.params.id))
        return res.status(400).send(`No record exists with id: ${req.params}`);

Employee.findByIdAndRemove(req.params.id, (err,doc) =>{
    if(!err){
        res.send(doc);
    } else {
        console.log('Error in deleting employee' + JSON.stringify(err, undefined, 2));
    
    }
    });
});

module.exports = router;