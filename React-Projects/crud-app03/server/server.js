const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')

const userDate = require('./model/Crud')
const app = express()
app.use(express.json())
app.use(cors())

const PORT = 3001
const mongodbURI = 'mongodb+srv://root:root@cluster0.xnbto.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'


mongoose.connect(mongodbURI,{useNewUrlParser:true})
app.post('/api/add',async (req,res)=>{
    const response = await userDate.create(req.body)
    res.status(200).json({success:true,response:response})
})
app.get('/api/find', async (req,res)=>{
    const userData = await userDate.find({})
    res.status(202).json({res:userData})
})
app.get('/api/find/:id', async (req,res)=>{
    const userData = await userDate.findById(req.params.id)
    res.status(202).json({res:userData})
})
app.delete(`/api/delete/:id`,async (req,res)=>{
    let data = await userDate.findByIdAndDelete(req.params.id)
    res.json({delete:true,res:data})
})
app.patch(`/api/update/:id`,async (req,res)=>{
    let data = await userDate.findByIdAndUpdate(req.params.id,req.body)
    res.json({Update:true,res:data})
})

app.listen(PORT,()=>{
    console.log(`Server is running on port ${PORT}`);
})