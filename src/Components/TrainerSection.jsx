import React from 'react'
import { trainers } from '../Data/Data'
const TrainerSection = () => {
  return (
    <div className="py-10 mx-5">
     <h2 className="text-3xl font-bold text-white text-center py-4">
     Meet Our Trainers
     </h2>
     <p className="text-gray-400 text-center">
      Learn from experienced and motivating coaches
     </p>
     <div className="flex flex-col justify-center gap-6 md:flex-row py-6 w-full mx-auto px-4">
     {trainers.map((trainer) => (
      <div className="bg-gray-900 rounded-2xl shadow-lg w-full md:flex-1 ">

        <img src={trainer.image}alt={trainer.name}className="w-full h-64 md:h-100  object-cover"/>

        <div className="p-6">
          <h1 className="text-lg font-semibold text-white">{trainer.name}</h1>
          <h3 className="text-sm text-lime-400">{trainer.specialty}</h3>
        </div>
      </div>
    ))}
  </div>
</div>
  )
}

export default TrainerSection