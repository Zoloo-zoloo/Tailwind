import React, { useState } from 'react'
import TopBar from '../Components/TopBar'
import Intro from '../Components/Intro'
import ProgramList from '../Components/ProgramList'
import TrainerSection from '../Components/TrainerSection'
import BottomFooter from '../Components/BottomFooter'
import ProgrammingTracks from '../Components/ProgrammingTracks'
import AuthModal from '../Components/AuthModal'

const FitnessPage = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [authOpen, setAuthOpen] = useState(false);
  console.log(isOpen);
  return (
    <div>
      <TopBar
        openSignUp={() => setAuthOpen("signup")}
        openLogin={() => setAuthOpen("login")}
      />
      <ProgrammingTracks state={isOpen} close={() => setIsOpen(false)} />
      <AuthModal
        mode={authOpen}
        open={authOpen}
        close={() => setAuthOpen(false)}
        switchMode={() =>
          setAuthOpen((currentMode) =>
            currentMode === "signup" ? "login" : "signup",
          )
        }
      />
      <Intro open={() => setIsOpen(true)} />
      <ProgramList />
      <TrainerSection />
      <BottomFooter />
    </div>
  );
};


export default FitnessPage