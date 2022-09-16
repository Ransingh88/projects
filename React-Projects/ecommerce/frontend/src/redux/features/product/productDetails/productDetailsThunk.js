import axios from "axios"
import { clearErrors, productDetailsFail, productDetailsRequest, productDetailsSuccess } from "./productDetailSlice"

export const fetchProductDetails =(id) => async (dispatch) => {
    try {
        dispatch(productDetailsRequest())
        const res = await axios.get(`/api/v1/products/${id}`)
        dispatch(productDetailsSuccess(res.data.product))
        
    } catch (error) {
        dispatch(productDetailsFail(error.response.data.message))
    }
}

// *clearing error
export const clearError = () => async (dispatch) => {
    dispatch(clearErrors())
}