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
        newReviewRequest:(state,action)=>{
            state.loading = true
        },
        newReviewSuccess:(state,action)=>{
            state.success = action.payload
            state.loading = false
        },
        newReviewFail:(state,action)=>{
            state.success = false
            state.loading = false
        },
        newReviewReset:(state,action)=>{
            state.error = action.payload
            state.loading = false
            state.success = false
        },
        clearErrors:(state,action)=>{
            return {...state,error:null}            
        }
    }
})

export const {productDetailsFail, productDetailsRequest, productDetailsSuccess, newReviewFail,newReviewRequest,newReviewReset,newReviewSuccess, clearErrors} = productDetailsSlice.actions
export default productDetailsSlice.reducer