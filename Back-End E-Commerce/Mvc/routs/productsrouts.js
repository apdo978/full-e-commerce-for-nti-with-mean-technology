const express = require('express');
const routes = express.Router()
const { insertProduct, getAllProducts } =require('../Controllers/productcontroller.js')
const { isAdmin } =require('../Controllers/usercontroller.js')
const asyncHandler = require('express-async-handler');

const productsvalidator = require('../validators/producvalidator.js');
const { verify } = require('../Controllers/usercontroller.js');

routes.get('/getAllProducts', verify,/*isAdmin,*/ asyncHandler(getAllProducts))
routes.post('/insertProduct', verify, isAdmin,productsvalidator.insertproductsvalidator, insertProduct)
// routes.delete('/deleteProduct',productsvalidator.deleteproductsvalidator, deleteProduct)
module.exports = routes





