import axios from "axios"
import { clearErrors, createOrderFail, createOrderRequest, createOrderSuccess } from "./orderSlice"

export const createOrder = (order) => async (dispatch,getState)=>{
    try {
        dispatch(createOrderRequest())

        const config ={
            headers:{
                "Content-Type":"application/json"
            }
        }
        const {data} = await axios.post('/api/v1/order/new',order,config)

        dispatch(createOrderSuccess(data))
        
    } catch (error) {
        dispatch(createOrderFail(error.response.data.message))
    }
}

// *clearing error
export const clearError = () => async (dispatch) => {
    dispatch(clearErrors())
}