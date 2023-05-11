const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors');
const mongoose = require('mongoose')
const serverless = require('serverless-http');
const productRoute = require('./routes/product.route')
const orderRoute = require('./routes/order.route')
const router = express.Router();
const app = express()
const port = 3001
app.use(cors())
app.use(bodyParser.json())

// databse connection
mongoose.connect('mongodb+srv://pepito:SmPPUBBIT3MnVJ5v@cluster0.c84fykq.mongodb.net/?retryWrites=true&w=majority', { useNewUrlParser: true, useUnifiedTopology: true })

mongoose.connection.on('connected', function() {
    console.log('connection established...')
});

mongoose.connection.on('error', function(err) {
    console.log('error encountered: ' + err)
});

// routes
app.use('/products', productRoute)
app.use('/orders', orderRoute)
app.use('/.netlify/functions/api', productRoute)



app.get('/', (req, res) => {
    res.status(200).json({
        message: 'Respuesta de la api'
    })
})

app.listen(port, () => {
    console.log(`app listening to port ${port}...`)
})

module.exports.handler = serverless(app);