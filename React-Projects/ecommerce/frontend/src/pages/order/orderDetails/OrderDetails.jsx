import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { toast } from 'react-toastify'
import { clearErrors } from '../../../redux/features/order/myOrderDetailsSlice'
import { myOrderDetails } from '../../../redux/features/order/orderThunks'
import { Link, useParams } from 'react-router-dom'
import './orderDetails.css'
import MetaData from '../../../components/layout/metaData/MetaData'
import Loader from '../../../components/layout/loader/Loader'

const OrderDetails = () => {
    const dispatch = useDispatch()
    const {id} = useParams()
    const {order,loading,error} = useSelector(state=>state.myOrderDetails)

    useEffect(()=>{
        if(error){
            toast.error(error)
            dispatch(clearErrors())
        }
        dispatch(myOrderDetails(id))
    },[dispatch, error,id])
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
        <div>
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
        </section>
      </main>
    </>
    }</>
  )
}

export default OrderDetails