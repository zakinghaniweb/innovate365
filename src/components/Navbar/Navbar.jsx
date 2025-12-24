"use client"
import Link from "next/link";
import React, { useState } from "react";
import { FaBarsStaggered } from "react-icons/fa6";
import { RiCloseLargeFill } from "react-icons/ri";

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false)
  return (
    <nav
      id="navbar"
      className="z-[99] bg-transparent border-b-[1px] border-[#FFFFFF]/50 absolute w-full"
    >
      <div
        className={`absolute w-full lg:w-[300px] h-screen bg-white p-[30px] ${
          showMenu ? "right-0" : "right-[-100%]"
        }  duration-200 top-0`}
      >
        <div className="flex justify-between items-start border-b-[2px] border-dashed border-black">
          <Link href={"#"} className="pt-[22px] pb-[20px] w-[200px]">
            <img src="images/logo2p.png" alt="Logo" />
          </Link>
          <button
            onClick={() => setShowMenu(false)}
            className="cursor-pointer text-2xl mt-[5px] hover:rotate-90 duration-300"
          >
            <RiCloseLargeFill />
          </button>
        </div>
        <ul className="flex flex-col gap-[20px] mt-[20px]">
          <li>
            <Link
              href={"#"}
              className="font-bold text-[24px] hover:ml-[5px] duration-100"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              href={"#"}
              className="font-bold text-[24px] hover:ml-[5px] duration-100"
            >
              About
            </Link>
          </li>
          <li>
            <Link
              href={"#"}
              className="font-bold text-[24px] hover:ml-[5px] duration-100"
            >
              Portfolio
            </Link>
          </li>
          <li>
            <Link
              href={"#"}
              className="font-bold text-[24px] hover:ml-[5px] duration-100"
            >
              Members
            </Link>
          </li>
          <li>
            <Link
              href={"#"}
              className="font-bold text-[24px] hover:ml-[5px] duration-100"
            >
              Services
            </Link>
          </li>
        </ul>
      </div>
      <div className="container mx-auto px-[20px]">
        <div className="flex justify-between items-center py-[22px]">
          <div className="max-w-[70px]">
            <Link href={"#"} className="w-[200px] inline-block">
              <img src="images/logo2pdark.png" alt="Logo" />
            </Link>
          </div>
          <div className="flex gap-[27px]">
            <button className="hidden md:inline-block cursor-pointer py-[13px] px-[20px] bg-gradient-to-r from-[#75009A] to-[#0059BA] rounded-lg font-semibold text-white text-[14px]">
              Hire Us
            </button>
            <button
              onClick={() => setShowMenu(!showMenu)}
              className="cursor-pointer flex items-center gap-[12px] py-[13px] px-[20px] rounded-lg font-semibold text-white text-[14px]"
            >
              <FaBarsStaggered />
              Menu
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
