import React, { useState } from "react";
import assets from "../assets/assets";
import { Menu, X } from "lucide-react";
import ToggleTheme from "./ToggleTheme";

const Navbar = ({ theme, setTheme }) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  return (
    <div className="flex items-center justify-between px-4 sm:px-12 lg:px-24 xl:px-40 py-4 sticky top-0 z-20   font-medium bg-white dark:bg-gray-900">
      <img
        src={theme === "light" ? assets.logo2 : assets.logo}
        className="w-24 h-10 sm:w-40  rounded-full text-white "
        alt="picture"
      />
      <div
        className={`fixed top-0 right-0 h-full w-60 bg-primary text-white flex flex-col gap-5 pt-20 px-6 transition-transform duration-300 sm:static sm:h-auto sm:w-auto sm:bg-transparent sm:text-gray-700 dark:sm:text-white sm:flex-row sm:items-center sm:pt-0 sm:px-0 
        ${sidebarOpen ? "translate-x-0" : "translate-x-full sm:translate-x-0"} `}  >
        <X
          onClick={() => setSidebarOpen(false)}
          className="w-8 absolute sm:hidden right-4 top-4 mt-4 ml-1.5"
        />
        {/* <img src={assets.cross} alt=""  className="w-5  absolute right-4 top-4 bg-yellow-500"/> */}
        <a onClick={()=> sidebarOpen(false)} href="home" className="sm:hover:border-b ">
          Home
        </a>
        <a onClick={()=> sidebarOpen(false)} href="services" className="sm:hover:border-b hover:bg-purple">
          Services
        </a>
        <a onClick={()=> sidebarOpen(false)} href="Our-work" className="sm:hover:border-b">
          Our Work
        </a>
        <a onClick={()=> sidebarOpen(false)} href="contact-us" className="sm:hover:border-b">
          Contact Us
        </a>
      </div>
      <div className="flex items-center gap-2 sm:gap-2">
          <ToggleTheme theme={theme} setTheme={setTheme}/>
        <Menu onClick={() => setSidebarOpen(true)} className="w-6 sm:hidden" />
        <a
          href="contact-us"
          className="text-sm max-sm:hidden flex items-center bg-primary gap-2 text-white px-6 py-2 rounded-full cursor-pointer hover:scale-103 transition-all"
        >
          Connect <img src={assets.arrow} width={14} alt="" />
        </a>
      </div>
    </div>
  );
};

export default Navbar;
