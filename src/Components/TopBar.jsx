import React, { useState } from "react";
import { HiMenu, HiX } from "react-icons/hi";
import { menuLinks } from "../Data/Data";

const TopBar = ({ openSignUp, openLogin }) => {
  const [open, setOpen] = useState(false);

  return (
    <div className=" shadow-sm relative ">
      <div className="p-2 flex justify-between items-center relative">
        <div className="flex items-center gap-3">
          <h1 className='md:ml-20 font-bold text-3xl text-lime-400 '>FitZone</h1>
        </div>

        <div className="md:hidden absolute right-3 top-3">
          {open ? (
            <HiX
              className="w-8 h-8 text-white"
              onClick={() => setOpen(false)}
            />
          ) : (
            <HiMenu
              className="w-8 h-8 text-white"
              onClick={() => setOpen(true)}
            />
          )}
        </div>

        {open && (
        <div className="md:hidden px-4 pb-4 flex flex-col gap-3">
          {menuLinks.map((link, index) => (
            <a key={index} href={link.href} className="text-gray-700">
              {link.name}
            </a>
          ))}
        </div>
        )}
      
        <div className="hidden md:flex gap-6 text-gray-400">
           {menuLinks.map((link, index) => (
            <a
              key={index}
              href={link.href}
              className="text-gray-700 hover:text-lime-400"
            >
              {link.name}
            </a>
          ))}
        </div>

        <div className="hidden mr-20 md:flex gap-4 ">
          <button className="bg-lime-400 -semiboldfont w-25 h-10 rounded-xl">Join Now</button>
        </div>
        <div className="hidden md:flex gap-3">
          <button
            className="px-4 py-2 bg-white rounded-lg"
            onClick={openSignUp}
          >
            Sign Up
          </button>
          <button
            onClick={openLogin}
            className="px-4 py-2 bg-indigo-600 text-white rounded-lg"
          >
            Login
          </button>
        </div>
      </div>
    </div>
  );
};

export default TopBar;