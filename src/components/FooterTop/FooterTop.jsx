
import Link from "next/link";
import React from "react";

const FooterTop = () => {
  return (
    <div className="py-[65px] bg-[#00021C]">
      <div className="container mx-auto">
        <div className="flex flex-col">
          <div>
            <Link href={"#"} className="w-[200px] inline-block">
              <img src="images/logo2pdark.png" alt="Logo" />
            </Link>
            <p className="font-semibold text-[16px] text-white mt-[5px]">
              Let’s grow your <span className="text-[#B742FF]">Buisness</span>{" "}
              together
            </p>
          </div>
          <div className="flex mt-[50px] gap-[150px] items-stretch">
            <div className="w-[220px]">
              <h3 className="font-semibold text-[20px] text-white">
                Our Services
              </h3>
              <ul className="[&>li>a]:text-[#E3E3E3] [&>li>a]:block [&>li>a]:duration-150 [&>li>a:hover]:ml-[5px] mt-[15px] flex flex-col gap-[18px]">
                <li>
                  <Link href={"#"}>Web Design</Link>
                </li>
                <li>
                  <Link href={"#"}>Web Development</Link>
                </li>
                <li>
                  <Link href={"#"}>SEO</Link>
                </li>
                <li>
                  <Link href={"#"}>E-commerce Development</Link>
                </li>
                <li>
                  <Link href={"#"}>Full Stack Web Application</Link>
                </li>
                <li>
                  <Link href={"#"}>UI/UX Design</Link>
                </li>
                <li>
                  <Link href={"#"}>Motion Graphics</Link>
                </li>
              </ul>
            </div>
            <div className="w-[1px] bg-[#000e67]"></div>
            <div className="w-[220px]">
              <h3 className="font-semibold text-[20px] text-white">Company</h3>
              <ul className="[&>li>a]:text-[#E3E3E3] [&>li>a]:block [&>li>a]:duration-150 [&>li>a:hover]:ml-[5px] mt-[15px] flex flex-col gap-[18px]">
                <li>
                  <Link href={"#"}>Services</Link>
                </li>
                <li>
                  <Link href={"#"}>Projects</Link>
                </li>
                <li>
                  <Link href={"#"}>Tools We Use</Link>
                </li>
                <li>
                  <Link href={"#"}>Team Members</Link>
                </li>
                <li>
                  <Link href={"#"}>Customer Reviews</Link>
                </li>
              </ul>
            </div>
            <div className="w-[1px] bg-[#000e67]"></div>
            <div className="w-[220px]">
              <h3 className="font-semibold text-[20px] text-white">
                Our Services
              </h3>
              <ul className="[&>li>a]:text-[#E3E3E3] [&>li>a]:block [&>li>a]:duration-150 [&>li>a:hover]:ml-[5px] mt-[15px] flex flex-col gap-[18px]">
                <li>
                  <Link href={"#"}>Web Design</Link>
                </li>
                <li>
                  <Link href={"#"}>Web Development</Link>
                </li>
                <li>
                  <Link href={"#"}>SEO</Link>
                </li>
                <li>
                  <Link href={"#"}>E-commerce Development</Link>
                </li>
                <li>
                  <Link href={"#"}>Full Stack Web Application</Link>
                </li>
                <li>
                  <Link href={"#"}>UI/UX Design</Link>
                </li>
                <li>
                  <Link href={"#"}>Motion Graphics</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FooterTop;
