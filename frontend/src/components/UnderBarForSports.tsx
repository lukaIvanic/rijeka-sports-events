import React from 'react'
import { Nav, NavItem, NavLink, NavbarToggler, Collapse, Navbar } from 'reactstrap'

const UnderBarForSports = () => {

    return (
        <nav className="navbar navbar-expand-lg navbar-light py-1" style={{backgroundColor: '#F0F8F0'}}>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
                <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
                    <li className="nav-item">
                    <a className="nav-link" href="/">Football</a>
                    </li>
                    <li className="nav-item">
                    <a className="nav-link" href="/">Handball</a>
                    </li>
                    <li className="nav-item">
                    <a className="nav-link" href="/">Basketball</a>
                    </li>
                    <li className="nav-item">
                    <a className="nav-link" href="/">Waterpolo</a>
                    </li>
                    <li className="nav-item">
                    <a className="nav-link" href="/">Volleyball</a>
                    </li>
                </ul>
            </div>
      </nav>
    )
}

export default UnderBarForSports;
