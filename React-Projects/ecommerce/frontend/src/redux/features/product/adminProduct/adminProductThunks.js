import axios from 'axios'
import { toast } from 'react-toastify'
import { clearErrors, deleteAdminProductFail, deleteAdminProductRequest, deleteAdminProductSuccess, updateAdminProductFail, updateAdminProductRequest, updateAdminProductSuccess } from './adminProductSlice'

export const deleteAdminProduct = (id) => async (dispatch)=>{
    try {
        dispatch(deleteAdminProductRequest())

        const {data} = await toast.promise(axios.delete(`/api/v1/admin/products/${id}`),
        {
            pending: 'Deleting Product',
            success: 'Product Deleted Successfully',
            error: 'Can not Delete Product! Try Again'
          })
        dispatch(deleteAdminProductSuccess(data.success))
        
    } catch (error) {
        dispatch(deleteAdminProductFail(error.response?.data.message))
    }
}

export const updateAdminProduct = (id,productData) => async (dispatch)=>{
    try {
        dispatch(updateAdminProductRequest())

        const config = {
            headers:{
                "Content-Type": "application/json"
            }
        }

        const {data} = await toast.promise(axios.put(`/api/v1/admin/products/${id}`,productData,config),
        {
            pending: 'Updating Product',
            success: 'Product Updated Successfully',
            error: 'Can not Update Product! Try Again'
          })
        dispatch(updateAdminProductSuccess(data.success))
        
    } catch (error) {
        dispatch(updateAdminProductFail(error.response?.data.message))
    }
}

// *clearing error
export const clearError = () => async (dispatch) => {
    dispatch(clearErrors())
}