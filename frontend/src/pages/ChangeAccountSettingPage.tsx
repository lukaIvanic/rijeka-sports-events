import React from 'react'
import BottomOfThePage from '../components/BottomOfThePage'
import ProfileForm from '../components/Formular'
import NavBar from '../components/NavBar'

const ChangeAccountSettingPage = () => {
  return (
    <div>
        <NavBar/>
        <div style={{display: 'flex', height: '75vh', alignItems: 'center', justifyContent: 'center'}}>
            <ProfileForm/>
        </div>
        <BottomOfThePage/>
    </div>
  )
}

export default ChangeAccountSettingPage;
