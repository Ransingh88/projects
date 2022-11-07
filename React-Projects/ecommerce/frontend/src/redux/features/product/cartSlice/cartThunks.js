import axios from "axios"
import { addToCart,removeFromCart,saveShippingInfo } from "./cartSlice"

// add to cart
export const addItemsToCart =(id,quantity) => async (dispatch,getState) => {
    
        const {data} = await axios.get(`/api/v1/products/${id}`)

        dispatch(addToCart({
            productId:data.product._id,
            name:data.product.name,
            price:data.product.price,
            image:data.product.images[0].url,
            stock:data.product.stock,
            catagory:data.product.catagory,
            quantity
        }))

        localStorage.setItem("cartItems",JSON.stringify(getState().cart.cartItems))
    
}

// remove from cart
export const removeItemFromCart =(id) => async (dispatch,getState) => {
    dispatch(removeFromCart({productId:id}))
    localStorage.setItem("cartItems",JSON.stringify(getState().cart.cartItems))
}

// saveShipping info
export const shippingInfoSave =(data) => async (dispatch) => {
    dispatch(saveShippingInfo(data))
    localStorage.setItem("shippingInfo",JSON.stringify(data))
}