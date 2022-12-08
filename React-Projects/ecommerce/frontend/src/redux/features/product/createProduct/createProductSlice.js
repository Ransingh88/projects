import {createSlice} from '@reduxjs/toolkit'
const initialState = {
    product:{}
}


export const createProductSlice = createSlice({
    name:'newProduct',
    initialState,
    reducers:{
        createNewProductsRequest:(state,action)=>{
            state.product = {}
            state.loading = true
        },
        createNewProductsSuccess:(state,action)=>{
            state.product = action.payload.product
            state.success = action.payload.success
            state.loading = false
        },
        createNewProductsFail:(state,action)=>{
            state.error = action.payload
            state.loading = false
        },
        createNewProductsReset:(state,action)=>{
            state.success = false
        },
        clearErrors:(state,action)=>{
            return {...state,error:null}            
        }
    }

})

export const {clearErrors,createNewProductsFail,createNewProductsRequest,createNewProductsReset,createNewProductsSuccess} = createProductSlice.actions
export default createProductSlice.reducer