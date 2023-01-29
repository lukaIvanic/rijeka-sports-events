import React from 'react'
import { AddLeague } from '../components/AddLeague';
import BottomOfThePage from '../components/BottomOfThePage';
import NavBar from '../components/NavBar'



const AddLeaguePage = () => {
  return (
    <div>
        <NavBar />
        <AddLeague />
        <BottomOfThePage />
    </div>

  );
};

export default AddLeaguePage;
