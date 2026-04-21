import React from 'react'

const BottomFooter = () => {
  return (
    <div className="flex flex-col items-center gap-3 md:flex-row md:justify-between md:items-center">
      <h1 className="text-lime-400 font-bold text-2xl">FitZone</h1>
      <div className="items-end gap-10 text-gray-400 text-sm md:flex-row ">
        <span >About</span>
        <span >Classes</span>
        <span >Membership</span>
        <span >Support</span>
      </div>
    </div>
  )
}

export default BottomFooter