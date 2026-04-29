import React, { useState } from "react";
import { HiMenu, HiX } from "react-icons/hi";
import { menuLinks } from "../Data/Data";

const TopBar = ({ openSignUp, openLogin }) => {
  const [open, setOpen] = useState(false);

  return (
    <div className=" shadow-sm relative ">
      <div className="p-2 flex justify-between items-center relative">
        <div className="flex items-center gap-3">
          <h1 className='font-bold text-3xl text-lime-400 '>FitZone</h1>
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

        <div className="hidden md:flex gap-6 text-gray-400">
           {menuLinks.map((link, index) => (
            <a
              key={index}
              href={link.href}
              className="text-gray-200 hover:text-lime-400"
            >
              {link.name}
            </a>
          ))}
        </div>
        <div className="hidden md:flex gap-3">
          <button
            className="bg-lime-400 -semiboldfont w-25 h-10 rounded-xl"
            onClick={openSignUp}
          >
            Join Now
          </button>
          <button
            onClick={openLogin}
            className="py-2 bg-gray-900 -semiboldfont w-20 h-10 rounded-xl text-white"
          >
            Login
          </button>
        </div>
      </div>

      {open && (
      <div className="md:hidden absolute left-0 top-full p-4 flex flex-col gap-3 bg-gray-800 shadow-lg w-full rounded-lg z-10">
        {menuLinks.map((link, index) => (
          <a key={index} href={link.href} className="text-gray-200 hover:text-lime-400">
            {link.name}
          </a>
        ))}
        <button
          className="bg-lime-400 font-semibold w-full h-10 rounded-xl"
          onClick={openSignUp}
        >
          Join Now
        </button>
        <button
          onClick={openLogin}
          className="py-2 bg-gray-900 font-semibold w-full h-10 rounded-xl text-white"
        >
          Login
        </button>
      </div>
      )}
    </div>
  );
};

export default TopBar;