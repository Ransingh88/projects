const mongoose = require('mongoose')

const resourceSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    link:{
        type:String,
        required:true
    },
    catagory:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:false
    },
    image:{
        type:String,
        required:false
    }
},
{
    timestamps:true,
    versionKey:false
}
)

const Resources = mongoose.model('Resources',resourceSchema)

module.exports = Resources