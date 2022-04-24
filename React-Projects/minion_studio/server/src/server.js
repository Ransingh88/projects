const express = require('express')
const connect = require('./config/db')
const userController = require('./controller/user.controller')


require('dotenv').config()
const app = express()



const PORT = process.env.PORT || 5000
app.use(express.json())
app.use('/',userController)


const start = async () =>{ 
    await connect()
    app.listen(PORT,()=>{
        console.log(`Server running on port ${PORT}`);
    })
}
module.exports = start()
