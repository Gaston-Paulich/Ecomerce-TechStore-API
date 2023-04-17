const mongoose = require('mongoose');

const dbConnect = () => {
    const DB_URI = process.env.DB_URI;
    mongoose.connect(DB_URI, {
        userNewUrlParser: true,
        userUnifiedTopology: true,
    });

}


module.exports = dbConnect

