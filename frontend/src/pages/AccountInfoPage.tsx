import React from 'react'
import BottomOfThePage from '../components/BottomOfThePage'
import NavBar from '../components/NavBar'
import AccountInfo from '../components/AccountInfo'

export const AccountInfoPage = () => {
  return (
<div>
  <NavBar/>
  <div style={{display: 'flex', height: '75vh', alignItems: 'center', justifyContent: 'center'}}>
    <AccountInfo/>
  </div>
  <BottomOfThePage/>
</div>
  )
}
