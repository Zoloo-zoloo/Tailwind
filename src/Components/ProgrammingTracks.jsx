import React from "react";
import { programmingCourses } from "../Data/Data";

const ProgrammingTracks = ({ state, close }) => {
  if (!state) {
    return null;
  }
  return (
    <div className="fixed top-0 right-0 left-0 z-50 flex justify-center items-center  px-4 py-8 bg-black/50 ">
      <div className="max-h-[90vh] w-full max-w-5xl overflow-y-auto bg-white p-8 flex  flex-col justify-center items-center">
        <div className="w-full mb-6 flex items-start justify-between gap-4">
          <p>Programming Tracks</p>
          <button onClick={close}> Close</button>
        </div>
        <div className="flex flex-row flex-wrap gap-5">
          {programmingCourses.map((item) => (
            <div
              key={item.id}
              className="border rounded-2xl border-indigo-100 w-[15vw] p-4"
            >
              <p>{item.duration}</p>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
              <p>{item.lessons}</p>
              <p>{item.schedule}</p>
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