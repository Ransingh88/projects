const mongoose = require('mongoose');


const CONNECTION_URL = process.env.CONNECTION_URL || 'mongodb://localhost:27017/test';

const connect = () => {
    return mongoose.connect(CONNECTION_URL)
}

module.exports= connect;