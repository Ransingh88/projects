import axios from 'axios'
import {getAllProductsFail, getAllProductsRequest, getAllProductsSuccess, clearErrors } from './productSlice'

export const fetchAllProducts = () => async (dispatch)=>{
    try {
        dispatch(getAllProductsRequest())
        const res = await axios.get('/api/v1/products')
        dispatch(getAllProductsSuccess(res.data))
        
    } catch (error) {
        dispatch(getAllProductsFail(error.response.data.message))
    }
}

// *clearing error
export const clearError = () => async (dispatch) => {
    dispatch(clearErrors())
}