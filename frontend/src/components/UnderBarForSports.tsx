import React from 'react'
import { Nav, NavItem, NavLink, NavbarToggler, Collapse, Navbar } from 'reactstrap'

type ubfsProps = {
    setSelectedSport?: any;
    selectedSport: string;
}

//@ts-ignore
const UnderBarForSports: FC<ubfsProps> = ({ setSelectedSport, selectedSport }) => {

    return (
        <nav className="navbar navbar-expand-lg navbar-light py-1" style={{ backgroundColor: '#CBF1F5' }}>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse " id="navbarTogglerDemo01">
                <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
                    <li className="nav-item" style={{ borderBottom: selectedSport === "nogomet" ? "5px solid blue" : "none", cursor: 'pointer' }}>
                        <p style={{fontWeight: selectedSport === "nogomet" ? "bold" : "500", color: selectedSport === "nogomet" ? "black" : "#7F7F7F"}} onClick={() => setSelectedSport("nogomet")} className="nav-link">Nogomet</p>
                    </li>
                    <li className="nav-item" style={{ borderBottom: selectedSport === "rukomet" ? "5px solid blue" : "none", cursor: 'pointer' }}>
                        <p style={{fontWeight: selectedSport === "rukomet" ? "bold" : "500", color: selectedSport === "rukomet" ? "black" : "#7F7F7F"}} onClick={() => setSelectedSport("rukomet")} className="nav-link">Rukomet</p>
                    </li>
                    <li className="nav-item" style={{ borderBottom: selectedSport === "kosarka" ? "5px solid blue" : "none", cursor: 'pointer' }}>
                        <p style={{fontWeight: selectedSport === "kosarka" ? "bold" : "500", color: selectedSport === "kosarka" ? "black" : "#7F7F7F"}} onClick={() => setSelectedSport("kosarka")} className="nav-link">Kosarka</p>
                    </li>
                    <li className="nav-item" style={{ borderBottom: selectedSport === "vaterpolo" ? "5px solid blue" : "none", cursor: 'pointer' }}>
                        <p style={{fontWeight: selectedSport === "vaterpolo" ? "bold" : "500", color: selectedSport === "vaterpolo" ? "black" : "#7F7F7F"}} onClick={() => setSelectedSport("vaterpolo")} className="nav-link">Vaterpolo</p>
                    </li>
                    <li className="nav-item" style={{ borderBottom: selectedSport === "odbojka" ? "5px solid blue" : "none", cursor: 'pointer' }}>
                        <p style={{fontWeight: selectedSport === "odbojka" ? "bold" : "500", color: selectedSport === "odbojka" ? "black" : "#7F7F7F"}} onClick={() => setSelectedSport("odbojka")} className="nav-link">Odbojka</p>
                    </li>

                </ul>
            </div>
        </nav>
    )
}

export default UnderBarForSports;
