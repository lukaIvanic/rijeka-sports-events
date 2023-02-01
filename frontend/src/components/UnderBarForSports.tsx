import React from 'react'
import { Nav, NavItem, NavLink, NavbarToggler, Collapse, Navbar } from 'reactstrap'

type ubfsProps = {
    setSelectedSport?: any;
    selectedSport: string;
}

//@ts-ignore
const UnderBarForSports: FC<ubfsProps> = ({ setSelectedSport, selectedSport }) => {

    return (
        <nav className="navbar navbar-expand-lg navbar-light py-1" style={{ backgroundColor: '#F0F8F0' }}>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
                <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
                    <li className="nav-item" style={{ borderBottom: selectedSport === "nogomet" ? "3px solid blue" : "none", cursor: 'pointer' }}>
                        <p onClick={() => setSelectedSport("nogomet")} className="nav-link">Nogomet</p>
                    </li>
                    <li className="nav-item" style={{ borderBottom: selectedSport === "rukomet" ? "3px solid blue" : "none", cursor: 'pointer' }}>
                        <p onClick={() => setSelectedSport("rukomet")} className="nav-link">Rukomet</p>
                    </li>
                    <li className="nav-item" style={{ borderBottom: selectedSport === "kosarka" ? "3px solid blue" : "none", cursor: 'pointer' }}>
                        <p onClick={() => setSelectedSport("kosarka")} className="nav-link">Kosarka</p>
                    </li>
                    <li className="nav-item" style={{ borderBottom: selectedSport === "vaterpolo" ? "3px solid blue" : "none", cursor: 'pointer' }}>
                        <p onClick={() => setSelectedSport("vaterpolo")} className="nav-link">Vaterpolo</p>
                    </li>
                    <li className="nav-item" style={{ borderBottom: selectedSport === "odbojka" ? "3px solid blue" : "none", cursor: 'pointer' }}>
                        <p onClick={() => setSelectedSport("odbojka")} className="nav-link">Odbojka</p>
                    </li>

                </ul>
            </div>
        </nav>
    )
}

export default UnderBarForSports;
