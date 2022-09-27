import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination} from 'swiper';

import "swiper/css";
import "./productImageSlider.css";


const ProductImageSlider = ({productImages}) => {

  return (
    <div className='productImageSlider'>
      {
        productImages.length <= 1 ? 
        <Swiper>
          <SwiperSlide>
          <img src={productImages.length < 1 ? 'https://via.placeholder.com/300?text=ecoshop(NoImageFound)' : productImages[0].url} alt="img" />
        </SwiperSlide>
        </Swiper> :
        <Swiper 
        className="mySwiper" 
        loop={true} 
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        modules={[Autoplay,Pagination]}
        >
        {productImages.map((img,index)=>(
          <SwiperSlide key={index}>
          <img src={img.url} alt={img.url} />
        </SwiperSlide>
        ))}
      </Swiper>
      }
    </div>
  )
}

export default ProductImageSlider