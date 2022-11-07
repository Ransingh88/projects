import React from 'react'
import './confirmOrder.css'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { grossTotalPrice, totalPrice } from '../../../redux/features/product/cartSlice/cartSlice'
import Stepper from '../../../components/stepper/Stepper'
import { Link, useNavigate } from 'react-router-dom'

const ConfirmOrder = () => {
    const {cartItems,cartPrice,shippingInfo} = useSelector(state=>state.cart)
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const address = `${shippingInfo.address}, ${shippingInfo.city}, ${shippingInfo.state}, ${shippingInfo.country} ${shippingInfo.pinCode}`
    

    const handleProceedToPayment = ()=>{
        sessionStorage.setItem("orderInfo",JSON.stringify(cartPrice))
        navigate('/process/payment')
    }
    

    useEffect(()=>{
        dispatch(totalPrice())
        dispatch(grossTotalPrice())
    },[cartItems,dispatch])

  return (
    <main className='container-fluid mainConfirmOrderContainer'>
        <section className='container confirmOrderContainer'>
            <h1 className='heading confirmOrder-heading'><span>Order</span> Summery</h1>
        </section>
        <div className='multiStep_container'>
            <Stepper activeStep={2}/>
        </div>
        <div className='container confirmOrderDetailsContainer'>
            <section className='confirmOrderDeatils-section'>
                <div>
                <h4>Deliver to :</h4>
                <div className='confirmOrderDeatils_address'>
                    <p><span>name : </span> {`${shippingInfo.firstName} ${shippingInfo.middleName===undefined ? '' : shippingInfo?.middleName} ${shippingInfo.lastName}`}</p>
                    <p><span>email : </span> {shippingInfo.email}</p>
                    <p><span>phone no. : </span> {shippingInfo.phoneNumber}</p>
                    <p><span>address : </span> {address}</p>
                </div>
                </div>
                <div>
                <h4>Your cart items</h4>
                <div className='confirmOrderDeatils_cartItems'>
                    {cartItems.map((item)=>(
                        <div className='confirmOrderDeatils_cartItem'>
                            <Link to={`/product/${item.catagory}/${item.productId}`}>
                            <span>
                            <img src={item.image} alt="" />
                            <p>{item.name}</p>
                            </span>
                            </Link>
                            <span>
                                <p>{`${item.quantity} X ${item.price} = ${item.quantity*item.price}`}</p>
                            </span>
                        </div>
                    ))}
                </div>
                </div>
            </section>
            <section className='priceDetails-section'>
            <section className='priceDetails_price_breakup'>
                <h4>Price Details</h4>
                <div className='priceDetails-prices_section'>
                    <span className='priceDetails_prices'>
                    <p>Price {`(${cartItems.length} Item)`}</p>
                    <p>&#8377; {cartPrice.total}</p>
                    </span>
                    <span className='priceDetails_prices'>
                    <p>Delivery Charges</p>
                    <p>&#8377; {cartPrice.shippingCharge}</p>
                    </span>
                    <span className='priceDetails_prices'>
                    <p>Discount</p>
                    <p>&#8377; {cartPrice.coupon}</p>
                    </span>
                    <span className='priceDetails_prices'>
                    <p>GST</p>
                    <p>&#8377; {cartPrice.tax}</p>
                    </span>
                </div>
                <div className='priceDetails-totalPayble_section'>
                    <span className='priceDetails_prices priceDetails_totalPayble'>
                    <p>Total Payble</p>
                    <p>&#8377; {cartPrice.grossTotal}</p>
                    </span>
                </div>
            </section>
            <button className='btn btn-primary shipping_actionBtn' onClick={handleProceedToPayment}>Proceed to Payment</button>
            </section>
        </div>
    </main>
  )
}

export default ConfirmOrder