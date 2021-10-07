const mongoose = require('mongoose');


// const CONNECTION_URL = process.env.CONNECTION_URL || 'mongodb://localhost:27017/test';
const CONNECTION_URL = 'mongodb+srv://debasish082:debasish082@cluster0.xahh7.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';

const connect = () => {
    return mongoose.connect(CONNECTION_URL)
}

module.exports= connect;