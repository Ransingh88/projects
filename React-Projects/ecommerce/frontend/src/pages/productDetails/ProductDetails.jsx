import React from 'react'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate, useParams } from 'react-router-dom'
import Loader from '../../components/layout/loader/Loader'
import { fetchProductDetails, submitNewReview } from '../../redux/features/product/productDetails/productDetailsThunk'
import './productDetails.css'
import ProductImageSlider from './productImageSlider/ProductImageSlider'
import ReactStars from "react-rating-stars-component";
import ReviewCard from '../../components/reviewCard/ReviewCard'
import { IoStar } from 'react-icons/io5'
import MetaData from '../../components/layout/metaData/MetaData'
import { useState } from 'react'
import { addItemsToCart } from '../../redux/features/product/cartSlice/cartThunks'
import { toast } from 'react-toastify'
import { clearErrors, newReviewReset } from '../../redux/features/product/productDetails/productDetailSlice'
import { ROUTE_CONSTANTS } from '../../constants/constants'

const ProductDetails = () => {


    var star5 = 0
    var star4 = 0
    var star3 = 0
    var star2 = 0
    var star1 = 0  

    const [reviewWindowShow,setReviewWindowShow] = useState(false)
    const [reviewRating,setReviewRating] = useState(0)
    const [userReview,setUserReview] = useState('')
    const [quantity,setQuantity] = useState(1)
    const dispatch = useDispatch()
    const {id} = useParams()
    const navigate = useNavigate()
    const {productDetails, loading, error, success} = useSelector((state) => state.productDetail)
    const {isAuthenticate} = useSelector((state) => state.user)
    const options = {
      count:5,
      isHalf:true,
      activeColor:'#faad14',
      value:productDetails.ratings,
      edit:false,
    }
    const reviewOptions = {
      count:5,
      isHalf:true,
      activeColor:'#faad14',
      value:reviewRating,
      edit:true,
    }
    const offPercentage = 12
    const discountPrice = (productDetails.price * offPercentage) / 100

    const countRatings = ()=>{
      productDetails.reviews.map(({rating}) => {
           switch(rating){
            case 1:{
               return star1+=1
            }
            case 2:{
              return star2+=1
            }
            case 3:{
              return star3+=1
            }
            case 4:{
              return star4+=1
            }
            case 5:{
              return star5+=1
            }
            default:{
              return null
            }
          }
      })
    }

    const handleIncreamentQuantity = () => {
      if(productDetails.stock <= quantity) return
      setQuantity(quantity+1)
    }

    const handleDecreamentQuantity = () => {
      if(quantity <= 1) return
      setQuantity(quantity-1)
    }

    const handleAddToCart = () => {
      if(productDetails.stock < 1){
        toast.error('Item out of stock')
      }else{
      dispatch(addItemsToCart(id,quantity))
      toast.success('Item Added to cart')
      }
    }

    const handleReviewWindowToggle = ()=>{
      if(isAuthenticate){
        reviewWindowShow ? setReviewWindowShow(false) : setReviewWindowShow(true)
      }else{
        navigate(ROUTE_CONSTANTS.ACCOUNT)
      }
    }

    const handleSubmitReview = ()=>{
      const myData = new FormData()

      myData.set("rating",reviewRating)
      myData.set("comment",userReview)
      myData.set("productId",id)

      dispatch(submitNewReview(myData))
      setReviewWindowShow(false)
      dispatch(newReviewReset())
    }

    useEffect(()=>{
      if(error){
        toast.error(error)
        dispatch(clearErrors())
      }
      if(success){
        toast.success("Review Submitted Successfully")
        dispatch(newReviewReset())
      }
        dispatch(fetchProductDetails(id))
        
    },[dispatch,id,error,success])

    // if(loading){
    //   return <Loader/>
    // }
    if(productDetails?.reviews){
      countRatings()
    }
  return (
    <>
    {
      loading ? <Loader/> :
      <>
      <MetaData title={`${productDetails.name} - Ecommerce`}/>
    <main className='container-fluid mainProductDetailContainer'>
      <section className='container productDetailContainer'>
        <div className="productDetails-imageSection">
            {productDetails.images && <ProductImageSlider productImages={productDetails.images}/>}
        </div>
        <div className="productDetails-InfoSection">
          <div className='productDetails-productInfo'>
          <p className='productDetails-breadcrumb'>{`${productDetails.catagory} > ${productDetails.name}`}</p>
          <h1 className='productDetails-productTitle'>{`${productDetails.name}`}</h1>
          <p className='productDetails-breadcrumb'>{`Product ID: #${productDetails._id}`}</p>
          <p className='productDetails-productDesc'>{productDetails.description?.length < 200 ? productDetails?.description : <>{productDetails.description?.substr(0,200)}...<span>read more</span></>}</p>
          <div className='productDetails-priceRatings'>
            <div className='productDetails-price'>
              <div className='productDetails-originalPrice'><p className='price'>&#8377; {productDetails.price}</p> <p className='offPrecentage'> {offPercentage}% off</p></div>
              <h3 className='productDetails-offPrice'>&#8377; {Math.ceil(productDetails.price - discountPrice)}</h3>
            </div>
            <div className='productDetails-ratings'>
              <ReactStars {...options}/>
              <p>{`${productDetails.ratings && productDetails.ratings.toFixed(1)}(${productDetails.numOfReviews} Reviews)`}</p>
            </div>
          </div>
          <div>
            <p className='productDetails-stock'>Stock: <span className={productDetails.stock < 1 ? 'outOfStock' : productDetails.stock < 5 && productDetails.stock >= 1 ? 'limitedStock':'inStock'}>{productDetails.stock < 1 ? `out of stock` : productDetails.stock < 5 && productDetails.stock >= 1 ? `${productDetails.stock} left`: `InStock`}</span></p>
            <div className='productDetails__quantityCount'>
              <button onClick={handleDecreamentQuantity}>-</button>
              <input readOnly type="number" name="" id="" value={quantity} />
              <button onClick={handleIncreamentQuantity}>+</button>
            </div>
          </div>
          </div>
          <div className='productDetails-actions'>
          <p className='productDetails-coupon'>Enjoy upto Rs. 5450 off  with promo code <span>DEBA30</span> untill 17 Dec 2022</p>
          <div className='productDetails-actionButton'>
            <button  className="btn addToCart" onClick={handleAddToCart}>add to cart</button>
            <button className="btn fevorite">Fevorite</button>
            <button onClick={handleReviewWindowToggle} className="btn fevorite">Submit Review</button>
          </div>
          </div>
        </div>
      </section>

      {/* <section className='container'>
      <h1 className='heading customerReview-heading'><span>Product</span> Details</h1>
      </section> */}
      
      <section className='container productReviewContainer'>
      <h1 className='heading customerReview-heading'><span>Customer</span> Review</h1>
        {productDetails.reviews && productDetails.reviews[0] ?
        (<div className='reviewContainer'><div className='productReview'>
        {productDetails.reviews.map((review,id) => {
          return <ReviewCard key={id} name={review.name} rating={review.rating} comment={review.comment}/>
})}
        </div>
        <div className='overalRating'>
          <p>Rating overview</p>
          <div className='overalRating-ratingContainer'>
            <h1 className='overalRating-rating'>{productDetails.ratings && productDetails.ratings.toFixed(1)}<span>/5</span> </h1>
            <ReactStars {...options} size={24}/>
            <p className='overalRating-noOfRatings'>{productDetails.numOfReviews} ratings</p>
          </div>
          <div className='overalRating-individualRatings'>
            <div><p>5</p><IoStar/><span><div className='level5'></div></span><p className='individualRatings-numbers'>{star5}</p></div>
            <div><p>4</p><IoStar/><span><div className='level4'></div></span><p className='individualRatings-numbers'>{star4}</p></div>
            <div><p>3</p><IoStar/><span><div className='level3'></div></span><p className='individualRatings-numbers'>{star3}</p></div>
            <div><p>2</p><IoStar/><span><div className='level2'></div></span><p className='individualRatings-numbers'>{star2}</p></div>
            <div><p>1</p><IoStar/><span><div className='level1'></div></span><p className='individualRatings-numbers'>{star1}</p></div>
          </div>
          {/* <button onClick={handleReviewWindowToggle} className="btn fevorite">Submit Review</button> */}
          </div>
          </div>) : (
          <p className='productDetails-noReviews'>no reviews yet</p>
        )
        }
        {reviewWindowShow ? 
      <div className='reviewDialog'>
        <h4>Submit Review</h4>
        <div>
        <ReactStars {...reviewOptions} size={28} onChange={(newRating)=>{setReviewRating(newRating)}}/>
        <textarea name="" id="" cols="40" rows="8" value={userReview} onChange={(e)=>{setUserReview(e.target.value)}}></textarea>
        </div>
        <div>
          <button className='btn' onClick={handleReviewWindowToggle}>Cancel</button>
          <button className='btn' onClick={handleSubmitReview}>Submit</button>
        </div>
      </div>
      : null}
      </section>
      
    </main>
    </>
    }
    </>
  )
}

export default ProductDetails