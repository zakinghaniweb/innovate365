"use client"
import React from 'react'
import './Projects.css'

const Projects = () => {
  return (
    <section id="projects" className="mt-[85px] relative">
      <div className="w-[875px] h-[375px] rounded-full bg-[#005695] blur-[140px] absolute top-[0px] left-[50%] translate-x-[-50%] z-0"></div>
      <div className="container mx-auto relative">
        <div className="max-w-[445px] mx-auto">
          <h1 className="text-[40px] text-white font-semibold text-center">
            Our Projects
          </h1>
          <p className="font-normal text-gray-200 text-[16px] text-center leading-[26px]">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </p>
        </div>
        <div className="flex flex-wrap gap-[20px] justify-center mt-[60px]">
          <div className="singlePortfolio">
            <div className="project-overlay">
              <button>View Project</button>
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
              <button>View Project</button>
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
              <button>View Project</button>
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
              <button>View Project</button>
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
    </section>
  );
}

export default Projects
              {/* <img src="images/card1.png" alt="page" />
              <img src="images/card1.png" alt="page" />
              <img src="images/card1.png" alt="page" /> */}