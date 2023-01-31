import React from 'react'
import BottomOfThePage from '../components/BottomOfThePage'
import ProfileForm from '../components/Formular'
import NavBar from '../components/NavBar'
import UnderBarForSports from '../components/UnderBarForSports'

const ChangeAccountSettingPage = () => {
  return (
    <div>
        <NavBar/>
        <UnderBarForSports/>
        <ProfileForm/>
        <BottomOfThePage/>
    </div>
  )
}

export default ChangeAccountSettingPage;
