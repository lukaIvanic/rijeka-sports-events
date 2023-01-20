import './App.css';
import { Switch, Route } from "react-router-dom";
import { BrowserRouter as Router } from "react-router-dom";
import HomePage from './pages/HomePage';
import ChangeAccountSettingPage from './pages/ChangeAccountSettingPage';
import LogInPage from './pages/LogInPage';
import { AccountInfoPage } from './pages/AccountInfoPage';

function App() {
  return (
    <Router>
      <div className="App">
      </div>
      <Switch>
          <Route path="/" exact component={HomePage}>
            <HomePage/>
          </Route>
          <Route exact path="/formular" component={ChangeAccountSettingPage}>
            <ChangeAccountSettingPage/>
          </Route>
          <Route exact path="/login" component={LogInPage}>
            <LogInPage/>
          </Route>
          <Route exact path="/info" component={AccountInfoPage}>
            <AccountInfoPage/>
          </Route>
        </Switch>
    </Router>
  );
}

export default App;
