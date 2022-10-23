import axios from "axios"
import { clearErrors, updateProfileFail, updateProfileRequest, updateProfileSuccess } from "./profileSlice"

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

// *clearing error
export const clearError = () => async (dispatch) => {
    dispatch(clearErrors())
}