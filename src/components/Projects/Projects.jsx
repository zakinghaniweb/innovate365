"use client";
import React, { useEffect, useState } from "react";
import "./Projects.css";
import AOS from "aos";
import Overlay from "../Overlay/Overlay";

const Projects = () => {
  const [showOverlay, setShowOverlay] = useState(false);
  console.log(showOverlay);
  useEffect(() => {
    AOS.init({
      duration: 700,
      once: false,
      anchorPlacement: "top-bottom",
    });
    AOS.refresh();
  }, []);
  return (
    <section id="projects" className="mt-[55px] pt-[55px] relative">
      <div
        data-aos="fade-top"
        data-aos-delay="500"
        data-aos-duration="1200 h-"
        className="w-[875px] h-[375px] rounded-full bg-[#005695] blur-[140px] absolute top-[0px] left-[50%] translate-x-[-50%] z-0"
      ></div>
      <div className="container mx-auto relative" data-aos="fade-top">
        <div className="w-full top-10">
          <h1 className="text-center text-[35px] md:text-[40px] text-white font-semibold mb-[16px]">
            Our Projects
          </h1>
          <p className="font-normal text-center text-gray-200 px-[20px] sm:px-0 text-[14px] sm:text-[16px] leading-[26px]">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur mollitia repellat quia harum iusto odit qui ipsam sint repellendus ad!
          </p>
        </div>
        <div className="flex flex-wrap md:gap-[20px] justify-center mt-[60px]">
          <div className="singlePortfolio">
            <div className="project-overlay">
              <button onClick={() => setShowOverlay(!showOverlay)}>
                View Project
              </button>
            </div>
            <div
              className="absolute inset-0 bg-cover bg-center opacity-[10%]"
              style={{ backgroundImage: "url('/images/project1.jpg')" }}
            ></div>
            <img
              className="projectLogo"
              src="images/logo2pdark.png"
              alt="Logo"
            />
            <div className="project-images">
              <div
                className="projectCard z-[2] ml-[0] mt-[0]"
                style={{ backgroundColor: "#7F0000" }}
              ></div>
              <div
                className="projectCard z-[3] ml-[60px] mt-[20px]"
                style={{ backgroundColor: "#005977" }}
              ></div>
              <div
                className="projectCard z-[4] ml-[120px] mt-[40px]"
                style={{ backgroundColor: "#009007" }}
              ></div>
            </div>
          </div>
          <div className="singlePortfolio">
            <div className="project-overlay">
              <button onClick={() => setShowOverlay(!showOverlay)}>
                View Project
              </button>
            </div>
            <div
              className="absolute inset-0 bg-cover bg-center opacity-[10%]"
              style={{ backgroundImage: "url('/images/project1.jpg')" }}
            ></div>
            <img
              className="projectLogo"
              src="images/logo2pdark.png"
              alt="Logo"
            />
            <div className="project-images">
              <div
                className="projectCard z-[2] ml-[0] mt-[0]"
                style={{ backgroundColor: "#7F0000" }}
              ></div>
              <div
                className="projectCard z-[3] ml-[60px] mt-[20px]"
                style={{ backgroundColor: "#005977" }}
              ></div>
              <div
                className="projectCard z-[4] ml-[120px] mt-[40px]"
                style={{ backgroundColor: "#009007" }}
              ></div>
            </div>
          </div>
          <div className="singlePortfolio">
            <div className="project-overlay">
              <button onClick={() => setShowOverlay(!showOverlay)}>
                View Project
              </button>
            </div>
            <div
              className="absolute inset-0 bg-cover bg-center opacity-[10%]"
              style={{ backgroundImage: "url('/images/project1.jpg')" }}
            ></div>
            <img
              className="projectLogo"
              src="images/logo2pdark.png"
              alt="Logo"
            />
            <div className="project-images">
              <div
                className="projectCard z-[2] ml-[0] mt-[0]"
                style={{ backgroundColor: "#7F0000" }}
              ></div>
              <div
                className="projectCard z-[3] ml-[60px] mt-[20px]"
                style={{ backgroundColor: "#005977" }}
              ></div>
              <div
                className="projectCard z-[4] ml-[120px] mt-[40px]"
                style={{ backgroundColor: "#009007" }}
              ></div>
            </div>
          </div>
          <div className="singlePortfolio">
            <div className="project-overlay">
              <button onClick={() => setShowOverlay(!showOverlay)}>
                View Project
              </button>
            </div>
            <div
              className="absolute inset-0 bg-cover bg-center opacity-[10%]"
              style={{ backgroundImage: "url('/images/project1.jpg')" }}
            ></div>
            <img
              className="projectLogo"
              src="images/logo2pdark.png"
              alt="Logo"
            />
            <div className="project-images">
              <div
                className="projectCard z-[2] ml-[0] mt-[0]"
                style={{ backgroundColor: "#7F0000" }}
              ></div>
              <div
                className="projectCard z-[3] ml-[60px] mt-[20px]"
                style={{ backgroundColor: "#005977" }}
              ></div>
              <div
                className="projectCard z-[4] ml-[120px] mt-[40px]"
                style={{ backgroundColor: "#009007" }}
              ></div>
            </div>
          </div>
          <div className="singlePortfolio">
            <div className="project-overlay">
              <button onClick={() => setShowOverlay(!showOverlay)}>
                View Project
              </button>
            </div>
            <div
              className="absolute inset-0 bg-cover bg-center opacity-[10%]"
              style={{ backgroundImage: "url('/images/project1.jpg')" }}
            ></div>
            <img
              className="projectLogo"
              src="images/logo2pdark.png"
              alt="Logo"
            />
            <div className="project-images">
              <div
                className="projectCard z-[2] ml-[0] mt-[0]"
                style={{ backgroundColor: "#7F0000" }}
              ></div>
              <div
                className="projectCard z-[3] ml-[60px] mt-[20px]"
                style={{ backgroundColor: "#005977" }}
              ></div>
              <div
                className="projectCard z-[4] ml-[120px] mt-[40px]"
                style={{ backgroundColor: "#009007" }}
              ></div>
            </div>
          </div>
          <div className="singlePortfolio">
            <div className="project-overlay">
              <button onClick={() => setShowOverlay(!showOverlay)}>
                View Project
              </button>
            </div>
            <div
              className="absolute inset-0 bg-cover bg-center opacity-[10%]"
              style={{ backgroundImage: "url('/images/project1.jpg')" }}
            ></div>
            <img
              className="projectLogo"
              src="images/logo2pdark.png"
              alt="Logo"
            />
            <div className="project-images">
              <div
                className="projectCard z-[2] ml-[0] mt-[0]"
                style={{ backgroundColor: "#7F0000" }}
              ></div>
              <div
                className="projectCard z-[3] ml-[60px] mt-[20px]"
                style={{ backgroundColor: "#005977" }}
              ></div>
              <div
                className="projectCard z-[4] ml-[120px] mt-[40px]"
                style={{ backgroundColor: "#009007" }}
              ></div>
            </div>
          </div>
        </div>
      </div>
      <Overlay
        showOverlay={showOverlay}
        closeOverlay={() => setShowOverlay(false)}
      />
    </section>
  );
};

export default Projects;
{
  /* <img src="images/card1.png" alt="page" />
              <img src="images/card1.png" alt="page" />
              <img src="images/card1.png" alt="page" /> */
}
