const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
const compression = require('compression');

const productRoute = require('../routes/product.route');
const orderRoute = require('../routes/order.route');

const router = express.Router();
const app = express();
const port = process.env.PORT || 3001;
app.use(cors({
    origin: '*'
}))
app.use(bodyParser.json())
app.use(compression());


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




router.get('/', (req, res) => {
    res.send('app esta corriendo..');
})

app.listen(port, () => {
    console.log(`app listening to port ${port}...`)
})

