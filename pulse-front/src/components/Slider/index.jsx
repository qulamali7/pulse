import React from "react";
import {Autoplay, Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import "./index.scss"

const Slider = () => {
  return (
    <div>
      {" "}
      <Swiper
        // install Swiper modules
        modules={[Autoplay,Navigation, Pagination, Scrollbar, A11y]}
        spaceBetween={50}
        slidesPerView={1}
        navigation
        autoplay={{
            delay: 2500,
            disableOnInteraction: false,
        }}   
        pagination={{ clickable: true }}
        loop = {true}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log("slide change")}
      >
        <SwiperSlide><img src="https://preview.colorlib.com/theme/pulse/img/slider/slider-1.jpg" alt="" /></SwiperSlide>
        <SwiperSlide><img src="https://preview.colorlib.com/theme/pulse/img/slider/slider-2.jpg" alt="" /></SwiperSlide>
        <SwiperSlide><img src="https://preview.colorlib.com/theme/pulse/img/slider/slider-3.jpg" alt="" /></SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Slider;
