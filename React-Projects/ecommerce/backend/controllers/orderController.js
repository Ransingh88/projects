const Order = require('../models/orderModel')
const Product = require('../models/productModel')
const ErrorHandler = require('../utils/errorHandler')
const catchAsyncErrors = require('../middleware/catchAsyncErrors');

// create new order
exports.newOrder = catchAsyncErrors(async(req,res,next)=>{
    const {shippingInfo,orderItems,paymentInfo,itemPrice,taxPrice,shippingPrice,totalPrice} = req.body

    const order = await Order.create({
        shippingInfo,
        orderItems,
        paymentInfo,
        itemPrice,
        taxPrice,
        shippingPrice,
        totalPrice,
        paidAt:Date.now(),
        user:req.user._id
    })

    res.status(201).json({
        success:true,
        order
    })
})

// get single order details
exports.getOrderDetails = catchAsyncErrors(async(req,res,next)=>{
    const order = await Order.findById(req.params.id).populate("user","name email")

    if(!order){
        return next(new ErrorHandler(`order not found with this Id: ${req.params.id} `,404))
    }

    res.status(200).json({
        success:true,
        order
    })
})

// get my orders
exports.getMyOrders = catchAsyncErrors(async(req,res,next)=>{
    const orders = await Order.find({user:req.user._id})

    res.status(200).json({
        success:true,
        orders
    })
})

// get all orders --- Admin
exports.getAllOrders = catchAsyncErrors(async(req,res,next)=>{
    const orders = await Order.find()

    let totalAmount = 0
    orders.forEach(order=>{
        totalAmount+=order.totalPrice
    })

    res.status(200).json({
        success:true,
        totalAmount,
        orders
    })
})

// update order --- Admin
exports.updateOrder = catchAsyncErrors(async(req,res,next)=>{
    const order = await Order.findById(req.params.id)


    if(!order){
        return next(new ErrorHandler(`order not found with this Id: ${req.params.id} `,404))
    } 
    
    if(order.orderStatus === "delivered"){
        return next(new ErrorHandler("You have already delivered this order",400))
    }

   order.orderItems.forEach(async order=>{
    await updateStock(order.product,order.quantity)
   })

   order.orderStatus = req.body.status

   if(req.body.status === "delivered"){
    order.deliveredAt = Date.now()
   }

   await order.save({validateBeforeSave:false})
    
    res.status(200).json({
        success:true,
    })
})


// delete order --- Admin
exports.deleteOrder = catchAsyncErrors(async(req,res,next)=>{
    const order = await Order.findById(req.params.id)

    if(!order){
        return next(new ErrorHandler(`order not found with this Id: ${req.params.id} `,404))
    }

    await order.remove()

    res.status(200).json({
        success:true
    })
})


async function updateStock(id,quantity){

    const product = await Product.findById(id)

    product.stock -= quantity

    await product.save({validateBeforeSave:false})

}