const mongoose = require('mongoose')

const crudSchema = new mongoose.Schema({
    name:{type:String,required:true},
    age:{type:Number,required:true}
},{
    timestamps:false,
    versionKey:false
})

const userData = mongoose.model('userdata',crudSchema)

module.exports = userData