const mong = require('mongoose')

const ProductSchema = mong.Schema({
    id: {type:Number,unique:true},
    title: String,
    price: {
        type: Number,
        required: true
    },
    description: String,
    category:String,
    image: { type: String },
    rating: Object
}, { timestamps: true })

module.exports = mong.model('Products', ProductSchema)
//quntity no removal just make it hide