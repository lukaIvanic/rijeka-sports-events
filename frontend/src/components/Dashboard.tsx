import React, { useEffect } from "react";
import { Routes, Route, BrowserRouter as Router, Link, Outlet } from "react-router-dom";
import HomePage from '../pages/HomePage';
import LogInPage from '../pages/LogInPage';
import { AccountInfoPage } from '../pages/AccountInfoPage';
import AddEventPage from '../pages/AddEventPage';
import RegisterUserPage from '../pages/RegisterUserPage';
import AddLeaguePage from '../pages/AddLeaguePage';
import 'react-toastify/dist/ReactToastify.css'
import { ToastContainer } from 'react-toastify'
import ChangeAccountSettingPage from "../pages/ChangeAccountSettingPage";
import { login } from "../api/api";
import { logout } from "../utils/logout";
import { connect } from "react-redux";
import { getAuthActions } from "../store/actions/authActions";
import { getGameActions } from "../store/actions/gameActions";
import { getLeagueActions } from "../store/actions/leagueActions";
import { connectSocket } from '../socketConnection'

type dashboardProps = {
  setUserDetails?: any;
  getAllLeagues?: any;
  getAllClubsUsingSport?: any;
}

const Dashboard: React.FC<dashboardProps> = ({setUserDetails, getAllLeagues, getAllClubsUsingSport}) => {
  useEffect(() => {
    const userDetails = localStorage.getItem('user')
    if (!userDetails) {
      logout()
    } else {
      setUserDetails(JSON.parse(userDetails))
      getAllLeagues()
      // getAllClubsUsingSport("nogomet")

      // connectSocket()
    }
  }, [])

  return (
       <div>
        <Routes>
            <Route path="/formular" element={<ChangeAccountSettingPage />} />
            <Route path="/info" element={<AccountInfoPage />} />
            <Route path="/addEvent" element={<AddEventPage />} />
            <Route path="/" element={<HomePage />} />
        </Routes>
       </div>
  );
};



const mapActionsToProps = (dispatch: any) => {
  return {
    ...getAuthActions(dispatch),
    ...getLeagueActions(dispatch)
  }
}

export default connect(null, mapActionsToProps)(Dashboard)