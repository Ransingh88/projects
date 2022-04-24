const express = require('express')
const User = require('../model/user.model')
const router = express.Router()

router.get('/',async (req,res)=>{

    let user = await User.find({})

    return res.status(200).json({user})
})

module.exports = router