import { useState } from 'react'
import { Nav, Navbar, NavItem, NavLink } from 'reactstrap';
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import { Link, useNavigate } from 'react-router-dom';
import { logout } from '../utils/logout';

function MenuDropDown() {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const navigate = useNavigate()

  return (
    <Nav className="changeBackground ml-auto" navbar>
      <Dropdown isOpen={dropdownOpen} toggle={()=>setDropdownOpen((p) => !p)}>
        <DropdownToggle nav>Menu</DropdownToggle>
        <DropdownMenu>
            <DropdownItem onClick={()=>navigate("/info")}>Account settings</DropdownItem>
            <DropdownItem onClick={()=>navigate("/addEvent")}>Add event</DropdownItem>
            <DropdownItem divider />
            <DropdownItem onClick={() =>logout()}>Sign Out</DropdownItem>
          </DropdownMenu>
      </Dropdown>
    </Nav>
  )
}

export default MenuDropDown