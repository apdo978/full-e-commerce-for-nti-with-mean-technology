const mong = require('mongoose')
const CartSchema = mong.Schema({
    name:String,
    email:String,
   products:Array
}, { timestamps: true })
module.exports = mong.model('Cart', CartSchema)
