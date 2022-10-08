import axios from 'axios'
import {loginSuccess,loginFail,loginRequest,registerRequest,registerSuccess,registerFail,clearErrors} from './userSlice'

export const login = (email,password) => async (dispatch)=>{
    try {
        dispatch(loginRequest())

        const config = {headers:{"Content-Type":"application/json"}}

        const {data} = await axios.post(`/api/v1/login`,{email,password},config)

        dispatch(loginSuccess(data.user))
        
    } catch (error) {
        dispatch(loginFail(error.response?.data.message))
    }
}

export const register = (userdata) => async (dispatch)=>{
    try {
        dispatch(registerRequest())

        const config = {headers:{"Content-Type":"multipart/form-data"}}

        const {data} = await axios.post(`/api/v1/register`,userdata,config)

        dispatch(registerSuccess(data.user))
    } catch (error) {
        dispatch(registerFail(error.response?.data.message))
    }
}

// *clearing error
export const clearError = () => async (dispatch) => {
    dispatch(clearErrors())
}