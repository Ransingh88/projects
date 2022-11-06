import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { removeItemFromCart } from '../../redux/features/product/cartSlice/cartThunks'
import './cart.css'
import CartItemCard from './cartItemCard/CartItemCard'

const Cart = () => {
    const {cartItems} = useSelector(state=>state.cart)
    const dispatch = useDispatch()

    const removeCartItem = (id)=>{
        dispatch(removeItemFromCart(id))
    }
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
                    <input type="text" placeholder='eg: DEBA30'/>
                    <button className='btn btn-primary'>Apply</button>
                    </div>
                <div></div>
                <p>Total</p>
                <div className=''>&#8377; {cartItems.reduce((acc,item)=>acc + item.quantity*item.price,0)}</div>
            </div>
            <div className='cart__subtotal'>
                <div></div>
                <div></div>
                <p>Shipping</p>
                <div className=''>&#8377; 200</div>
            </div>
            <div className='cart__subtotal cart__subtotal__totalPrice'>
                <div></div>
                <div></div>
                <p>Total Price</p>
                <div className=''>&#8377; 1000</div>
            </div>
            </div>
            <div className='cart__actionBtn'>
                <button className='btn btn-primary continueShipmentBtn'>continue to shipment</button>
            </div>
        </section> : 
        <section className='container cartContainer'>
            No Items
        </section>}
    </main>
  )
}

export default Cart