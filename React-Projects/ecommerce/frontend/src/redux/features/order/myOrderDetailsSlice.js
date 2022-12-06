import {createSlice} from '@reduxjs/toolkit'

const initialState ={
    order:{},
    loading:true
}

export const myOrderDetailsSlice = createSlice({
    name:'orderDetails',
    initialState,
    reducers:{
        myOrderDetailsRequest:(state,action)=>{
            state.loading = true
        },
        myOrderDetailsSuccess:(state,action)=>{
            state.loading = false
            state.order = action.payload
        },
        myOrderDetailsFail:(state,action)=>{
            state.loading = false
            state.error = action.payload
        },
        clearErrors:(state,action)=>{
            return {...state,error:null}            
        }
    }
})

export const {clearErrors,myOrderDetailsFail,myOrderDetailsRequest,myOrderDetailsSuccess} = myOrderDetailsSlice.actions
export default myOrderDetailsSlice.reducer
