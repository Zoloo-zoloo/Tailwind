import React from 'react'
import { programs } from '../Data/Data'

const ProgramButton = ({ open, close }) => {
  if (!open) {
    return null
  }

  return (
    <div className="fixed inset-0 z-50 bg-black text-white overflow-y-auto pt-5">
      <div className="flex min-h-full flex-col px-6 py-4 md:px-40">
        <div className="flex items-center justify-between gap-4 flex-col md:flex-row mb-8 p-6">
          <div>
            <span className="text-xl font-semibold uppercase text-lime-400 ">
              My Programs
            </span>
            <h2 className="text-5xl font-bold">Your active fitness programs</h2>
            <p className="text-lg text-gray-400 my-5">
              Track the training plans your joined and stay consistent with your weekly routine.
            </p>
          </div>
          <button
            onClick={close}
            className="rounded-xl bg-lime-400 font-semibold px-6 py-3 text-lg text-black whitespace-nowrap"
          >
            Back to Home
          </button>
        </div>

        <div className="p-6">
          <div className="grid gap-6 md:grid-cols-2">
            <div className='flex-col bg-gray-900 md:p-8 rounded-3xl p-5 border border-gray-800'>
                <span className="text-lg text-lime-400 font-semibold mb-10">Active Programms</span>
                <h2 className='text-3xl my-3 font-bold'>Strenght training</h2>
                <p className='text-md text-gray-300 m-2'>Coach: Alex Morgan</p>
                <p className='text-md text-gray-300 m-2'>Schedule: Mon, Wed, Fri</p>
                <div className='text-lg text-gray-300 bg-gray-800 p-3 rounded-2xl '>Progress: 8 of 12 sessions completed</div>
            </div>
            <div className='flex-col bg-gray-900 md:p-8 rounded-3xl p-5 border border-gray-800'>
                <span className="text-lg text-lime-400 font-semibold mb-10">Active Programms</span>
                <h2 className='text-3xl my-3 font-bold'>Yoga class</h2>
                <p className='text-md text-gray-300 m-2'>Coach: Sophie Lee</p>
                <p className='text-md text-gray-300 m-2'>Schedule: Tue, Thu</p>
                <div className='text-lg text-gray-300 bg-gray-800 p-3 rounded-2xl '>Progress: 3 of 12 sessions completed</div>
           </div>
          </div>
        </div>
        <div className="p-6">
            <h1 className="text-2xl font-bold text-white mb-4">Available Programs</h1>
          <div className="grid gap-6 lg:grid-cols-3">
            {programs.map((program, index) => (
              <div
                key={index}
                className="rounded-4xl border border-white/10 bg-gray-900 p-6 shadow-2xl"
              >
                <div className="text-5xl mb-4">{program.icon}</div>
                <h3 className="text-xl font-semibold text-white mb-3">
                  {program.title}
                </h3>
                <p className="text-md text-gray-400">{program.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProgramButton