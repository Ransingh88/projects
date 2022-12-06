import React from 'react'
import './orderItems.css'
import { GoPackage } from 'react-icons/go';
import { MdArrowForwardIos } from 'react-icons/md';
import { Link } from 'react-router-dom'

const OrderItems = ({orderDetails}) => {
  return (
    <div className='orderItems-container'>
        <div className='orderItem_statusContainer'>
            <GoPackage/>
            <span>
            <p className={`orderItem_orderStatus ${orderDetails.orderStatus ==='delivered'?'orderItem_orderStatus-delivered':orderDetails.orderStatus ==='cancelled'? 'orderItem_orderStatus-cancelled':'orderItem_orderStatus-processing'}`}>{orderDetails.orderStatus}</p>
            <p className='orderItem_orederStatusTime'>on {orderDetails.updatedAt.slice(0,10)}</p>
            </span>
        </div>
        <div className='orderItem_orderDetailsContainer'>
            <div className='orderItem_orderDetails'>
            <img src={orderDetails.orderItems[0].image} alt="" />
            <span>
                <p>{orderDetails.orderItems[0].name}</p>
                
            </span>
            </div>
            <Link to={`/order/${orderDetails._id}`}>
            <MdArrowForwardIos className='orderItem_arrowRightIcon'/>
            </Link>
        </div>
        {orderDetails.orderItems.length>1 ? <p className='orderItem_moreItems'>. . . and {orderDetails.orderItems.length-1} Items more</p>:''}
        </div>
  )
}

export default OrderItems