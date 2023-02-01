import { FC, useState } from 'react'
import { Nav, Navbar, NavItem, NavLink } from 'reactstrap';
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import { Link, useNavigate } from 'react-router-dom';
import { logout } from '../utils/logout';
import { connect } from 'react-redux';

type mdProps = {
  userDetails?: any;
}

const MenuDropDown: FC<mdProps> = ({userDetails}) => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const navigate = useNavigate()

  return (
    <Nav className="changeBackground ml-auto" navbar>
      <Dropdown isOpen={dropdownOpen} toggle={()=>setDropdownOpen((p) => !p)}>
        <DropdownToggle nav>Menu</DropdownToggle>
        <DropdownMenu>
            <DropdownItem onClick={()=>navigate("/info")}>Account settings</DropdownItem>
            {userDetails && userDetails.type && userDetails.type === "CLUB" && <DropdownItem onClick={()=>navigate("/addEvent")}>Add event</DropdownItem>}
            <DropdownItem divider />
            <DropdownItem onClick={() =>logout()}>Sign Out</DropdownItem>
          </DropdownMenu>
      </Dropdown>
    </Nav>
  )
}

//@ts-ignore
const mapStoreStateToProps = ({auth}) => {
  return {
    ...auth
  }
}

export default connect(mapStoreStateToProps)(MenuDropDown)