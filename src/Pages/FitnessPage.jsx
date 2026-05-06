import React, { useState } from 'react'
import TopBar from '../Components/TopBar'
import Intro from '../Components/Intro'
import ProgramList from '../Components/ProgramList'
import TrainerSection from '../Components/TrainerSection'
import BottomFooter from '../Components/BottomFooter'
import ProgrammingTracks from '../Components/StartTodayButton'
import AuthModal from '../Components/AuthModal'
import ProgramButton from '../Components/ProgramButton'

const FitnessPage = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [authOpen, setAuthOpen] = useState(false)
  const [programsOpen, setProgramsOpen] = useState(false)

  return (
    <div>
      <TopBar
        openSignUp={() => setAuthOpen('signup')}
        openLogin={() => setAuthOpen('login')}
        openPrograms={() => setProgramsOpen(true)}
      />
      <ProgramButton open={programsOpen} close={() => setProgramsOpen(false)} />
      <ProgrammingTracks state={isOpen} close={() => setIsOpen(false)} />
      <AuthModal
        mode={authOpen}
        open={authOpen}
        close={() => setAuthOpen(false)}
        switchMode={() =>
          setAuthOpen((currentMode) =>
            currentMode === 'signup' ? 'login' : 'signup',
          )
        }
      />
      <Intro open={() => setIsOpen(true)} />
      <ProgramList />
      <TrainerSection />
      <BottomFooter />
    </div>
  )
}

export default FitnessPage