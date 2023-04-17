const mongoose = require('mongoose')
const Schema = mongoose.Schema

const productSchema = new Schema({
    name: String,
    description: String,
    category: String,
    img: {
        type: String,
        default: 'https://res.cloudinary.com/s4whf65/image/upload/v1661202691/blogs/eoiptbfzwf38m17yffft.jpg'
    },
    price: Number,
    stock: Number
})

module.exports = mongoose.model('products', productSchema)