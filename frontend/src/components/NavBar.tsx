import React from 'react';

import Menu from './MenuDropDown';
import { Link } from 'react-router-dom';
const logoUrl = "../logo.jpg"

const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light navbar-expand-sm" style={{ height: '8vh', backgroundColor: '#A6E3E9' }}>
      {/* Add the logo picture on the left side */}
      <div className="logo-container">
        {/* create anchot that has href "/" */}
       <Link to="/">
          <img src={logoUrl} alt="Logo" style={{ height: '7vh' }} />
        </Link>
      </div> 
      <Menu />
    </nav>
  );
};

export default NavBar;


