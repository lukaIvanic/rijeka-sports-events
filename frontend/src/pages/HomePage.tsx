import React from 'react'
import BottomOfThePage from '../components/BottomOfThePage';
import CalendarAndResults from '../components/CalendarAndResults';
import NavBar from '../components/NavBar';

const HomePage = () => {
  return (
    <div>
        <NavBar/>
        <CalendarAndResults/>
        <BottomOfThePage/>
    </div>
  )
}

export default HomePage;
