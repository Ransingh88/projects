import React from 'react'
import './cardItem.css'
import { FaTimes } from "react-icons/fa";

const CardItem = ({img,fn,title,desc}) => {

    const closePopup = ()=>{
        fn()
    }
  return (
    <div className='cardItem'>
        <div className='cardItem__closeIcon' onClick={closePopup}>
        <FaTimes />
        </div>
        <img src={img} alt={img} />
        <h1>{title}</h1>
        <p>{desc}</p>
        <button className='cardItemBtn'>Shop Now</button>
    </div>
  )
}

export default CardItem