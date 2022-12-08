import {createSlice} from '@reduxjs/toolkit'

const initialState ={
    products:[]
}

export const productSlice = createSlice({
    name:'product',
    initialState,
    reducers:{
        getAllProductsRequest:(state,action)=>{
            state.products = []
            state.loading = true
        },
        getAllProductsSuccess:(state,action)=>{
            state.products = action.payload.product
            state.productsCount = action.payload.productCount
            state.resultPerPage = action.payload.resultPerPage
            state.filteredProductCount = action.payload.filteredProductCount
            state.loading = false
        },
        getAllProductsFail:(state,action)=>{
            state.error = action.payload
            state.loading = false
        },
        getAdminProductsRequest:(state,action)=>{
            state.products = []
            state.loading = true
        },
        getAdminProductsSuccess:(state,action)=>{
            state.products = action.payload.product
            state.loading = false
        },
        getAdminProductsFail:(state,action)=>{
            state.error = action.payload
            state.loading = false
        },
        clearErrors:(state,action)=>{
            return {...state,error:null}            
        }
    }
})

export const {getAllProductsRequest, getAllProductsSuccess, getAllProductsFail,getAdminProductsFail,getAdminProductsRequest,getAdminProductsSuccess, clearErrors} = productSlice.actions
export default productSlice.reducer
