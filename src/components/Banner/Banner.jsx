"use client";
import Link from "next/link";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCards } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./Banner.css";

const Banner = () => {
  return (
    <section
      id="banner"
      className="bg-gradient-to-r from-[#411A7C]/72 to-[#084881]/12 relative overflow-hidden"
    >
      <div className="w-[581px] h-[581px] rounded-full bg-[#610082]/90 blur-[100px] absolute top-[-90px] left-[-40px] z-0"></div>
      <div className="w-[581px] h-[581px] rounded-full bg-[#005695]/50 blur-[100px] absolute bottom-[-90px] right-[-140px] z-0"></div>
      <div className="container mx-auto">
        <div className="flex justify-between items-center pt-[240px] pb-[230px] px-[110px] z-10 relative">
          <div className="max-w-[404px]">
            <h1 className="text-[55px] font-semibold text-white leading-[70px]">
              Web Design & Development Agency
            </h1>
            <p className="leading-[30px] text-[18px] font-normal text-gray-300 my-[50px]">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis
              nihil illum doloribus rem distinctio, accusantium explicabo nihil
              illum doloribus rem distinctio, accusantium explicabo
            </p>
            <Link
              href={"#"}
              className="py-[17px] px-[55px] font-semibold text-white rounded-md border-[2px] border-white inline-block duration-300 hover:bg-white hover:text-black"
            >
              See More
            </Link>
          </div>
          <div className="w-[450px]">
            <Swiper
              effect={"cards"}
              grabCursor={true}
              modules={[EffectCards]}
              cardsEffect={{
                perSlideOffset: 14,
                slideShadows: true,
              }}
              className="mySwiper"
            >
              <SwiperSlide>Slide 1</SwiperSlide>
              <SwiperSlide>Slide 2</SwiperSlide>
              <SwiperSlide>Slide 3</SwiperSlide>
              <SwiperSlide>Slide 4</SwiperSlide>
              <SwiperSlide>Slide 5</SwiperSlide>
              <SwiperSlide>Slide 6</SwiperSlide>
              <SwiperSlide>Slide 7</SwiperSlide>
              <SwiperSlide>Slide 8</SwiperSlide>
              <SwiperSlide>Slide 9</SwiperSlide>
            </Swiper>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
