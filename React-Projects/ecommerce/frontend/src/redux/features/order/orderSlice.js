import {createSlice} from '@reduxjs/toolkit'

const initialState ={}

export const orderSlice = createSlice({
    name:'order',
    initialState,
    reducers:{
        createOrderRequest:(state,action)=>{
            state.loading = true
        },
        createOrderSuccess:(state,action)=>{
            state.loading = false
            state.order = action.payload
        },
        createOrderFail:(state,action)=>{
            state.loading = false
            state.error = action.payload
        },
        clearErrors:(state,action)=>{
            return {...state,error:null}            
        }
    }
})

export const {clearErrors,createOrderFail,createOrderRequest,createOrderSuccess} = orderSlice.actions
export default orderSlice.reducer
