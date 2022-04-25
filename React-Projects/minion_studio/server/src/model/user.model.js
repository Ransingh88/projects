const mongoose = require('mongoose')

const UserSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    dob:{
        type:String,
        required:true
    },
    usertype:{
        type:String,
        required:true
    },
},
{
    timestamps:true,
    versionKey:false
}
)

const User = mongoose.model('User',UserSchema)

module.exports = User