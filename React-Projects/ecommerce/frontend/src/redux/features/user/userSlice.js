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
        loadUserRequest:(state,action)=>{
            state.loading = true
            state.isAuthenticate = false
        },
        loadUserSuccess:(state,action)=>{
            state.loading = false
            state.isAuthenticate = true
            state.user = action.payload
        },
        loadUserFail:(state,action)=>{
            state.loading = false
            state.isAuthenticate = false
            state.user = null
            state.error = action.payload
        },
        logoutSuccess:(state,action)=>{
            state.loading = false
            state.isAuthenticate = false
            state.user = null
        },
        logoutFail:(state,action)=>{
            state.loading = false
            state.error = action.payload
        },
        clearErrors:(state,action)=>{
            return {...state,error:null}            
        }

    }
})

export const {
    loginRequest,
    loginSuccess,
    loginFail,
    registerRequest,
    registerSuccess,
    registerFail,
    clearErrors,
    loadUserSuccess,
    loadUserRequest,
    loadUserFail,
    logoutSuccess,
    logoutFail} = userSlice.actions
export default userSlice.reducer