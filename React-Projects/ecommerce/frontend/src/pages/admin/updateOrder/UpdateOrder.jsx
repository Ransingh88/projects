import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { toast } from 'react-toastify'
import { clearErrors } from '../../../redux/features/order/myOrderDetailsSlice'
import { clearError as orderClearError } from '../../../redux/features/order/adminOrder/adminOrdersThunks'
import { myOrderDetails } from '../../../redux/features/order/orderThunks'
import { Link, useNavigate, useParams } from 'react-router-dom'
import MetaData from '../../../components/layout/metaData/MetaData'
import Loader from '../../../components/layout/loader/Loader'
import { useState } from 'react'
import { updateAdminOrder } from '../../../redux/features/order/adminOrder/adminOrdersThunks'
import { updateAdminOrdersReset } from '../../../redux/features/order/adminOrder/adminOrdersSlice'

const UpdateOrder = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const {id} = useParams()
    const {order,loading,error} = useSelector(state=>state.myOrderDetails)
    const {error:updateError,isUpdated} = useSelector(state=>state.adminOrder)
    const [status,setStatus] = useState('')

    const handleOrderUpdate = () => {
        const myData = new FormData()
        myData.set('status',status)
        dispatch(updateAdminOrder(id,myData))
    }

    useEffect(()=>{
        if(error){
            toast.error(error)
            dispatch(clearErrors())
        }
        if(updateError){
            toast.error(updateError)
            dispatch(orderClearError())
        }
        if(isUpdated){
            // toast.success('order Updated successfully')
            navigate('/admin/allorders')
            dispatch(updateAdminOrdersReset())
        }
        dispatch(myOrderDetails(id))
    },[dispatch, error, id, isUpdated, navigate, updateError])
  return (
    <>
    {loading ? <Loader/> :
    <>
    <MetaData title={`orderDetails`}/>
    <main className='container-fluid mainOrderDetailContainer'>
        <h1 className='heading customerReview-heading'>Order<span> Details</span></h1>
        <section className='container orderDetailContainer'>
        <div className='orderDetailsInfo'>
            <div>
                <h3>Shipping Info</h3>
                <div>
                    <p>Name: {order.user.name}</p>
                    <p>Email: {order.user.email}</p>
                    <p>Phone No: {order.shippingInfo.phoneNo}</p>
                    <p>Address: {order.shippingInfo.address}, {order.shippingInfo.city}, {order.shippingInfo.state}, {order.shippingInfo.pinCode}</p>
                </div>
            </div>
            <div>
                <div> 
                    <h3>Payment Info</h3>
                    <p>Status: <span className={` ${order.paymentInfo.status === 'succeeded'?'orderStatus-delivered':'orderStatus-cancelled'}`}>{order.paymentInfo.status === 'succeeded'? "Paid":'Not Paid'}</span></p>
                    <p>Amount: {order.totalPrice}</p>
                    <p>Payment At: {order.paidAt}</p>
                </div>
                <div> 
                    <h3>Order Info</h3>
                    <p >Status: <span className={`${order.orderStatus ==='delivered'?'orderStatus-delivered':order.orderStatus ==='cancelled'? 'orderStatus-cancelled':'orderStatus-processing'}`}>{order.orderStatus}</span></p>
                    <p>Placed On: {order.createdAt}</p>
                </div>
            </div>
        </div>
        <div className='orderDetails_ordersProcessContainer'>
        <div className='orderDetails_orders'>
        <h3>Items on this order</h3>
            {order.orderItems.map((item)=>(
                <div className='orderDetails_itemContainer'>
                    <Link to={`/product/${item.catagory}/${item.productId}`}>
                    <div>
                    <img src={item.image} alt={item.name} />
                    <p>{item.name}</p>
                    </div>
                    </Link>
                    <p>{item.quantity} x {item.price} = {item.quantity * item.price}</p>
                </div>
            ))}
        </div>
        <div className='orderDetails_orderStatus'>
        <h3>Process order</h3>
        <select name="" id="" value={status} onChange={(e)=>{setStatus(e.target.value)}}>
            <option value="">Choose Status</option>
            <option value="shipped">Shipped</option>
            <option value="delivered">Delivered</option>
        </select>
        <button disabled={status === '' ? true : false} className='btn btn-primary' onClick={handleOrderUpdate}>Process</button>
        </div>
        </div>
        </section>
      </main>
    </>
    }</>
  )
}

export default UpdateOrder