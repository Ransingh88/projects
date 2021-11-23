const express = require('express')
const connect = require('./configs/database')
const cors = require('cors')

const user = require('./routes/userRoute')

const app = express()
const PORT = 8080
app.use(express.json())
app.use(cors())

app.use('',user)




const start = async () => {
    app.listen(PORT, () => {
        console.log(`Server running on port ${PORT}...`)
    })
    await connect()
}

module.exports = start;