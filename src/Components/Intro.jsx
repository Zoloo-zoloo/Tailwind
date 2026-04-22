import React from 'react'
import IntroImg from '../assets/introImage.avif'
const Intro = ({ open }) => {
  return (
      <div className="w-full flex flex-col md:flex-row items-center md:py-8 px-4 sd:flex-col gap-5 pl-20 pr-20">
        <div className="w-full md:w-1/2 ">
          <div className="flex items-center gap-3 w-fit text-xl rounded-lg mb-5">
            <span className='text-lime-400 font-semibold'>Train smarter</span>
          </div>
  
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white">
            Transform your body with daily fitness programs
          </h1>
          <p className="text-gray-400 mt-4">
            Join powerful workout sessions, expert trainers and flexible plans designed for beginners and advanced members.
          </p>

          {/* button */}
           
          <div className="mt-8 flex gap-4 md:w-2/3 flex-row">
            <button onClick={() => open()} className=" bg-lime-400 px-8 py-4 rounded-xl text-2xl ">
                Start today
            </button>
            <button className=" border-2 border-gray-500 text-white px-8 py-4 rounded-xl text-2xl">
                View plans
            </button>
          </div>

          {/* image */}

        </div>
        <div className="w-full md:w-1/2 md:max-w-lg rounded-3xl overflow-hidden mx-auto">
          <img src={IntroImg} alt="" className="w-full aspect-square rounded-3xl object-cover" />
        </div>
      </div>
    );
}

export default Intro