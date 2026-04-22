import React from 'react'
import { programs } from '../Data/Data'

const ProgramList = () => {
  return (
  <div className='mx-5'>
    <div className=' text-3xl text-white font-bold text-center py-4'>
        Our Programs
    </div>
    <span className="text-gray-400 flex justify-center">
        Choose the workout style that matches your goals
    </span>

    <div className="flex flex-col justify-center gap-6 md:flex-row py-6 md:w-full mx-auto px-4">
    {programs.map((program) => (
      <div
        key={program.id}
        className="bg-gray-900 transition duration-300 p-10 rounded-2xl shadow-lg w-full ">
        <span className="text-5xl block mb-4">{program.icon}</span>
        <h1 className="text-xl font-semibold text-white mb-2">{program.title}</h1>
        <p className="text-gray-400 text-sm">{program.description}</p>
      </div>
    ))}
    </div>
  </div>
  )
}
export default ProgramList