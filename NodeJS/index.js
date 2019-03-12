const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

var diningroomController = require('./controllers/diningroomController');
var providerController = require('./controllers/providerController');
var categoryController = require('./controllers/categoryController');
var userController = require('./controllers/userController.js');
var productController = require('./controllers/productController.js');
const { mongoose } = require('./db.js');

var app = express();
app.use(bodyParser.json());
app.use(cors({ origin: 'http://localhost:4200' }));
app.listen(3000, () => console.log("Server started at port 3000"));

// Main address http://localhost:4200/cafeteria
app.use('/login', userController);
app.use('/maincafe/products', productController);
app.use('/maincafe/categories', categoryController);
app.use('/maincafe/providers', providerController);
app.use('/maincafe/diningrooms', diningroomController);

