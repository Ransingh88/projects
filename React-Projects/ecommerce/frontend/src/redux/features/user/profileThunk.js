import axios from "axios"
import { clearErrors, updateProfileFail, updateProfileRequest, updateProfileSuccess, updatePasswordRequest ,updatePasswordFail, updatePasswordSuccess, } from "./profileSlice"
import {forgotPasswordRequest,forgotPasswordFail,forgotPasswordSuccess,resetPasswordFail,resetPasswordRequest,resetPasswordSuccess} from './forgotPasswordSlice'

// profile update
export const updateProfile = (userdata) => async (dispatch)=>{
    try {
        dispatch(updateProfileRequest())

        const config = {headers:{"Content-Type":"multipart/form-data"}}

        const {data} = await axios.put(`/api/v1/me/update`,userdata,config)

        dispatch(updateProfileSuccess(data.success))
    } catch (error) {
        dispatch(updateProfileFail(error.response?.data.message))
    }
}

// password update
export const updatePassword = (passwords) => async (dispatch)=>{
    try {
        dispatch(updatePasswordRequest())

        const config = {headers:{"Content-Type":"application/json"}}

        const {data} = await axios.put(`/api/v1/password/update`,passwords,config)

        dispatch(updatePasswordSuccess(data.success))
    } catch (error) {
        dispatch(updatePasswordFail(error.response?.data.message))
    }
}

// forgotPassword
export const forgotPassword = (email) => async (dispatch)=>{
    try {
        dispatch(forgotPasswordRequest())

        const config = {headers:{"Content-Type":"application/json"}}

        const {data} = await axios.post(`/api/v1/password/forgot`,email,config)

        dispatch(forgotPasswordSuccess(data.message))
        
    } catch (error) {
        dispatch(forgotPasswordFail(error.response?.data.message))
    }
}

// resetPassword
export const resetPassword = (token,passwords) => async (dispatch)=>{
    try {
        dispatch(resetPasswordRequest())

        const config = {headers:{"Content-Type":"application/json"}}

        const {data} = await axios.put(`/api/v1/password/reset/${token}`,passwords,config)

        dispatch(resetPasswordSuccess(data.success))
        
    } catch (error) {
        dispatch(resetPasswordFail(error.response?.data.message))
    }
}

// *clearing error
export const clearError = () => async (dispatch) => {
    dispatch(clearErrors())
}