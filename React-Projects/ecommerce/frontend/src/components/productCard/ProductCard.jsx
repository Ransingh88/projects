import React from 'react'
import './productCard.css'
import { IoHeartOutline, IoHeart } from 'react-icons/io5';

const ProductCard = (props) => {
  const {title,description,price,rating,fevorite,image} = props
  return (
    <div className='productCard'>
      <div className='productImage'>
        <span className='fevoriteIcon'>
          {fevorite ? <IoHeart className='fillHeart'/> : <IoHeartOutline />}
        </span>
      <img src={`./images/products/${image}.jpg`} alt={title} />
      </div>
      <h3>{title}</h3>
      <p>{description}</p>
      <div>
        <p>{price}</p>
        <p>{rating}</p>
      </div>
    </div>
  )
}

export default ProductCard