// import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import { Pagination } from "swiper/modules";

import image1 from "../../../assets/assets/home/slide1.jpg";
import image2 from "../../../assets/assets/home/slide2.jpg";
import image3 from "../../../assets/assets/home/slide3.jpg";
import image4 from "../../../assets/assets/home/slide4.jpg";
import image5 from "../../../assets/assets/home/slide5.jpg";
import SectionTitle from "../Shared/Components/SectionTitle";

const Categories = () => {
  return (
    <section>
      <SectionTitle
        heading={"From 7am to 3pm"}
        subheading={"Order Online"}
      ></SectionTitle>

      <Swiper
        slidesPerView={4}
        spaceBetween={30}
        centeredSlides={true}
        pagination={{
          clickable: true
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img src={image1} alt="" />
          <h3 className="text-4xl -mt-12 text-center text-white">Salad</h3>
        </SwiperSlide>
        <SwiperSlide>
          <img src={image2} alt="" />
          <h3 className="text-4xl -mt-12 text-center text-white">Soup</h3>
        </SwiperSlide>
        <SwiperSlide>
          <img src={image3} alt="" />

          <h3 className="text-4xl -mt-12 text-center text-white">Pizza </h3>
        </SwiperSlide>
        <SwiperSlide>
          <img src={image4} alt="" />

          <h3 className="text-4xl -mt-12 text-center text-white">Dessert </h3>
        </SwiperSlide>
        <SwiperSlide>
          <img src={image5} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={image2} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={image3} alt="" />
        </SwiperSlide>
      </Swiper>
    </section>
  );
};

export default Categories;
