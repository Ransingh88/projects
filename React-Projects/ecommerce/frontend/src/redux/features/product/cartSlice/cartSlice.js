import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    cartItems: localStorage.getItem("cartItems") ?
    JSON.parse(localStorage.getItem("cartItems")) : []
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
        }
    }
})

export const {addToCart,removeFromCart} = cartSlice.actions
export default cartSlice.reducer