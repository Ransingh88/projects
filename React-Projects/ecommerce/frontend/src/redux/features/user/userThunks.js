import axios from 'axios'
import { toast } from 'react-toastify'
import {loginSuccess,loginFail,loginRequest,registerRequest,registerSuccess,registerFail,clearErrors, loadUserSuccess, loadUserRequest, loadUserFail, logoutSuccess, logoutFail} from './userSlice'

// Login
export const login = (email,password) => async (dispatch)=>{
    try {
        dispatch(loginRequest())

        const config = {headers:{"Content-Type":"application/json"}}

        const {data} = await toast.promise(axios.post(`/api/v1/login`,{email,password},config),
        {
            pending: "Logging in",
            success: "Logged in Successfully",
            error: "Can not Login! Try Again",
          })

        dispatch(loginSuccess(data.user))
        
    } catch (error) {
        dispatch(loginFail(error.response?.data.message))
    }
}

// Register
export const register = (userdata) => async (dispatch)=>{
    try {
        dispatch(registerRequest())

        const config = {headers:{"Content-Type":"multipart/form-data"}}

        const {data} = await toast.promise(axios.post(`/api/v1/register`,userdata,config),
        {
            pending: "Creating account",
            success: "Registred Successfully",
            error: "Can not Login! Try Again",
          })

        dispatch(registerSuccess(data.user))
    } catch (error) {
        dispatch(registerFail(error.response?.data.message))
    }
}

// LoadUser
export const loadUser = () => async (dispatch)=>{
    try {
        dispatch(loadUserRequest())

        const {data} = await axios.get(`/api/v1/me`)

        dispatch(loadUserSuccess(data.user))
        
    } catch (error) {
        dispatch(loadUserFail(error.response?.data.message))
    }
}

// logout
export const logout = () => async (dispatch)=>{
    try {

        await axios.get(`/api/v1/logout`)

        dispatch(logoutSuccess())
        
    } catch (error) {
        dispatch(logoutFail(error.response?.data.message))
    }
}

// *clearing error
export const clearError = () => async (dispatch) => {
    dispatch(clearErrors())
}