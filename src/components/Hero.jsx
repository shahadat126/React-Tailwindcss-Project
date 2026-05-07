import React from "react";
import assets from "../assets/assets";

const Hero = () => {
  return (
    <div
      id="hero"
      className="flex flex-col items-center gap-6  py-20 px-4 sm:px-12  text-center w-full text-gray-700 dark:text-white overflow-hidden "
    >
      <div className="inline-flex items-center justify-between gap-2 border border-gray-300 p-2 pr-12  rounded-full ">
        <img
          src={assets.optimum}
          className="w-8 sm:w-10 rounded-full p-  "
          alt=""
        />
        <p className="text-medium p-2text-xs">Trusted by 10k+ people</p>
        
      </div>
      <h1 className="text-4xl sm:text-4xl md:text-6xl xl:text-[84px]  xl:leading-23.75 max-w-5xl font-medium ">
        Turning imagination into{" "}
        <span className="bg-gradient-to-r from-[#5044E5] to-[#4d8cea]  bg-clip-text [-webkit-background-clip:text]  text-transparent ">
          digital
        </span>
        impact.
      </h1>
      <p className=" text-sm sm:text-lg font-medium text-gray-500 dark:text-white/75 sm:max-w-lg pb-3 ">
        Creating meaningful connections and turning big ideas into interactive
        digital experiences.
      </p>
      <div className="relative">
        <img src={assets.logo2} alt="" className="w-full max-w-6xl" />
        <img src={assets.bg_img} alt="" className="" />
        
      </div>
    </div>
  );
};

export default Hero;
