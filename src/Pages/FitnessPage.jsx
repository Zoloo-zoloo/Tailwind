import React, { useState } from 'react'
import TopBar from '../Components/TopBar'
import Intro from '../Components/Intro'
import ProgramList from '../Components/ProgramList'
import TrainerSection from '../Components/TrainerSection'
import BottomFooter from '../Components/BottomFooter'
import Addprogram from '../Components/Addprogram'
import AuthModal from '../Components/AuthModal'
import ProgramButton from '../Components/ProgramButton'
import { programmingCourses } from '../Data/Data'

const FitnessPage = () => {
  const [addOpen, setAddOpen] = useState(false)
  const [authOpen, setAuthOpen] = useState(false)
  const [programsOpen, setProgramsOpen] = useState(false)
  const [activePrograms, setActivePrograms] = useState([])

  const addProgram = (program) => {
    setActivePrograms((current) => {
      if (current.some((item) => item.id === program.id)) {
        return current
      }
      return [...current, program]
    })
  }

  const removeProgram = (programId) => {
    setActivePrograms((current) => current.filter((program) => program.id !== programId))
  }

  return (
    <div>
      <TopBar
        openSignUp={() => setAuthOpen('signup')}
        openLogin={() => setAuthOpen('login')}
        openPrograms={() => setProgramsOpen(true)}
      />
      <ProgramButton
        open={programsOpen}
        close={() => setProgramsOpen(false)}
        activePrograms={activePrograms}
        availablePrograms={programmingCourses}
        onRemove={removeProgram}
        onOpenAdd={() => setAddOpen(true)}
      />
      <Addprogram
        open={addOpen}
        close={() => setAddOpen(false)}
        availablePrograms={programmingCourses}
        activePrograms={activePrograms}
        onAdd={addProgram}
      />
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
      <Intro open={() => setAddOpen(true)} />
      <ProgramList />
      <TrainerSection />
      <BottomFooter />
    </div>
  )
}

export default FitnessPage
