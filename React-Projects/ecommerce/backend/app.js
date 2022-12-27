const express = require('express')
const app = express()
const cookieParser = require('cookie-parser')
const bodyParser = require('body-parser')
const fileUpload = require('express-fileupload')
const cors = require('cors')
const path = require('path')


const errorMiddleware = require('./middleware/error')


app.use(express.json())
app.use(cookieParser())
app.use(bodyParser.urlencoded({extended:true}))
app.use(fileUpload())
app.use(cors())


// Routes Imports
const productRoute = require('./routes/productRoute')
const userRoute = require('./routes/userRoute')
const orderRoute = require('./routes/orderRoute')
const paymentRoute = require('./routes/paymentRoute')

app.use('/api/v1',productRoute)
app.use('/api/v1',userRoute)
app.use('/api/v1',orderRoute)
app.use('/api/v1',paymentRoute)

// app.use(express.static(path.join(__dirname,"../frontend/build")))
// app.get("*",(req,res)=>{
//     res.sendFile(path.resolve(__dirname,"../frontend/build/index.html"))
// })


// Middleware for errors
app.use(errorMiddleware)




module.exports = app