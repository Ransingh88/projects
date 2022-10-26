import {createSlice} from '@reduxjs/toolkit'
const initialState = {}

export const forgotPasswordSlice = createSlice({
    name:'forgotPassword',
    initialState,
    reducers:{
        forgotPasswordRequest:(state,action)=>{
            state.loading = true
            state.error = null
        },
        forgotPasswordSuccess:(state,action)=>{
            state.loading = false
            state.message = action.payload
        },
        forgotPasswordFail:(state,action)=>{
            state.loading = false
            state.error = action.payload
        },
        resetPasswordRequest:(state,action)=>{
            state.loading = true
            state.error = null
        },
        resetPasswordSuccess:(state,action)=>{
            state.loading = false
            state.success = action.payload
        },
        resetPasswordFail:(state,action)=>{
            state.loading = false
            state.error = action.payload
        },
        clearErrors:(state,action)=>{
            return {...state,error:null}            
        }

    }
})

export const {clearErrors,forgotPasswordFail,forgotPasswordRequest,forgotPasswordSuccess,resetPasswordFail,resetPasswordRequest,resetPasswordSuccess} = forgotPasswordSlice.actions
export default forgotPasswordSlice.reducer