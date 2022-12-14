import React from 'react'
import './homeCarousel.css'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation, Pagination } from 'swiper';
import banner1 from '../../../Assets/image/banner1.webp'
import banner2 from '../../../Assets/image/banner2.gif'
import banner3 from '../../../Assets/image/banner3.webp'
import banner4 from '../../../Assets/image/banner4.webp'
import banner5 from '../../../Assets/image/banner5.jpg'
import banner6 from '../../../Assets/image/banner6.webp'
import banner7 from '../../../Assets/image/banner7.webp'
import banner8 from '../../../Assets/image/banner8.webp'

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
        <SwiperSlide><img src={banner2} alt="banner1" /></SwiperSlide>
        <SwiperSlide><img src={banner1} alt="banner2" /></SwiperSlide>
        <SwiperSlide><img src={banner3} alt="banner3" /></SwiperSlide>
        <SwiperSlide><img src={banner4} alt="banner4" /></SwiperSlide>
        <SwiperSlide><img src={banner5} alt="banner5" /></SwiperSlide>
        <SwiperSlide><img src={banner6} alt="banner6" /></SwiperSlide>
        <SwiperSlide><img src={banner7} alt="banner7" /></SwiperSlide>
        <SwiperSlide><img src={banner8} alt="banner8" /></SwiperSlide>
        {/* <SwiperSlide><img src={banner1} alt="1000x4000" /></SwiperSlide>
        <SwiperSlide><img src={banner1} alt="1000x4000" /></SwiperSlide> */}
      </Swiper>
        </div>
  )
}

export default HomeCarousel