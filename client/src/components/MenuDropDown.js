import React from 'react';
import { Nav, Navbar, NavItem, NavLink } from 'reactstrap';
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import { Link } from 'react-router-dom';


class Menu extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      dropdownOpen: false
    };
  }

  toggleDropdown = () => {
    this.setState({
      dropdownOpen: !this.state.dropdownOpen
    });
  }

  render() {
    return (
      <Nav className="mr-auto" navbar>
        <Dropdown nav isOpen={this.state.dropdownOpen} toggle={this.toggleDropdown}>
          <DropdownToggle nav style={{ '::marker': { display: 'none' } }}>
            Menu
          </DropdownToggle>
          <DropdownMenu right>
            <DropdownItem href="/info">Account settings</DropdownItem>
            <DropdownItem href="#">Add event</DropdownItem>
            <DropdownItem divider />
            <DropdownItem href="/login">Log out</DropdownItem>
          </DropdownMenu>
        </Dropdown>
      </Nav>
    );
  }
}

export default Menu;