import React, { FC, useEffect, useState } from 'react'
import { connect } from 'react-redux';
import BottomOfThePage from '../components/BottomOfThePage';
import CalendarAndResults from '../components/CalendarAndResults';
import NavBar from '../components/NavBar';
import UnderBarForSports from '../components/UnderBarForSports';
import { getAuthActions } from '../store/actions/authActions';
import { getGameActions } from '../store/actions/gameActions';
import { logout } from '../utils/logout';

type hpProps = {
  setUserDetails?: any;
  games?: any[];
  getGamesFromSport?: any;
  userDetails?: any;
}

const HomePage: FC<hpProps> = ({setUserDetails, games, getGamesFromSport, userDetails}) => {
  const [selectedSport, setSelectedSport] = useState("nogomet")
  const [date, setDate] = useState(new Date());

  return (
    <div>
        <NavBar/>
        <UnderBarForSports setSelectedSport={setSelectedSport} selectedSport={selectedSport}/>
        <CalendarAndResults date={date} setDate={setDate} selectedSport={selectedSport}/>
        <BottomOfThePage/>
    </div>
  )
}

//@ts-ignore
const mapStoreStateToProps = ({league, game, auth})=>{
  return {
    ...league,
    ...game,
    ...auth
  }
}

const mapActionsToProps = (dispatch: any) => {
  return {
    ...getAuthActions(dispatch),
    ...getGameActions(dispatch)
  }
}

export default connect(mapStoreStateToProps, mapActionsToProps)(HomePage)