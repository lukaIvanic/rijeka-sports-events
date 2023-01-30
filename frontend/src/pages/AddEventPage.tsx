import React from 'react'
import BottomOfThePage from '../components/BottomOfThePage'
import NavBar from '../components/NavBar'
import GameForm from '../components/GameForm'
import UnderBarForSports from '../components/UnderBarForSports'


const AddEventPage = () => {
  return (
    <div>
        <NavBar/>
        <UnderBarForSports/>
        <GameForm/>
        <BottomOfThePage/>
    </div>
  )
}

export default AddEventPage;