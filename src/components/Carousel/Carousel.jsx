import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import { Image1, Image2, Image3, Image4, Image5 } from "../../assets";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

export default function Carousel() {
  return (
    <section className="h-[calc(100vh-122px)] relative -top-[115px] mb-40 bg-sky-200">
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        loop={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide className="max-h-screen">
          <img
            src={Image1}
            alt="carousel image"
            className="w-full object-contain object-bottom"
          />
        </SwiperSlide>
        <SwiperSlide className="max-h-screen">
          <img
            src={Image2}
            alt="carousel image"
            className="w-full object-contain object-bottom"
          />
        </SwiperSlide>
        <SwiperSlide className="max-h-screen">
          <img
            src={Image3}
            alt="carousel image"
            className="w-full object-contain object-bottom"
          />
        </SwiperSlide>
        <SwiperSlide className="max-h-screen">
          <img
            src={Image4}
            alt="carousel image"
            className="w-full object-contain object-bottom"
          />
        </SwiperSlide>
        <SwiperSlide className="max-h-screen">
          <img
            src={Image5}
            alt="carousel image"
            className="w-full object-contain object-bottom"
          />
        </SwiperSlide>
      </Swiper>
    </section>
  );
}
