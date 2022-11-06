import React from 'react'
import { IoCloseOutline } from 'react-icons/io5'
import { useDispatch } from 'react-redux'
import { addItemsToCart } from '../../../redux/features/product/cartSlice/cartThunks'
import './cartItemCard.css'

const CartItemCard = ({item,deleteCartItem}) => {

  const dispatch = useDispatch()

    const handleIncreamentQuantity = (id,quantity,stock) => {
        const newQty = quantity + 1
        if(stock <= quantity){
          return
        }
        dispatch(addItemsToCart(id,newQty))
      }
  
      const handleDecreamentQuantity = (id,quantity) => {
        const newQty = quantity - 1
        if(1 >= quantity){
          return
        }
        dispatch(addItemsToCart(id,newQty))
      }
  return (
    <div className='cartItemCard'>
        <div className='cartItemCard__ItemInfo'>
            <div className='cartItemCard__imgBox'>
                <img src={item.image} alt="" />
            </div>
            <p>{item.name}</p>
        </div>
        <p>&#8377; {item.price}</p>
        <div className='productDetails__quantityCount'>
              <button onClick={()=>handleDecreamentQuantity(item.productId,item.quantity)}>-</button>
              <input readOnly type="number" name="" id="" value={item.quantity} />
              <button onClick={()=>handleIncreamentQuantity(item.productId,item.quantity,item.stock)}>+</button>
        </div>
        <p className='cartItem__totalPrice'>&#8377; {item.price * item.quantity} <span className='cartItem--removeIcon' onClick={()=>deleteCartItem(item.productId)}><IoCloseOutline /></span></p>
    </div>
  )
}

export default CartItemCard