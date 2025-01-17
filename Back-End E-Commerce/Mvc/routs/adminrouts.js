const { isAdmin, verify } = require('../Controllers/usercontroller')
const cartsCollection = require('../models/CartModel')
const express = require('express')
const routes = express.Router()

routes.get('/customersOrders', verify,async (req,res)=>{
    try{
        const orders =await  cartsCollection.find({},{_id:false})
        res.json(orders)
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