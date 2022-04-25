const Resources = require('../model/resources.model')

const getResources = async (req,res)=>{
    let resource = await Resources.find({})
    return res.status(200).json({message:"Resource Found successfully",resource})
}

const postResources = async (req,res)=>{
    let resource = await Resources.create(req.body)
    return res.status(201).json({message:"Resource created successfully",resource});
}

module.exports = {getResources,postResources}