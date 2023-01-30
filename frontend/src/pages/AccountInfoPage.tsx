import React from 'react'
import BottomOfThePage from '../components/BottomOfThePage'
import NavBar from '../components/NavBar'
import AccountInfo from '../components/AccountInfo'
import UnderBarForSports from '../components/UnderBarForSports'

export const AccountInfoPage = () => {
  return (
<div>
  <NavBar/>
  <UnderBarForSports/>
  <div style={{display: 'flex', height: '75vh', alignItems: 'center', justifyContent: 'center'}}>
    <AccountInfo/>
  </div>
  <BottomOfThePage/>
</div>
  )
}
