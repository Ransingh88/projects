const express = require('express')
const connect = require('./configs/database')

const app = express()
const PORT = 8080






const start = async () => {
    app.listen(PORT, () => {
        console.log(`Server running on port ${PORT}...`)
    })
    await connect()
}

module.exports = start;