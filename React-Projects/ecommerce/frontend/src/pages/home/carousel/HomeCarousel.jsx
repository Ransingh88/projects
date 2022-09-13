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
        <SwiperSlide><img src="https://via.placeholder.com/500x2000?text=sliderimage1" alt="1000x4000" /></SwiperSlide>
        <SwiperSlide><img src="https://via.placeholder.com/500x2000?text=sliderimage2" alt="1000x4000" /></SwiperSlide>
        <SwiperSlide><img src="https://via.placeholder.com/500x2000?text=sliderimage3" alt="1000x4000" /></SwiperSlide>
        <SwiperSlide><img src="https://via.placeholder.com/500x2000?text=sliderimage4" alt="1000x4000" /></SwiperSlide>
        <SwiperSlide><img src="https://via.placeholder.com/500x2000?text=sliderimage5" alt="1000x4000" /></SwiperSlide>
        <SwiperSlide><img src="https://via.placeholder.com/500x2000?text=sliderimage6" alt="1000x4000" /></SwiperSlide>
        <SwiperSlide><img src="https://via.placeholder.com/500x2000?text=sliderimage7" alt="1000x4000" /></SwiperSlide>
        <SwiperSlide><img src="https://via.placeholder.com/500x2000?text=sliderimage8" alt="1000x4000" /></SwiperSlide>
        <SwiperSlide><img src="https://via.placeholder.com/500x2000?text=sliderimage9" alt="1000x4000" /></SwiperSlide>
        <SwiperSlide><img src="https://via.placeholder.com/500x2000?text=sliderimage10" alt="1000x4000" /></SwiperSlide>
      </Swiper>
        </div>
  )
}

export default HomeCarousel