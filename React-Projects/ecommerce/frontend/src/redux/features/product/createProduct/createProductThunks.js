import axios from 'axios'
import { toast } from 'react-toastify'
import { clearErrors, createNewProductsFail, createNewProductsRequest, createNewProductsSuccess } from './createProductSlice'

export const createNewProducts = (productData) => async (dispatch)=>{
    try {
        dispatch(createNewProductsRequest())

        const config = {
            headers:{
                "Content-Type": "application/json"
            }
        }

        const {data} = await toast.promise(axios.post('/api/v1/admin/products/new', productData, config),
        {
            pending: 'Creating Product',
            success: 'Product Craeted Successfully',
            error: 'Can not Create Product! Try Again'
          })
        dispatch(createNewProductsSuccess(data))
        
    } catch (error) {
        dispatch(createNewProductsFail(error.response?.data.message))
    }
}

// *clearing error
export const clearError = () => async (dispatch) => {
    dispatch(clearErrors())
}