import React from 'react'
import BottomOfThePage from '../components/BottomOfThePage';
import RegisterUserForm from '../components/RegisterUserForm';
import NavBar from '../components/NavBar'
import UnderBarForSports from '../components/UnderBarForSports';



const RegisterUserPage = () => {
  return (
    <div>
        <NavBar visibleMenu={false}/>
        {/* <UnderBarForSports/> */}
        <RegisterUserForm />
        {/* <BottomOfThePage /> */}
    </div>

  );
};

export default RegisterUserPage;
