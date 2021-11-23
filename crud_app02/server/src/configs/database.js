const mongoose = require('mongoose')

const connect = () => {
    return mongoose.connect('mongodb://localhost:27017/crudd')
        .then(() => { console.log("Database connected successfully."); })
        .catch((err) => { console.log(err.message)});
}

module.exports = connect;