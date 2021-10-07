const mongoose = require('mongoose');
require('dotenv').config()


const CONNECTION_URL = process.env.CONNECTION_URL;

const connect = () => {
    return mongoose.connect(CONNECTION_URL)
}

module.exports= connect;