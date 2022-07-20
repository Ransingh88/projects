const mongoose = require('mongoose')
const validator = require('validator')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const crypto = require('crypto')


const userSchema = new mongoose.Schema({
    name:{
        type:String,
        required:[true, "Please enter your Name"],
        maxLengh:[30,"Name can not exceed 30 character"],
        minLength:[3,"Name should have more than 3 chracters"]
    },
    email:{
        type:String,
        required:[true,"Plaese enter your Email"],
        unique:true,
        validate:[validator.isEmail,"Please enter a valid Email"]
    },
    password:{
        type:String,
        required:[true,"Plaese enter your Password"],
        minLength:[8,"Password should have more than 8 chracters"],
        select:false
    },
    avatar:{
        public_id:{
            type:String,
            required:true
        },
        url:{
            type:String,
            required:true
        }
    },
    role:{
        type:String,
        default:"user"
    },
    resetPasswordToken:String,
    resetPasswordExpire:Date
},
{
    timestamps: true,
	versionKey: false,
})

// Password Encrypt
userSchema.pre("save",async function(next){

    if(!this.isModified("password")){
        next()
    }
    this.password = await bcrypt.hash(this.password,10)
})

// JWT Token
userSchema.methods.getJWTToken = function(){
    return jwt.sign({id:this._id}, process.env.JWT_SECRET,{
        expiresIn:process.env.JWT_EXPIRE
    })
}

// compare Password
userSchema.methods.comparePassword = async function(entredPassword){
    return await bcrypt.compare(entredPassword,this.password)
}

// Generating Reset password Token
userSchema.methods.getResetPasswordToken = function(){
    // generating token
    const resetToken = crypto.randomBytes(20).toString("hex")


    // hashing and adding resetPasswordToken to user Schema
    this.resetPasswordToken = crypto.createHash("sha256").update(resetToken).digest("hex")

    // setting expire time for the token
    this.resetPasswordExpire = Date.now() + 15 * 60 * 1000

    return resetToken

}

module.exports = mongoose.model("User",userSchema)