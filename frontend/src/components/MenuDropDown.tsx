import { useState } from 'react'
import { Nav, Navbar, NavItem, NavLink } from 'reactstrap';
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import { Link } from 'react-router-dom';

function MenuDropDown() {
  const [dropdownOpen, setDropdownOpen] = useState(false);


  return (
    <Nav className="mr-auto" navbar>
      <Dropdown isOpen={dropdownOpen} toggle={()=>setDropdownOpen((p) => !p)}>
        <DropdownToggle caret>Menu</DropdownToggle>
        <DropdownMenu right>
            <DropdownItem href="/info">Account settings</DropdownItem>
            <DropdownItem href="#">Add event</DropdownItem>
            <DropdownItem divider />
            <DropdownItem href="/login">Log out</DropdownItem>
          </DropdownMenu>
      </Dropdown>
    </Nav>
  )
}

export default MenuDropDown