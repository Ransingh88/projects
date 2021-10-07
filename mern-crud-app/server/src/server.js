const express = require('express');
const connect = require('./configs/db')
const cors = require('cors')
require('dotenv').config()
const studentController = require('./controllers/student.controller')

const app = express();
app.use(express.json())
app.use(cors());

const SERVER_PORT = process.env.SERVER_PORT || 5000

app.use("/student",studentController);



const start =  () => {
    connect()
    .then(()=>
    app.listen(SERVER_PORT, () => {
        console.log(`Server running on port ${SERVER_PORT}...`)
    }))
    .catch((err)=>{console.log(err.message)})
}

module.exports = start;