import React from 'react'
import { IoPersonCircle } from 'react-icons/io5'
import ReactStars from 'react-rating-stars-component'
import './reviewCard.css'

const ReviewCard = ({name,rating,comment}) => {

    const options = {
        count:5,
        isHalf:true,
        activeColor:'#faad14',
        value:rating,
        edit:false,
      }
  return (
    <div className='reviewCardContainer'>
        <div className='reviewUserInfo'>
            {/* <img src="" alt="" /> */}
            <IoPersonCircle/>
            <div>
            <h4>{name}</h4>
            <span className='reviewRaring'><ReactStars {...options}/>&nbsp;{rating}</span>
            </div>
        </div>
        <div className='reviewComment'>
        <p>{comment}</p>
        </div>
    </div>
  )
}

export default ReviewCard