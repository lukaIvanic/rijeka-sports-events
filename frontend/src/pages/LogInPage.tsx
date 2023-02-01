import React from 'react'
import BottomOfThePage from '../components/BottomOfThePage';
import LoginForm from '../components/LogInForm';
import NavBar from '../components/NavBar'
import UnderBarForSports from '../components/UnderBarForSports';



const LogInPage = () => {
  return (
    <div>
        <NavBar visibleMenu={false}/>
        {/* <UnderBarForSports/> */}
        <LoginForm />
        {/* <BottomOfThePage /> */}
    </div>

  );
};

export default LogInPage;
