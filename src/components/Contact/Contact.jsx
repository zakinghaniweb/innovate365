"use client"
import React from 'react'
import "./Contact.css"
import DarkVeil from '../DarkVeil';

const Contact = () => {
  return (
    <div className="mt-[100px] h-[351px] flex items-center bg-transparent border-t-[1px] border-[#09077d5e]">
      <DarkVeil />
      <div className="container mx-auto p-[50px]">
        <div className="w-full h-full">
          <h2 className="font-semibold text-[30px] text-white">
            Stay connected
          </h2>
          <p className="font-normal text-[18px] text-white ">
            Stay connected with us by receiving our newsletters
          </p>
          <div className="mt-[30px] flex w-[415px] h-[66px] border-[1px] border-[#C9C9C9] bg-[#000000]/12 items-center">
            <input
              type="text"
              className="outline-none w-full pl-[19px] py-[21px] font-medium text-white text-[16px]"
              placeholder="Enter your email"
            />
            <button className="w-[80px] h-[47px] cursor-pointer font-semibold text-[14px] text-white py-[10px] px-[22px] bg-gradient-to-r from-[#0059BA] to-[#75009A] mr-[8px]">
              Send
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact