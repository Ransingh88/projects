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
        clearErrors:(state,action)=>{
            return {...state,error:null}            
        }

    }
})

export const {updateProfileRequest,updateProfileSuccess,updateProfileFail,updateProfileReset,clearErrors} = profileSlice.actions
export default profileSlice.reducer