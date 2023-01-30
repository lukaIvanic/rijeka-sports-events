import './App.css';
import { Routes, Route, BrowserRouter as Router } from "react-router-dom";
import HomePage from './pages/HomePage';
import ChangeAccountSettingPage from './pages/ChangeAccountSettingPage';
import LogInPage from './pages/LogInPage';
import { AccountInfoPage } from './pages/AccountInfoPage';
import AddEventPage from './pages/AddEventPage';
import RegisterUserPage from './pages/RegisterUserPage';
import AddLeaguePage from './pages/AddLeaguePage';
import BasketballPage from './pages/BasketballPage';
import HandballPage from './pages/HandballPage';
import VolleyballPage from './pages/VolleyballPage';
import WaterpoloPage from './pages/WaterpoloPage';

function App() {
  return (
    <Router>
      <div className="App">
      </div>
      <Routes>
        <Route path="/formular" element={<ChangeAccountSettingPage />} />
        <Route path="/login" element={<LogInPage />} />
        <Route path="/info" element={<AccountInfoPage />} />
        <Route path="/addEvent" element={<AddEventPage />} />
        <Route path="/register" element={<RegisterUserPage />} />
        <Route path="/addLeague" element={<AddLeaguePage />} />
        <Route path="/basketball" element={<BasketballPage />} />
        <Route path="/handball" element={<HandballPage />} />
        <Route path="/volleyball" element={<VolleyballPage />} />
        <Route path="/waterpolo" element={<WaterpoloPage />} />
        <Route path="/" element={<HomePage />} />
      </Routes>
    </Router>
  );
}

export default App;
