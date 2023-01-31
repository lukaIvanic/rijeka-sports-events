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

const Dashboard: React.FC = () => {
    useEffect(()=>{
        const userDetails = localStorage.getItem('user')
        if (!userDetails){
          //login()
        }else{
          //setUserDetails(JSON.parse(userDetails))
          //connectSocket(JSON.parse(userDetails))
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

export default Dashboard;
