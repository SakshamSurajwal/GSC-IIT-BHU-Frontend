import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";

import {
  EffectCoverflow,
  Pagination,
  Navigation,
  Autoplay,
} from "swiper/modules";

import slide_image_1 from "../../images/cricket.svg";
import slide_image_2 from "../../images/1.jpeg";

import "./3dslider.css";

function Slider_New() {
  return (
    <div className="container absolute hidden lg:block">
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        loop={true}
        slidesPerView={"auto"}
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 100,
          modifier: 2.5,
        }}
        pagination={{ el: ".swiper-pagination", clickable: true }}
        navigation={{
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
          clickable: true,
        }}
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
          reverseDirection: true,
        }}
        modules={[EffectCoverflow, Pagination, Navigation, Autoplay]}
        className="swiper_container"
      >
        <SwiperSlide>
          <img
            src={slide_image_1}
            alt="slide_image"
            className="border-8 border-[#A2A2A2]"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src={slide_image_2}
            alt="slide_image"
            className="border-8 border-[#A2A2A2]"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src={slide_image_1}
            alt="slide_image"
            className="border-8 border-[#A2A2A2]"
          />
        </SwiperSlide>
      </Swiper>
    </div>
  );
}

export default Slider_New;
