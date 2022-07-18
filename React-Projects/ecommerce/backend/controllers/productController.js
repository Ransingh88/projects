const Product = require('../models/productModel')

// create a product ---- Admin
exports.createProduct = async (req,res,next) => {
    const product = await Product.create(req.body)
    res.status(200).json({
        success:true,
        product
    })
}

// get all products
exports.getAllProducts = async (req,res) =>{
    const product = await Product.find()
    res.status(200).json({
        success:true,
        product
    })
}

// update product ---- Admin
exports.updateProduct = async (req,res,next) => {
    let product = await Product.findById(req.params.id)

    if(!product){
        return res.status(400).json({
            success:false,
            message:'product not found'
        })
    }

     product = await Product.findByIdAndUpdate(req.params.id,req.body,{
        new:true,
        runValidators:true,
        useFindAndModify:false
     })

    res.status(200).json({
        success:true,
        product
    })
}

// delete product ---- Admin
exports.deleteProduct = async (req,res,next) =>{
    let product = await Product.findById(req.params.id)

    if(!product){
        return res.status(400).json({
            success:false,
            message:'product not found'
        })
    }

    await product.remove()

    res.status(200).json({
        success:true,
        message:"Product deleted Successfully"
    })
}

// get product details
exports.getProductDetails = async (req,res) => {
    let product = await Product.findById(req.params.id)

    if(!product){
        return res.status(400).json({
            success:false,
            message:'product not found'
        })
    }
    res.status(200).json({
        success:true,
        product
    })
}