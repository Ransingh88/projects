import React from 'react'
import { Link } from 'react-router-dom'
import './orderSuccess.css'
import SucessIcon from '../../../Assets/image/icons/ok.gif'

const OrderSuccess = () => {
  return (
    <main className='container-fluid mainOrderSuccessContainer'>
        <section className='container orderSuccessContainer'>
            <img src={SucessIcon} alt="" />
            <p>Your order has been placed successfully</p>
            <Link to='/account/order' className='btn viewOrderBtn'>view Order</Link>
        </section>
    </main>
  )
}

export default OrderSuccess