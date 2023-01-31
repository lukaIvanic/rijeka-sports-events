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
}

const HomePage: FC<hpProps> = ({setUserDetails, games, getGamesFromSport}) => {
  const [selectedSport, setSelectedSport] = useState("nogomet")
  const [date, setDate] = useState(new Date());

  useEffect(() => {
    const userDetails = localStorage.getItem('user')
    if (!userDetails) {
      logout()
    } else {
      setUserDetails(JSON.parse(userDetails))
      // connectSocket()
    }
  }, [])

  // useEffect(()=> {
  //   getGamesFromSport(selectedSport, date.getTime())
  // }, [selectedSport, date])
  return (
    <div>
        <NavBar/>
        <UnderBarForSports setSelectedSport={setSelectedSport}/>
        <CalendarAndResults date={date} setDate={setDate} selectedSport={selectedSport}/>
        <BottomOfThePage/>
    </div>
  )
}

//@ts-ignore
const mapStoreStateToProps = ({league, game})=>{
  return {
    ...league,
    ...game
  }
}

const mapActionsToProps = (dispatch: any) => {
  return {
    ...getAuthActions(dispatch),
    ...getGameActions(dispatch)
  }
}

export default connect(mapStoreStateToProps, mapActionsToProps)(HomePage)