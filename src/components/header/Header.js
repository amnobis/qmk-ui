import React from 'react';
import { Navbar, Nav, NavItem } from 'react-bootstrap';

import './Header.css';

class Header extends React.Component {

  render() {
    return (
      <Navbar>
        <Navbar.Header>
          <Navbar.Brand>
            {'Firmware Editor'}
          </Navbar.Brand>
          <Navbar.Toggle />
        </Navbar.Header>
        <Navbar.Collapse>
          <Nav pullRight>
            <NavItem>{'About'}</NavItem>
            <NavItem className="green">{'Contribute'}</NavItem>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    )
  }
}

export default Header;