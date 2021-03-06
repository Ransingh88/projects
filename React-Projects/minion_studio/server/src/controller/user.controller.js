const User = require('../model/user.model')


exports.getUser = async (req,res)=>{

    try {
        let user = await User.find({}).lean().exec()
    return res.status(200).json({message:`${user.length} Users Found successfully`,user})
        
    } catch (error) {
        return res.status(404).json({error})
    }
}
exports.postUser = async (req,res)=>{
    try {
        let user = await User.create(req.body)
        return res.status(201).json({message:`user created successfully`,user})
        
    } catch (error) {
        return res.status(404).json({error:error.message})
    }
}