import {createSlice} from '@reduxjs/toolkit'
const initialState = {}


export const profileSlice = createSlice({
    name:'profile',
    initialState,
    reducers:{
        updateProfileRequest:(state,action)=>{
            state.loading = true
        },
        updateProfileSuccess:(state,action)=>{
            state.loading = false
            state.isUpdated = action.payload
        },
        updateProfileFail:(state,action)=>{
            state.loading = false
            state.error = action.payload
        },
        updateProfileReset:(state,action)=>{
            state.isUpdated = false
        },
        updatePasswordRequest:(state,action)=>{
            state.loading = true
        },
        updatePasswordSuccess:(state,action)=>{
            state.loading = false
            state.isUpdated = action.payload
        },
        updatePasswordFail:(state,action)=>{
            state.loading = false
            state.error = action.payload
        },
        updatePasswordReset:(state,action)=>{
            state.isUpdated = false
        },
        clearErrors:(state,action)=>{
            return {...state,error:null}            
        }

    }
})

export const {updateProfileRequest,updateProfileSuccess,updateProfileFail,updateProfileReset,updatePasswordRequest,updatePasswordFail,updatePasswordReset,updatePasswordSuccess,clearErrors} = profileSlice.actions
export default profileSlice.reducer