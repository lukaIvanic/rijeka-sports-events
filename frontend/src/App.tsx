import './App.css';
import { Routes, Route, BrowserRouter as Router } from "react-router-dom";
import HomePage from './pages/HomePage';
import ChangeAccountSettingPage from './pages/ChangeAccountSettingPage';
import LogInPage from './pages/LogInPage';
import { AccountInfoPage } from './pages/AccountInfoPage';

function App() {
  return (
    <Router>
      <div className="App">
      </div>
      <Routes>
        <Route path="/formular" element={<ChangeAccountSettingPage />} />
        <Route path="/login" element={<LogInPage />} />
        <Route path="/info" element={<AccountInfoPage />} />
        <Route path="/" element={<HomePage />} />
      </Routes>
    </Router>
  );
}

export default App;
