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
        <div style={{display: 'flex', height: '75vh', alignItems: 'center', justifyContent: 'center'}}>
            <ProfileForm/>
        </div>
        <BottomOfThePage/>
    </div>
  )
}

export default ChangeAccountSettingPage;
