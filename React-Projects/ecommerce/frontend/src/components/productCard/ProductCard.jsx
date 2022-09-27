import React from 'react'
import './productCard.css'
import { IoHeartOutline, IoHeart } from 'react-icons/io5';
import ReactStars from "react-rating-stars-component";

const ProductCard = (props) => {
  const {name,description,price,ratings,numOfReviews,images} = props
  const offPercentage = 12
  const fevorite = true
  const options = {
    count:5,
    isHalf:true,
    activeColor:'#faad14',
    value:ratings,
    edit:false,
  }
  const discountPrice = (price * offPercentage) / 100
  return (
    <div className='productCard'>
      
      <div>
      <div className='productImage'>
        <span className='fevoriteIcon'>
          {fevorite ? <IoHeart className='fillHeart'/> : <IoHeartOutline />}
        </span>
      <img src={images.length === 0 ? `https://via.placeholder.com/300?text=No+Image+Found`:`${images[0].url}`} alt={name} />
      {/* <div className='product-newItemTag'>new</div> */}
      </div>
      <h3 className='productTitle'>{name.length < 20 ? name : `${description.substr(0,50)}...`}</h3>
      <p className='productDescription'>{description.length < 50 ? description : `${description.substr(0,55)}...`}</p>
      </div>
      <div className='productInfo-section'>
        <span className='productPrice'> { typeof offPercentage == 'number' ? <><div><p>&#8377; {price} </p> <span> {offPercentage}% off</span></div>&#8377; {Math.ceil(price - discountPrice)}</> : <>&#8377; {price}</>}</span>
        <span className='productRatings'><ReactStars {...options}/>{ratings.toFixed(1)}({numOfReviews} Reviews)</span>
      </div>
    </div>
  )
}

export default ProductCard