"use client";
import React, { useEffect } from "react";
import GradientText from "../GradientText";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Navigation, Pagination } from "swiper/modules";
import "./Team.css";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa6";
import AOS from "aos";

const Team = () => {
    useEffect(() => {
      AOS.init({
        duration: 700,
        once: false,
        anchorPlacement: "top-bottom",
      });
      AOS.refresh();
    }, []);
  return (
    <section id="team" className="mt-[55px] pt-[55px]">
      <div className="container mx-auto px-[110px] relative">
        <div
          data-aos="fade-top"
          data-aos-delay="700"
          data-aos-duration="1000"
          className="w-[783px] h-[708px] rounded-full bg-[#005695]/70 blur-[140px] absolute top-[100px] left-[30%] translate-x-[-50%] z-0"
        ></div>
        <div
          data-aos="fade-top"
          data-aos-delay="700"
          data-aos-duration="1000"
          className="w-[307px] h-[277px] rounded-full bg-[#9100C5] blur-[140px] absolute top-[150px] left-[70%] translate-x-[-50%] z-0"
        ></div>
        <div className="max-w-[445px] relative" data-aos="fade-top">
          <h1 className="text-[40px] text-white font-semibold">Team Members</h1>
          <p className="font-normal text-gray-200 text-[16px] leading-[26px]">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </p>
        </div>
        <div className="mt-[70px]" data-aos="fade-top">
          <div className="flex gap-[30px] mb-[30px] ml-[15px]">
            <div className="swiper-button-prev">
              <FaAngleLeft />
            </div>
            <div className="swiper-button-next">
              <FaAngleRight />
            </div>
          </div>
          <div className="flex overflow-hidden pb-[70px]">
            <Swiper
              slidesPerView={3}
              spaceBetween={30}
              loop={true}
              pagination={{ clickable: true }}
              navigation={{
                nextEl: ".swiper-button-next",
                prevEl: ".swiper-button-prev",
              }}
              modules={[Pagination, Navigation]}
              className="mySwiper relative"
            >
              <SwiperSlide>
                <div className="singleMember">
                  <div className="relative flex flex-col justify-center items-center w-[380px] h-[457px] rounded-xl bg-gradient-to-b from-[#FFFFFF]/20 to-[#2B2B2B]/20 border-[1px] border-[#FFFFFF] backdrop-blur-md px-[30px]">
                    <div className="w-[100px] h-[100px]">
                      <img src="images/unknown.png" alt="user" />
                    </div>
                    <h3 className="text-white text-xl font-semibold mt-[12px]">
                      User
                    </h3>
                    <GradientText
                      colors={[
                        "#FF9BF8",
                        "#97BFFF",
                        "#FF9BF8",
                        "#97BFFF",
                        "#FF9BF8",
                      ]}
                      animationSpeed={3}
                      showBorder={false}
                      className="bg-transparent !rounded-none !backdrop-blur-none !mt-[5px]"
                    >
                      CEO of Company
                    </GradientText>
                    <p className="font-medium text-[16px] text-[#BDBDBD] max-w-[317px] text-center mt-[15px]">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      labore labore
                    </p>
                    <Link
                      href={"#"}
                      className="px-[24px] py-[14px] border-2 border-white rounded-md text-white font-semibold text-[15px] mt-[34px]"
                    >
                      Read More
                    </Link>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="singleMember">
                  <div className="relative flex flex-col justify-center items-center w-[380px] h-[457px] rounded-xl bg-gradient-to-b from-[#FFFFFF]/20 to-[#2B2B2B]/20 border-[1px] border-[#FFFFFF] backdrop-blur-md px-[30px]">
                    <div className="w-[100px] h-[100px]">
                      <img src="images/unknown.png" alt="user" />
                    </div>
                    <h3 className="text-white text-xl font-semibold mt-[12px]">
                      User
                    </h3>
                    <GradientText
                      colors={[
                        "#FF9BF8",
                        "#97BFFF",
                        "#FF9BF8",
                        "#97BFFF",
                        "#FF9BF8",
                      ]}
                      animationSpeed={3}
                      showBorder={false}
                      className="bg-transparent !rounded-none !backdrop-blur-none !mt-[5px]"
                    >
                      CEO of Company
                    </GradientText>
                    <p className="font-medium text-[16px] text-[#BDBDBD] max-w-[317px] text-center mt-[15px]">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      labore labore
                    </p>
                    <Link
                      href={"#"}
                      className="px-[24px] py-[14px] border-2 border-white rounded-md text-white font-semibold text-[15px] mt-[34px]"
                    >
                      Read More
                    </Link>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="singleMember">
                  <div className="relative flex flex-col justify-center items-center w-[380px] h-[457px] rounded-xl bg-gradient-to-b from-[#FFFFFF]/20 to-[#2B2B2B]/20 border-[1px] border-[#FFFFFF] backdrop-blur-md px-[30px]">
                    <div className="w-[100px] h-[100px]">
                      <img src="images/unknown.png" alt="user" />
                    </div>
                    <h3 className="text-white text-xl font-semibold mt-[12px]">
                      User
                    </h3>
                    <GradientText
                      colors={[
                        "#FF9BF8",
                        "#97BFFF",
                        "#FF9BF8",
                        "#97BFFF",
                        "#FF9BF8",
                      ]}
                      animationSpeed={3}
                      showBorder={false}
                      className="bg-transparent !rounded-none !backdrop-blur-none !mt-[5px]"
                    >
                      CEO of Company
                    </GradientText>
                    <p className="font-medium text-[16px] text-[#BDBDBD] max-w-[317px] text-center mt-[15px]">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      labore labore
                    </p>
                    <Link
                      href={"#"}
                      className="px-[24px] py-[14px] border-2 border-white rounded-md text-white font-semibold text-[15px] mt-[34px]"
                    >
                      Read More
                    </Link>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="singleMember">
                  <div className="relative flex flex-col justify-center items-center w-[380px] h-[457px] rounded-xl bg-gradient-to-b from-[#FFFFFF]/20 to-[#2B2B2B]/20 border-[1px] border-[#FFFFFF] backdrop-blur-md px-[30px]">
                    <div className="w-[100px] h-[100px]">
                      <img src="images/unknown.png" alt="user" />
                    </div>
                    <h3 className="text-white text-xl font-semibold mt-[12px]">
                      User
                    </h3>
                    <GradientText
                      colors={[
                        "#FF9BF8",
                        "#97BFFF",
                        "#FF9BF8",
                        "#97BFFF",
                        "#FF9BF8",
                      ]}
                      animationSpeed={3}
                      showBorder={false}
                      className="bg-transparent !rounded-none !backdrop-blur-none !mt-[5px]"
                    >
                      CEO of Company
                    </GradientText>
                    <p className="font-medium text-[16px] text-[#BDBDBD] max-w-[317px] text-center mt-[15px]">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      labore labore
                    </p>
                    <Link
                      href={"#"}
                      className="px-[24px] py-[14px] border-2 border-white rounded-md text-white font-semibold text-[15px] mt-[34px]"
                    >
                      Read More
                    </Link>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="singleMember">
                  <div className="relative flex flex-col justify-center items-center w-[380px] h-[457px] rounded-xl bg-gradient-to-b from-[#FFFFFF]/20 to-[#2B2B2B]/20 border-[1px] border-[#FFFFFF] backdrop-blur-md px-[30px]">
                    <div className="w-[100px] h-[100px]">
                      <img src="images/unknown.png" alt="user" />
                    </div>
                    <h3 className="text-white text-xl font-semibold mt-[12px]">
                      User
                    </h3>
                    <GradientText
                      colors={[
                        "#FF9BF8",
                        "#97BFFF",
                        "#FF9BF8",
                        "#97BFFF",
                        "#FF9BF8",
                      ]}
                      animationSpeed={3}
                      showBorder={false}
                      className="bg-transparent !rounded-none !backdrop-blur-none !mt-[5px]"
                    >
                      CEO of Company
                    </GradientText>
                    <p className="font-medium text-[16px] text-[#BDBDBD] max-w-[317px] text-center mt-[15px]">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      labore labore
                    </p>
                    <Link
                      href={"#"}
                      className="px-[24px] py-[14px] border-2 border-white rounded-md text-white font-semibold text-[15px] mt-[34px]"
                    >
                      Read More
                    </Link>
                  </div>
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Team;
