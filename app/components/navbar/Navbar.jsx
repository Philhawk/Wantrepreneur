'use strict';

import React from'react';
import {Nav, Navbar, NavItem, NavDropdown, MenuItem} from "react-bootstrap";
import {Link} from 'react-router';

class Navigation extends React.Component {
  constructor(props){
    super(props);
  }

  render() {
    return (
        <Navbar inverse collapseOnSelect>
          <Navbar.Header>
            <Navbar.Brand>
              <Link to="/">Wantrepreneur</Link>
            </Navbar.Brand>
            <Navbar.Toggle />
          </Navbar.Header>
          <Navbar.Collapse>
            <Nav>
            </Nav>
            <Nav pullRight>
              <NavDropdown eventKey={3} title="Login / Signup" id="basic-nav-dropdown">
              <MenuItem eventKey={3.3}>Login</MenuItem>
              <MenuItem divider />
              <MenuItem eventKey={3.3}>Signup</MenuItem>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
    );
  }
}


export default Navigation;
