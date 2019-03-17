const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const passport = require('passport');
const { ensureAuthenticated } = require('./services/authentication');
var orderController = require('./controllers/orderController');
var diningroomController = require('./controllers/diningroomController');
var providerController = require('./controllers/providerController');
var categoryController = require('./controllers/categoryController');
var userController = require('./controllers/userController.js');
var productController = require('./controllers/productController.js');
var userTypeController = require('./controllers/userTypeController.js');

//passport config
require('./controllers/passport')(passport);
const { mongoose } = require('./db.js');



var app = express();
app.use(passport.initialize());
app.use(passport.session());
app.use(bodyParser.json());
app.use(cors({ origin: 'http://localhost:4200' }));
app.listen(3000, () => console.log("Server started at port 3000"));
//passport

// Main address http://localhost:4200/cafeteria
app.use('/login', userController);
app.use('/maincafe/products', productController);
app.use('/maincafe/categories', categoryController);
app.use('/maincafe/providers', providerController);
app.use('/maincafe/diningrooms', diningroomController);
app.use('/maincafe/orders', orderController);

