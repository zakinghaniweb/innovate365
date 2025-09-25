import React from 'react'
import './Projects.css'

const Projects = () => {
  return (
    <section id="projects" className="mt-[85px]">
      <div className="container mx-auto px-[70px]">
        <div className="max-w-[445px] mx-auto">
          <h1 className="text-[40px] text-white font-semibold text-center">
            Our Projects
          </h1>
          <p className="font-normal text-gray-200 text-[16px] text-center leading-[26px]">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </p>
        </div>
        <div className="flex flex-wrap justify-between mt-[60px]">
          <div className="singlePortfolio">
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
                className="projectCard left-[-60px] top-[0] z-[2]"
                style={{ backgroundColor: "#7F0000" }}
              ></div>
              <div
                className="projectCard left-[-20px] top-[20px] z-[3]"
                style={{ backgroundColor: "#005977" }}
              ></div>
              <div
                className="projectCard left-[20px] top-[40px] z-[4]"
                style={{ backgroundColor: "#009007" }}
              ></div>
              {/* <img src="images/card1.png" alt="page" />
              <img src="images/card1.png" alt="page" />
              <img src="images/card1.png" alt="page" /> */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Projects