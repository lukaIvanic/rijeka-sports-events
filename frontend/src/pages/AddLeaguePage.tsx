import React from 'react'
import { AddLeague } from '../components/AddLeague';
import BottomOfThePage from '../components/BottomOfThePage';
import NavBar from '../components/NavBar'
import UnderBarForSports from '../components/UnderBarForSports';



const AddLeaguePage = () => {
  return (
    <div>
        <NavBar />
        <UnderBarForSports/>
        <AddLeague />
        <BottomOfThePage />
    </div>

  );
};

export default AddLeaguePage;
