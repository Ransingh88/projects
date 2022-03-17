import React from 'react'
import './card.css'

const Card = ({img,title,desc}) => {
  return (
    <div className='card'>
        <img src={img} alt="product Image" />
        <div className='card__content'>
        <p>{title}</p>
        <p>{desc}</p>
        </div>
    </div>
  )
}

export default Card