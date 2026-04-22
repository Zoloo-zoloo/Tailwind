import React from "react";
import { programmingCourses } from "../data/data";
programmingCourses;
const ProgrammingTracks = ({ state, close }) => {
  if (!state) {
    return null;
  }
  return (
    <div className="fixed top-40 right-0 left-0 z-50 flex justify-center items-center  px-4 py-8  ">
      <div className="max-h-[90vh] w-full max-w-5xl overflow-y-auto bg-gray-800 p-8 flex  flex-col justify-center items-center rounded-2xl">
        <div className="w-full mb-6 flex items-start justify-between gap-2">
          <h1 className="text-xl font-semibold text-lime-400 ">PROGRAMMING TRACKS</h1>
          <button onClick={close} className="bg-gray-500 font-semibold text-white py-2 px-4 rounded-full">Close</button>
        </div>
        <div> 
            <p className="text-3xl text-white ">Start coding with structured begginer-friendly lessons</p>
            <span className="text-gray-400">Here is a demo overview of programming courses studens can start today, form web basic to React projects</span>
          </div>
        <div className="flex flex-row flex-wrap gap-5">
          {programmingCourses.map((item) => (
            <div
              key={item.id}
              className="border rounded-2xl border-indigo-100 w-[15vw] p-4"
            >
              <p>{item.level}</p>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
              <p>{item.duration}</p>
              <p>{item.lessons}</p>
              <p>{item.highlights}</p>
              <p></p>
              <div>
                {item.highlights.map((high, id) => (
                  <p>{high}</p>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProgrammingTracks;