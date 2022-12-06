import React, { useEffect } from 'react'
import './payment.css'
import {CardNumberElement,CardCvcElement,CardExpiryElement,useStripe,useElements} from '@stripe/react-stripe-js'
import Stepper from '../../components/stepper/Stepper'
import { useDispatch, useSelector } from 'react-redux'
import { useRef } from 'react'
import { clearCart, grossTotalPrice, totalPrice } from '../../redux/features/product/cartSlice/cartSlice'
import { toast } from 'react-toastify'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { clearError, createOrder } from '../../redux/features/order/orderThunks'

const Payment = () => {
    const {cartItems,cartPrice,shippingInfo} = useSelector(state=>state.cart)
    const {error} = useSelector(state=>state.order)
    const orderInfo = JSON.parse(sessionStorage.getItem("orderInfo"))
    const payBtn = useRef(null)
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const elements = useElements()
    const stripe = useStripe()
    const paymentData = {
        amount:Math.round(orderInfo.grossTotal * 100)
    }
    const order = {
        shippingInfo,
        orderItems:cartItems,
        itemPrice:orderInfo.total,
        taxPrice:orderInfo.tax,
        shippingPrice:orderInfo.shippingCharge,
        totalPrice:orderInfo.grossTotal,

    }

    const handlePayment = async ()=>{
        payBtn.current.disabled = true
        try {
            const config ={
                headers:{
                    "Content-Type":"application/json"
                }
            }

            const {data} = await axios.post('/api/v1/process/payment',paymentData,config)
            const client_secret = data.client_secret

            if(!stripe || !elements) return

            const result = await toast.promise(stripe.confirmCardPayment(client_secret,{
                payment_method:{
                    card:elements.getElement(CardNumberElement),
                    billing_details:{
                        name:`${shippingInfo.firstName}${shippingInfo.middleName ===undefined?'':shippingInfo.middleName}${shippingInfo.lastName}`,
                        email:shippingInfo.email,
                        address:{
                            line1:shippingInfo.address,
                            city:shippingInfo.city,
                            state:shippingInfo.state,
                            postal_code:shippingInfo.pinCode,
                            country:shippingInfo.country
                        }
                    }
                }
            }),{
                pending: 'Processing Payment',
                // success: 'Payment Processing complete',
                error: 'Payment Failed'
              },{pauseOnFocusLoss: false})

            if(result.error){
                payBtn.current.disabled = false
                toast.error(result.error.message)
            }else{
                if(result.paymentIntent.status === 'succeeded'){
                    order.paymentInfo={
                        id:result.paymentIntent.id,
                        status:result.paymentIntent.status
                    }
                    dispatch(createOrder(order))
                    toast.success('Payment Successfull')
                    navigate('/success')
                    dispatch(clearCart())
                }else{
                    toast.error('Payment Failed! There is some issue while processing payment.')
                }
            }
            
            
        } catch (error) {
            payBtn.current.disabled = false
            toast.error(error.response.data.message)
        }
    }

    useEffect(()=>{
        dispatch(totalPrice())
        dispatch(grossTotalPrice())
    },[cartItems,dispatch])

    useEffect(()=>{
        if(error){
            toast.error(error)
            dispatch(clearError())
        }
    },[dispatch,error])

  return (
    <main className='container-fluid mainPaymentContainer'>
        <section className='container paymentContainer'>
            <h1 className='heading payment-heading'><span>Payment</span></h1>
        </section>
        <div className='multiStep_container'>
            <Stepper activeStep={3}/>
        </div>
        <div className='container paymentDetailsContainer'>
            <section className='paymentDeatils-section'>
                <h4>payment option</h4>
                <div className='paymentDeatils_payment'>
                    <CardNumberElement className='paymentInputField'/>
                    <CardCvcElement className='paymentInputField'/>
                    <CardExpiryElement className='paymentInputField'/>
                    {/* <input className='btn btn-primary payment_actionBtn' type="submit" value={`Pay - &#8377; ${orderInfo && orderInfo.grossTotal}`}/> */}
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
            <button className='btn btn-primary payment_actionBtn' ref={payBtn} onClick={handlePayment}>Pay - &#8377; {orderInfo && orderInfo.grossTotal}</button>
            </section>
        </div>
    </main>
  )
}

export default Payment