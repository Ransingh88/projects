import axios from "axios"
import { myOrderDetailsFail, myOrderDetailsRequest, myOrderDetailsSuccess } from "./myOrderDetailsSlice"
import { myOrdersFail, myOrdersRequest, myOrdersSuccess } from "./myOrderSlice"
import { clearErrors, createOrderFail, createOrderRequest, createOrderSuccess } from "./orderSlice"

// create new order
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

// get my orders
export const myOrders = () => async (dispatch)=>{
    try {
        dispatch(myOrdersRequest())

        const {data} = await axios.get('/api/v1/orders/me')

        dispatch(myOrdersSuccess(data.orders))
        
    } catch (error) {
        dispatch(myOrdersFail(error.response.data.message))
    }
}


// get my order details
export const myOrderDetails = (id) => async (dispatch)=>{
    try {
        dispatch(myOrderDetailsRequest())

        const {data} = await axios.get(`/api/v1/order/${id}`)

        dispatch(myOrderDetailsSuccess(data.order))
        
    } catch (error) {
        dispatch(myOrderDetailsFail(error.response.data.message))
    }
}

// *clearing error
export const clearError = () => async (dispatch) => {
    dispatch(clearErrors())
}