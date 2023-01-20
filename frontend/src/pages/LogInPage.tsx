import React from 'react'
import BottomOfThePage from '../components/BottomOfThePage';
import LoginForm from '../components/LogInForm';
import NavBar from '../components/NavBar'



const LogInPage = () => {
  return (
    <div>
        <NavBar />
        <LoginForm />
        <BottomOfThePage />
    </div>

  );
};

export default LogInPage;
