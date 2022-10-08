import {createSlice} from '@reduxjs/toolkit'

const initialState = {
    user:{}
} 

export const userSlice = createSlice({
    name:'user',
    initialState,
    reducers:{
        loginRequest:(state,action)=>{
            state.loading = true
            state.isAuthenticate = false
        },
        loginSuccess:(state,action)=>{
            state.loading = false
            state.isAuthenticate = true
            state.user = action.payload
        },
        loginFail:(state,action)=>{
            state.loading = false
            state.isAuthenticate = false
            state.user = null
            state.error = action.payload
        },
        registerRequest:(state,action)=>{
            state.loading = true
            state.isAuthenticate = false
        },
        registerSuccess:(state,action)=>{
            state.loading = false
            state.isAuthenticate = true
            state.user = action.payload
        },
        registerFail:(state,action)=>{
            state.loading = false
            state.isAuthenticate = false
            state.user = null
            state.error = action.payload
        },
        clearErrors:(state,action)=>{
            return {...state,error:null}            
        }

    }
})

export const {loginRequest,loginSuccess,loginFail,registerRequest,registerSuccess,registerFail,clearErrors} = userSlice.actions
export default userSlice.reducer