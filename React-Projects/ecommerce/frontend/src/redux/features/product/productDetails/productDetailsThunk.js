import axios from "axios"
import { clearErrors, newReviewFail, newReviewRequest, newReviewSuccess, productDetailsFail, productDetailsRequest, productDetailsSuccess } from "./productDetailSlice"

// get product details
export const fetchProductDetails =(id) => async (dispatch) => {
    try {
        dispatch(productDetailsRequest())
        const res = await axios.get(`/api/v1/products/${id}`)
        dispatch(productDetailsSuccess(res.data.product))
        
    } catch (error) {
        dispatch(productDetailsFail(error.response.data.message))
    }
}

// new review
export const submitNewReview =(reviewData) => async (dispatch) => {
    try {
        dispatch(newReviewRequest())

        const config = {
            headers: {"Content-Type": "application/json"}
        }

        const res = await axios.put(`/api/v1/review`, reviewData, config)
        dispatch(newReviewSuccess(res.data.success))
        
    } catch (error) {
        dispatch(newReviewFail(error.response.data.message))
    }
}

// *clearing error
export const clearError = () => async (dispatch) => {
    dispatch(clearErrors())
}