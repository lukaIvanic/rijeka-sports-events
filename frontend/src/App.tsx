import './App.css';
import { Routes, Route, BrowserRouter as Router } from "react-router-dom";
import HomePage from './pages/HomePage';
import ChangeAccountSettingPage from './pages/ChangeAccountSettingPage';
import LogInPage from './pages/LogInPage';
import { AccountInfoPage } from './pages/AccountInfoPage';
import AddEventPage from './pages/AddEventPage';
import RegisterUserPage from './pages/RegisterUserPage';
import AddLeaguePage from './pages/AddLeaguePage';
import 'react-toastify/dist/ReactToastify.css'
import { ToastContainer } from 'react-toastify'
import Dashboard from './components/Dashboard';

function App() {
  return (
    <>
      <Router>
        <div className="App">
        </div>
        <Routes>
          <Route path="/dashboard/*" element={<Dashboard />} /> 
          <Route path="/register" element={<RegisterUserPage />} />
          <Route path="/login" element={<LogInPage />} />
          <Route path="/" element={<Dashboard />} /> 
        </Routes>
      </Router>
      <ToastContainer />
    </>
  );
}

export default App;
