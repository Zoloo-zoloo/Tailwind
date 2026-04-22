import React, { useState } from 'react'
import TopBar from '../Components/TopBar'
import Intro from '../Components/Intro'
import ProgramList from '../Components/ProgramList'
import TrainerSection from '../Components/TrainerSection'
import BottomFooter from '../Components/BottomFooter'
import ProgrammingTracks from '../Components/ProgrammingTracks'


const FitnessPage = () => {
  const [isOpen, setIsOpen] = useState(false);
  console.log(isOpen);
  return (
    <div>
        <TopBar/>
        <ProgrammingTracks state={isOpen} close={() => setIsOpen(false)} />
        <Intro open={() => setIsOpen(true)}/>
        <ProgramList/>
        <TrainerSection/>
        <BottomFooter/>
    </div>
  )
}

export default FitnessPage