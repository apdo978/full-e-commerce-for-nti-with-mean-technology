const express = require('express');
const routes = express.Router()
const { insertProduct, getAllProducts, UsersCart } =require('../Controllers/productcontroller.js')
const { isAdmin } =require('../Controllers/usercontroller.js')
const asyncHandler = require('express-async-handler');
const cartsCollection = require('../models/CartModel')


const productsvalidator = require('../validators/producvalidator.js');
const { verify } = require('../Controllers/usercontroller.js');

routes.get('/getAllProducts', verify,/*isAdmin,*/ asyncHandler(getAllProducts))
routes.post('/insertProduct', verify, isAdmin,productsvalidator.insertproductsvalidator, insertProduct)
// routes.delete('/deleteProduct',productsvalidator.deleteproductsvalidator, deleteProduct)
routes.post('/order', verify,productsvalidator.Cartsvalidator,UsersCart)
routes.get('/lastOrders', verify,async (req,res)=>{
    try{
        if (typeof req.user == "string") {
            
            const nameMatch = req.user.match(/name:\s*'([^']+)'/);
            const emailMatch = req.user.match(/email:\s*'([^']+)'/);
    
            const name = nameMatch ? nameMatch[1] : 'Name not found';
            const email = emailMatch ? emailMatch[1] : 'Email not found';
            const orders =await  cartsCollection.find({name,email},{_id:false})
            res.json({data:orders})
        }else{
            const {name,email} = req.user
            const orders = await cartsCollection.find({ name,email }, { _id: false })

            res.json( orders )

        }
        }
    catch(err){
        res.status(500).json({
            status: "error",
            "message": "An error occurred",
            "code": 500,
            "data": { data: err.message }
        });
    }
})
module.exports = routes





