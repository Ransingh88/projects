import React from 'react'
import './homeCarousel.css'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation, Pagination } from 'swiper';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

const HomeCarousel = () => {
  return (
    <div className='carousel'>
        <Swiper
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        slidesPerView={1}
        spaceBetween={30}
        loop={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay,Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide><img src="./images/products/pexels-laryssa-suaid-1667071.jpg" alt="" /></SwiperSlide>
        <SwiperSlide><img src="./images/products/pexels-gabriel-freytez-341523.jpg" alt="" /></SwiperSlide>
        <SwiperSlide><img src="./images/products/pexels-karolina-grabowska-5650016.jpg" alt="" /></SwiperSlide>
        <SwiperSlide><img src="./images/products/pexels-math-90946.jpg" alt="" /></SwiperSlide>
        <SwiperSlide><img src="./images/products/pexels-pixabay-256198.jpg" alt="" /></SwiperSlide>
        <SwiperSlide><img src="./images/products/pexels-pixabay-279906.jpg" alt="" /></SwiperSlide>
        <SwiperSlide><img src="./images/products/pexels-tree-of-life-seeds-3259600.jpg" alt="" /></SwiperSlide>
        <SwiperSlide><img src="./images/products/pexels-karolina-grabowska-5650050.jpg" alt="" /></SwiperSlide>
        <SwiperSlide><img src="./images/products/pexels-tree-of-life-seeds-3259600.jpg" alt="" /></SwiperSlide>
      </Swiper>
        </div>
  )
}

export default HomeCarousel