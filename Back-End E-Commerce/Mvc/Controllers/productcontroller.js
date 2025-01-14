const productsCollection = require('../models/productsmodel')
const { validationResult } = require('express-validator')
exports.insertProduct = async function (req, res) {
    try {
        const result = validationResult(req)
        if (!result.isEmpty()) {
            const [error] = result.array()
            return res.status(400).json({ status: "fail", data: { data: error.path + " has " + error.msg } });
        }
        console.log(req.body)
        let newProduct = await productsCollection.create(req.body)
        req.body.msg ="inserted Succfuly"
        res.status(201).json({
            status: "success", data: {
                data: req.body
            }
        })
    }
    catch (err) {
        res.status(500).json({
            status: "error",
            "message": "An error occurred",
            "code": 500,
            "data": { data: "this Product already inserted" }
        });
        console.log({ err: err.message });
    }
}
exports.getAllProducts =async (req, res) => {
    try {
        const Products = await productsCollection.find({}, { _id: false, __v: false, createdAt: false, updatedAt:false})
        res.status(200).json({
            "status": "success",
            "data": {
                "data": Products
            }
        }
)
    }
    catch (err) {
        res.status(400).json({
            status: "error",
            "message": "An error occurred",
            "code": 500,
            "data": {}
        });
        console.log({ err: err.message });
    }
}
exports.deleteproduct =  async function (req, res) {
    try {
       const result = validationResult(req)
        if (!result.isEmpty()) {
            const [error] = result.array()
            return res.status(400).json({ status: "fail", data: { data: error.path + " has " + error.msg } });
        }
            const {email,password} = req.body
        const DeletedUser = await Users.findOneAndDelete( { email, password})
     DeletedUser? res.status(201).json({
                "status": "success",
                "data": {
                    "data": `User Has Been ${DeletedUser.email} Deleted Succfully `
                }
            }
     ) : res.status(400).json( {
            "status": "fail",
            "data": {
                "data": "User has been deleted or not found"
            }
        })

    }

    catch (err) {
        res.status(400).json({
            status: "error",
            "message": "An error occurred",
            "code": 500,
            "data": {}
        });
        console.log({ err: err.message });
    }
}