import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    cartItems: localStorage.getItem("cartItems") ?
    JSON.parse(localStorage.getItem("cartItems")) : [],
    cartPrice:{
        shippingCharge:60,
        coupon:0,
        total:0,
        grossTotal:0
    },
    shippingInfo:localStorage.getItem("shippingInfo") ?
    JSON.parse(localStorage.getItem("shippingInfo")) : {},
}

export const cartSlice = createSlice({
    name:'cart',
    initialState,
    reducers:{
        addToCart:(state,action)=>{
            const item = action.payload
            const isItemExists = state.cartItems.find((i)=>i.productId === item.productId)

            if(isItemExists){
                state.cartItems = state.cartItems.map((i)=>i.productId === isItemExists.productId ? item : i)
            }else{
                state.cartItems = [...state.cartItems,item]
            }
        },
        removeFromCart:(state,action)=>{
            state.cartItems = state.cartItems.filter((i)=>i.productId !== action.payload.productId)
        },
        saveShippingInfo:(state,action)=>{
            state.shippingInfo = action.payload
        },
        totalPrice:(state,action)=>{
            state.cartPrice.total = state.cartItems.reduce((acc,item)=>acc + item.quantity*item.price,0)
            state.cartPrice.tax = Math.round(state.cartItems.reduce((acc,item)=>acc + item.quantity*item.price,0) * 0.05)
        },
        grossTotalPrice:(state,action)=>{
            state.cartPrice.grossTotal =  (state.cartPrice.total + state.cartPrice.shippingCharge + state.cartPrice.tax) - state.cartPrice.coupon
        },
        couponCodePrice:(state,action)=>{
            state.cartPrice.coupon =  action.payload
        },
        clearCart:(state,action)=>{
            state.cartItems =  []
            state.cartPrice = {
                shippingCharge:60,
                coupon:0,
                total:0,
                grossTotal:0
            }
            state.shippingInfo =  {}
        },
    }
})

export const {addToCart,removeFromCart,grossTotalPrice,totalPrice,couponCodePrice,saveShippingInfo,clearCart} = cartSlice.actions
export default cartSlice.reducer