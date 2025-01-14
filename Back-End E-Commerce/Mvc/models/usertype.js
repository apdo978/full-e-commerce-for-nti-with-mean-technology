const mong = require('mongoose')

const userTypeSchema = mong.Schema({ name: { type: String, required: true } }, { timestamps: true })

module.exports =mong.model('UserTypes', userTypeSchema)
