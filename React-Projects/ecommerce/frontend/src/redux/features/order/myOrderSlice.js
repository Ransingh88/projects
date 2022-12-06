import {createSlice} from '@reduxjs/toolkit'

const initialState ={
    orders:[]
}

export const myOrderSlice = createSlice({
    name:'myorder',
    initialState,
    reducers:{
        myOrdersRequest:(state,action)=>{
            state.loading = true
        },
        myOrdersSuccess:(state,action)=>{
            state.loading = false
            state.orders = action.payload
        },
        myOrdersFail:(state,action)=>{
            state.loading = false
            state.error = action.payload
        },
        clearErrors:(state,action)=>{
            return {...state,error:null}            
        }
    }
})

export const {clearErrors,myOrdersFail,myOrdersRequest,myOrdersSuccess} = myOrderSlice.actions
export default myOrderSlice.reducer
