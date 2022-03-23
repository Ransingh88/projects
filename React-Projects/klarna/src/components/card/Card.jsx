import React, { useState } from 'react'
import CardItem from '../cardItem/CardItem'
import './card.css'

const Card = ({img,title,desc,discount,popup}) => {

const [openModal,setOpenModal] = useState(false)
  const handleOpen =()=>{
    setOpenModal(true)
    popup()
  }
  
  const handleClose =()=>{
    setOpenModal(false)
    popup()
  }

  return (
    <>
    <div className='card' onClick={handleOpen}>
      <div className='card__image'>
        <img src={img} alt={img} />
        <div className='card__discount'>
          <h2>Extra</h2>
          <h1>{discount}% <span>off</span></h1>
        </div>
      </div>
        <div className='card__content'>
        <p>{title}</p>
        <p>{desc}</p>
        </div>
    </div>
    {openModal && <CardItem title={title} desc={desc} img={img} fn={handleClose}/>}
    </>
  )
}

export default Card