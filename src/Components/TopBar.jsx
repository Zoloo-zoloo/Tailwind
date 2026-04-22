import React, { useState } from "react";
import { HiMenu, HiX } from "react-icons/hi";

const TopBar = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className=" shadow-sm relative ">
      <div className="p-2 flex justify-between items-center relative">
        <div className="flex items-center gap-3">
          <h1 className='md:ml-50 font-bold text-2xl text-lime-400 '>FitZone</h1>
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
          <div className="absolute top-14 right-3 left-3 black p-4 flex flex-col gap-4 text-sm md:hidden bg-gray-800 rounded-lg">
            <a href="#" className="text-white">Home</a>
            <a href="#" className="text-white">Programs</a>
            <a href="#" className="text-white">Trainers</a>
            <a href="#" className="text-white">Pricing</a>
            <a href="#" className="text-white">Contact</a>
          </div>
        )}
      
        <div className="hidden md:flex gap-6 text-gray-400">
          <a href="#">Home</a>
          <a href="#">Program</a>
          <a href="#">Trainer</a>
          <a href="#">Pricing</a>
          <a href="#">Contact</a>
        </div>

        <div className="hidden mr-50 md:flex gap-4 ">
          <button className="bg-lime-400 font-semibold w-25 h-10 rounded-xl">Join Now</button>
        </div>
      </div>
    </div>
  );
};

export default TopBar;