import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    productDetails:{}
}

export const productDetailsSlice = createSlice({
    name:'productDetails',
    initialState,
    reducers:{
        productDetailsRequest:(state,action)=>{
            state.loading = true
        },
        productDetailsSuccess:(state,action)=>{
            state.productDetails = action.payload
            state.loading = false
        },
        productDetailsFail:(state,action)=>{
            state.error = action.payload
            state.loading = false
        },
        clearErrors:(state,action)=>{
            return {...state,error:null}            
        }
    }
})

export const {productDetailsFail, productDetailsRequest, productDetailsSuccess, clearErrors} = productDetailsSlice.actions
export default productDetailsSlice.reducer