import React from 'react'

const BottomFooter = () => {
  return (
    <div className="flex flex-col items-center gap-3 md:flex-row md:justify-between md:items-center m-5">
      <h1 className="text-lime-400 font-bold text-2xl">FitZone</h1>
      <div className="flex items-end gap-5 text-gray-400 text-sm md:flex-row  ">
        <a href="#" className="text-white">About</a>
        <a href="#" className="text-white">Classes</a>
        <a href="#" className="text-white">Membership</a>
        <a href="#" className="text-white">Support</a>
      </div>
    </div>
  )
}

export default BottomFooter