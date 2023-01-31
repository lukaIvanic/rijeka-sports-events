import React from "react";
import { Routes, Route, BrowserRouter as Router, Link, Outlet } from "react-router-dom";
import HomePage from '../pages/HomePage';
import LogInPage from '../pages/LogInPage';
import { AccountInfoPage } from '../pages/AccountInfoPage';
import AddEventPage from '../pages/AddEventPage';
import RegisterUserPage from '../pages/RegisterUserPage';
import AddLeaguePage from '../pages/AddLeaguePage';
import BasketballPage from '../pages/BasketballPage';
import HandballPage from '../pages/HandballPage';
import VolleyballPage from '../pages/VolleyballPage';
import WaterpoloPage from '../pages/WaterpoloPage';
import 'react-toastify/dist/ReactToastify.css'
import { ToastContainer } from 'react-toastify'
import ChangeAccountSettingPage from "../pages/ChangeAccountSettingPage";

const Dashboard: React.FC = () => {
  return (
       <div>
        <Routes>
            <Route path="/formular" element={<ChangeAccountSettingPage />} />
            <Route path="/info" element={<AccountInfoPage />} />
            <Route path="/addEvent" element={<AddEventPage />} />
            <Route path="/addLeague" element={<AddLeaguePage />} />
            <Route path="/basketball" element={<BasketballPage />} />
            <Route path="/handball" element={<HandballPage />} />
            <Route path="/volleyball" element={<VolleyballPage />} />
            <Route path="/waterpolo" element={<WaterpoloPage />} />
            <Route path="/" element={<HomePage />} />
        </Routes>
       </div>
  );
};

export default Dashboard;
