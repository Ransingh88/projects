const express = require('express')
const connect = require('./config/db')
const userController = require('./routes/user.route')
const resourcesController = require('./routes/resources.route')


require('dotenv').config()
const app = express()



const PORT = process.env.PORT || 5000
app.use(express.json())
app.use('/api/user',userController)
app.use('/api/resource',resourcesController)


const start = async () =>{ 
    await connect()
    app.listen(PORT,()=>{
        console.log(`Server running on port ${PORT}`);
    })
}

module.exports = start
