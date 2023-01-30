import React from 'react'
import BottomOfThePage from '../components/BottomOfThePage';
import CalendarAndResults from '../components/CalendarAndResults';
import NavBar from '../components/NavBar';
import UnderBarForSports from '../components/UnderBarForSports';

const WaterpoloPage = () => {
  return (
    <div>
        <NavBar/>
        <UnderBarForSports/>
        <CalendarAndResults/>
        <BottomOfThePage/>
    </div>
  )
}

export default WaterpoloPage;
