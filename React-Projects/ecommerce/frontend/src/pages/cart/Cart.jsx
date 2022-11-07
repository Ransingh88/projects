import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { couponCodePrice, grossTotalPrice, totalPrice } from '../../redux/features/product/cartSlice/cartSlice'
import { removeItemFromCart } from '../../redux/features/product/cartSlice/cartThunks'
import './cart.css'
import CartItemCard from './cartItemCard/CartItemCard'

const Cart = () => {

    const [couponCode,setCouponCode] = useState(0)
    const {cartItems,cartPrice} = useSelector(state=>state.cart)
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const removeCartItem = (id)=>{
        dispatch(removeItemFromCart(id))
    }
    const handleCheckout = ()=>{
        navigate('/auth/login?redirect=shipping')
    }
    const handleCouponCode = ()=>{
        if(couponCode ==='DEBA30'){
            dispatch(couponCodePrice(130))
            dispatch(grossTotalPrice())
        }
    }

    useEffect(()=>{
        dispatch(totalPrice())
        dispatch(grossTotalPrice())
    },[cartItems,dispatch])

  return (
    <main className='container-fluid mainCartContainer'>
        <section className='container cartContainer'>
            <h1 className='heading cart-heading'>Your <span>Shopping Cart</span> </h1>
        </section>
        {cartItems.length >=1 ? 
        <section className='container cartContainer'>
            <div className='cart__lebel__heading'>
                <p>Product</p>
                <p>Price</p>
                <p>Quantity</p>
                <p>Total</p>
            </div>
            <div className="cartItemsContainer">
                {cartItems && cartItems.map((productItem)=>(
                    <CartItemCard key={productItem.productId} item={productItem} deleteCartItem={removeCartItem}/>
                ))}
            </div>
            <div className='cart__subtotalContainer'>
            <div className='cart__subtotal'>
                <div className='cart__promocode'>
                    <span>promocode</span>
                    <input type="text" placeholder='eg: DEBA30' onChange={(e)=>setCouponCode(e.target.value)}/>
                    <button className='btn btn-primary' onClick={handleCouponCode}>Apply</button>
                    </div>
                <div></div>
                <p>Total</p>
                <div className=''>&#8377; {cartPrice.total}</div>
            </div>
            <div className='cart__subtotal'>
                <div></div>
                <div></div>
                <p>Delivery Charges</p>
                <div className=''> {cartPrice.shippingCharge===0 ? 'Free' : <>&#8377; {`${cartPrice.shippingCharge}`}</>}</div>
            </div>
            <div className='cart__subtotal'>
                <div></div>
                <div></div>
                <p>Discount</p>
                <div className=''>{cartPrice.coupon} </div>
            </div>
            <div className='cart__subtotal cart__subtotal__totalPrice'>
                <div></div>
                <div></div>
                <p>Total Price</p>
                <div className=''>&#8377; {cartPrice.grossTotal}</div>
            </div>
            </div>
            <div className='cart__actionBtn'>
                <button className='btn btn-primary continueShipmentBtn' onClick={handleCheckout}>Checkout</button>
            </div>
        </section> : 
        <section className='container cartContainer'>
            <div>
            <p>No Items</p>
            </div>
            <button className='btn btn-primary' onClick={()=>navigate('/products')}>Shop Now</button>
        </section>}
    </main>
  )
}

export default Cart