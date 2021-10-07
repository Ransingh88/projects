const express = require('express');
const connect = require('./configs/db')
require('dotenv').config()

const app = express();
app.use(express.json())

const SERVER_PORT = process.env.SERVER_PORT || 5000



const start = async () => {
    await connect();
    app.listen(SERVER_PORT, () => {
        console.log(`Server running on port ${SERVER_PORT}...`)
    })
}

module.exports = start;