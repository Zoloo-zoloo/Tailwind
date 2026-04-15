import React from 'react'
import TopBar from '../Components/TopBar'
import Intro from '../Components/Intro'
import ProgramList from '../Components/ProgramList'
import TrainerSection from '../Components/TrainerSection'
import BottomFooter from '../Components/BottomFooter'

const FitnessPage = () => {
  return (
    <div>
        <TopBar/>
        <Intro/>
        <ProgramList/>
        <TrainerSection/>
        <BottomFooter/>
    </div>
  )
}

export default FitnessPage