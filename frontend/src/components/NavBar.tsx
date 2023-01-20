import React from 'react';

import Menu from './MenuDropDown';
import { Link } from 'react-router-dom';
const logoUrl = "./logo.jpg"

const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light navbar-expand-sm" style={{ height: '50px', backgroundColor: '#D9FFD8' }}>
      {/* Add the logo picture on the left side */}
      <div className="logo-container">
        {/* create anchot that has href "/" */}
       <Link to="/">
          <img src={logoUrl} alt="Logo" style={{ height: '50px' }} />
        </Link>
      </div>

      {/* Add the website name in the middle */}
      <div className="title-container d-flex justify-content-center align-items-center w-100">
        <Link to="/" style={{ color: 'black', textDecoration: 'none' }}>
          <h1 className="mx-auto">RIJEKA SPORT EVENTS</h1>
        </Link>

      </div>

     {/* Add drop down menu that has colour equal to D9FFD8 and it changes on hover to darker tone */}
     {/* Add the links to the drop down menu aka Account Setting, Add event, Log out*/}
     < Menu />

    </nav>
  );
};

export default NavBar;


