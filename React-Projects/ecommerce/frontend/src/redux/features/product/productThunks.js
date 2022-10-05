import axios from 'axios'
import {getAllProductsFail, getAllProductsRequest, getAllProductsSuccess, clearErrors } from './productSlice'

export const fetchAllProducts = (keyword="",currentPage=1,price,catagory,ratings=0) => async (dispatch)=>{
    try {
        dispatch(getAllProductsRequest())
    
        let url = `/api/v1/products?keyword=${keyword}&page=${currentPage}&ratings[gte]=${ratings}`
        if(price){
            url = `/api/v1/products?keyword=${keyword}&page=${currentPage}&price[gte]=${price[0]}&price[lte]=${price[1]}&ratings[gte]=${ratings}`
        }
        if(catagory){
            url = `/api/v1/products?keyword=${keyword}&page=${currentPage}&price[gte]=${price[0]}&price[lte]=${price[1]}&catagory=${catagory}&rating[gte]=${ratings}`
        }

        const res = await axios.get(url)
        dispatch(getAllProductsSuccess(res?.data))
        
    } catch (error) {
        dispatch(getAllProductsFail(error.response?.data.message))
    }
}

// *clearing error
export const clearError = () => async (dispatch) => {
    dispatch(clearErrors())
}