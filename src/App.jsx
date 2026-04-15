import React from 'react'
import TopBar from './Components/TopBar'
import Intro from './Components/Intro'
import ProgramList from './Components/ProgramList'
import TrainerSection from './Components/TrainerSection'
import BottomFooter from './Components/BottomFooter'

const App = () => {
  return (
    <div className='bg-black'>
      <TopBar />
      <Intro />
      <ProgramList />
      <TrainerSection />
      <BottomFooter/>
    </div>
  )
}

export default App