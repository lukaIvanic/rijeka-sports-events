import React from 'react'
import BottomOfThePage from '../components/BottomOfThePage';
import RegisterUserForm from '../components/RegisterUserForm';
import NavBar from '../components/NavBar'



const RegisterUserPage = () => {
  return (
    <div>
        <NavBar />
        <RegisterUserForm />
        <BottomOfThePage />
    </div>

  );
};

export default RegisterUserPage;
