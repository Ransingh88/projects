import {createSlice} from '@reduxjs/toolkit'

const initialState ={
    products:[],
    loading:true
}

export const productSlice = createSlice({
    name:'product',
    initialState,
    reducers:{
        getAllProducts:(state,action)=>{
            state.products = action.payload
            state.loading = false
        }
    }
})

export const {getAllProducts} = productSlice.actions
export default productSlice.reducer
