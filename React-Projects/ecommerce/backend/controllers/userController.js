const ErrorHandler = require('../utils/errorHandler')
const catchAsyncErrors = require('../middleware/catchAsyncErrors');
const User = require('../models/userModel');
const sendToken = require('../utils/jwtToken');
const sendEmail = require('../utils/sendEmail');
const crypto = require('crypto')
const cloudinary = require('cloudinary')

// Register a user
exports.registerUser = catchAsyncErrors(async (req,res,next)=>{

    let myCloud

    if(req.body.avatar !== ''){
     myCloud = await cloudinary.v2.uploader.upload(req.body.avatar,{
        folder:'avatars',
        width:150,
        crop:'scale'
    })
}
    
    const {name,email,password} = req.body

    const user = await User.create({
        name,
        email,
        password,
        avatar:{
            public_id:req.body.avatar === '' ? 'avatars/k6fzrsrrhrqb7owoamql' : myCloud.public_id,
            url:req.body.avatar === '' ? 'https://res.cloudinary.com/dransinghdev/image/upload/v1665424164/avatars/k6fzrsrrhrqb7owoamql.png' : myCloud.secure_url
        }
    })

    sendToken(user,201,res)
})

// Login User
exports.loginUser = catchAsyncErrors(async (req,res,next)=>{
    const {email,password} = req.body

    // Checking weather user has given email and password
    if(!email || !password){
        return next(new ErrorHandler("Please enter Email and Password",400))
    }

    const user = await User.findOne({email}).select("+password")
 
    if(!user){
        return next(new ErrorHandler("Invalid Email or Password",401))
    }

    const isPasswordMatched = await user.comparePassword(password)

    if(!isPasswordMatched){
        return next(new ErrorHandler("Invalid Email or Password",401))
    }

    sendToken(user,200,res)
})

// Logout user
exports.logoutUser = catchAsyncErrors(async (req,res,next)=>{

    res.cookie("token",null,{
        expires:new Date(Date.now()),
        httpOnly:true
    })

    res.status(200).json({
        success:true,
        message:"Logged out Successfully"
    })
})

// ForgotPassword
exports.forgotPassword = catchAsyncErrors(async(req,res,next)=>{
    const user = await User.findOne({email:req.body.email})

    if(!user){
        return next(new ErrorHandler(`User not found with '${req.body.email}' email id`, 404))
    }

    // get reset password token
    const resetToken = user.getResetPasswordToken()

    await user.save({validateBeforeSave:false})

    // const resetPasswordUrl = `${req.protocol}://${req.get("host")}/api/v1/password/reset/${resetToken}`
    const resetPasswordUrl = `${req.protocol}://${req.get("host")}/auth/resetpassword/${resetToken}`

    const message = `Your password reset token is : \n\n${resetPasswordUrl} \n\nIf you have not requested this email then, please ignore it.`

    try {

        await sendEmail({
            email:user.email,
            subject:`Ecommerce Password Recovery`,
            message
        })

        res.status(200).json({
            success:true,
            message:`Email sent to ${user.email} successfully`
        })
        
    } catch (error) {
        user.resetPasswordToken = undefined
        user.resetPasswordExpire = undefined

        await user.save({validateBeforeSave:false})

        return next(new ErrorHandler(error.message,500))
    }
})

// resetPassword
exports.resetPassword = catchAsyncErrors(async(req,res,next)=>{

    // creating token hash
    const resetPasswordToken = crypto.createHash("sha256").update(req.params.token).digest("hex")

    const user = await User.findOne({resetPasswordToken,resetPasswordExpire:{$gt:Date.now()}})

    if(!user){
        return next(new ErrorHandler(`Reset password token is invalid or has been expired`, 400))
    }

    if(req.body.password !== req.body.confirmPassword){
        return next(new ErrorHandler(`Password does not match`, 400))
    }

    user.password = req.body.password
    user.resetPasswordToken = undefined
    user.resetPasswordExpire = undefined

    await user.save()
    sendToken(user,200,res)
})

// get user Details
exports.getUserDetails = catchAsyncErrors(async(req,res,next)=>{
    const user = await User.findById(req.user.id)

    res.status(200).json({
        success:true,
        user
    })
})


// change/update user password
exports.updatePassword = catchAsyncErrors(async(req,res,next)=>{
    const user = await User.findById(req.user.id).select("+password")

    const isPasswordMatched = await user.comparePassword(req.body.oldPassword)

    if(!isPasswordMatched){
        return next(new ErrorHandler("Old Password is incorrect",400))
    } 

    if(req.body.newPassword.length<8 || req.body.confirmPassword.length<8){
        return next(new ErrorHandler("Password must be atleast 8 characters",400))
    }

    if(req.body.newPassword !== req.body.confirmPassword){
        return next(new ErrorHandler("Password does not match",400))
    }

    user.password = req.body.newPassword

    user.save()

    sendToken(user,200,res)
})


// update user profile
exports.updateProfile = catchAsyncErrors(async(req,res,next)=>{
    
    const newUserData = {
        name:req.body.name,
        email:req.body.email
    }

    if(req.body.avatar !==''){
        const user = await User.findById(req.user.id)
        const imageId = user.avatar.public_id
        await cloudinary.v2.uploader.destroy(imageId)

        const myCloud = await cloudinary.v2.uploader.upload(req.body.avatar,{
            folder:'avatars',
            width:150,
            crop:'scale'
        })

        newUserData.avatar ={
            public_id:myCloud.public_id,
            url:myCloud.secure_url
        }
    }

    const user = await User.findByIdAndUpdate(req.user.id,newUserData,{new:true,runValidators:true,useFindAndModify:false})

    res.status(200).json({
        success:true
    })
})

// get all users --- Admin
exports.getAllUsers = catchAsyncErrors(async(req,res,next)=>{

    const users = await User.find()

    res.status(200).json({
        success:true,
        users
    })
})

// get single user details --- Admin
exports.getSingleUserDetails = catchAsyncErrors(async(req,res,next)=>{

    const user = await User.findById(req.params.id)

    if(!user){
        return next(new ErrorHandler(`user does not exist with Id:${req.params.id}`,404))
    }

    res.status(200).json({
        success:true,
        user
    })
})

// update user profile --- Admin
exports.updateUserProfile = catchAsyncErrors(async(req,res,next)=>{
    
    const newUserData = {
        name:req.body.name,
        email:req.body.email,
        role:req.body.role
    }

    const user = await User.findByIdAndUpdate(req.params.id,newUserData,{new:true,runValidators:true,useFindAndModify:false})

    if(!user){
        return next(new ErrorHandler(`User does nt exist with Id:${req.params.id}`,400))
    }

    res.status(200).json({
        success:true,
        message:"user profile updated successfully"
    })
})

// delete user --- Admin
exports.deleteUser = catchAsyncErrors(async(req,res,next)=>{

    const user = await User.findById(req.params.id)


    if(!user){
        return next(new ErrorHandler(`User does nt exist with Id:${req.params.id}`,400))
    }

    const imageId = user.avatar.public_id
    await cloudinary.v2.uploader.destroy(imageId)

    user.remove()

    res.status(200).json({
        success:true,
        message:"user deleted successfully"
    })
})