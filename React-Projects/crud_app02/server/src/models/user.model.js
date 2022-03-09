const mongoose = require('mongoose')

const User = new mongoose.Schema({
    name: { type: String, required: true }
    
},
{
        timestamps: true,
        versionKey:false,
    })

const user = mongoose.model('user', User)
    
module.exports = user