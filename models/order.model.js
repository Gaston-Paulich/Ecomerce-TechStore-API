const mongoose = require('mongoose')
const Schema = mongoose.Schema

const orderSchema = new Schema({
    total: Number,
    products: [{
        _id: {
            type: Schema.Types.ObjectId,
            ref: 'products'
        },
        quantity: Number
    }]
})

module.exports = mongoose.model('orders', orderSchema)