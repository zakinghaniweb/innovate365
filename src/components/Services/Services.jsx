"use client";
import React, { useEffect } from "react";
import "./Services.css";
import AOS from "aos";

const Services = () => {
  useEffect(() => {
    AOS.init({
      duration: 400,
      once: false,
      anchorPlacement: "top-bottom",
    });
    AOS.refresh();
  }, []);
  return (
    <section id="service" className="mt-[140px]">
      <div className="container mx-auto lg:px-[110px] relative">
        <div
          data-aos="fade-top"
          className="w-[755px] h-[575px] rounded-full bg-[#005695]/70 blur-[140px] absolute top-[-20px] left-[30px] z-0"
        ></div>
        <div
          data-aos="fade-left"
          className="w-[720px] h-[575px] rounded-full bg-[#610082]/70 blur-[140px] absolute top-[-20px] right-[30px] z-0"
        ></div>
        <div
          data-aos="fade-right"
          className="w-[475px] h-[375px] rounded-full bg-[#610082]/90 blur-[140px] absolute top-[895px] left-[0px] z-0"
        ></div>
        <div
          data-aos="fade-right"
          className="w-[475px] h-[375px] rounded-full bg-[#005695]/70 blur-[140px] absolute top-[1195px] right-[0px] z-0"
        ></div>
        <div className="flex flex-col items-center xl:items-start xl:flex-row justify-between relative">
          <div
            className="w-full xl:max-w-[445px] xl:sticky top-10 self-start"
            data-aos="fade-up"
          >
            <h1 className="text-[35px] md:text-[40px] text-center xl:text-left text-white font-semibold mb-[16px]">
              Our Services
            </h1>
            <p className="font-normal text-center xl:text-left text-gray-200 px-[20px] sm:px-0 text-[14px] sm:text-[16px] leading-[26px]">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis
              nihil illum doloribus rem distinctio, accusantium explicabo,
              beatae neque consectetur non possimus
            </p>
          </div>
          <div className="flex flex-col gap-[40px] xl:gap-[60px] xl:mt-0 mx-[20px] mt-[50px] ">
            <div data-aos="fade-left">
              <div className="single-service">
                <img src="images/UI.png" alt="Service" />
                <h2>UI/UX Web Design</h2>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Facilis nihil illum doloribus rem distinctio, accusantium
                  explicabo, beatae neque consectetur non possimus
                </p>
              </div>
            </div>
            <div data-aos="fade-left">
              <div className="single-service">
                <img src="images/UI.png" alt="Service" />
                <h2>Web Development</h2>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Facilis nihil illum doloribus rem distinctio, accusantium
                  explicabo, beatae neque consectetur non possimus
                </p>
              </div>
            </div>
            <div data-aos="fade-left">
              <div className="single-service">
                <img src="images/UI.png" alt="Service" />
                <h2>Search Engine Optimization (SEO)</h2>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Facilis nihil illum doloribus rem distinctio, accusantium
                  explicabo, beatae neque consectetur non possimus
                </p>
              </div>
            </div>
            <div data-aos="fade-left">
              <div className="single-service">
                <img src="images/UI.png" alt="Service" />
                <h2>Motion Graphics</h2>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Facilis nihil illum doloribus rem distinctio, accusantium
                  explicabo, beatae neque consectetur non possimus
                </p>
              </div>
            </div>
            <div data-aos="fade-left">
              <div className="single-service">
                <img src="images/UI.png" alt="Service" />
                <h2>UI/UX Web Design</h2>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Facilis nihil illum doloribus rem distinctio, accusantium
                  explicabo, beatae neque consectetur non possimus
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
