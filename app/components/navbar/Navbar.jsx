
import React from 'react';
import { Nav, Navbar, NavItem, NavDropdown, MenuItem } from "react-bootstrap";
import { AppBar, Tabs, Tab } from 'material-ui'
import { Link } from 'react-router';

class Navigation extends React.Component {
  constructor(props){
    super(props);
  }

  render() {
    return (
        <Navbar inverse collapseOnSelect>
          <Navbar.Header>
            <Navbar.Brand>
              <Link className='brand' to="/">
                <img src="/WPNavbarLogo.png"/>
                </Link>
            </Navbar.Brand>
            <Navbar.Toggle />
            <Navbar.Header>
              { this.props.cart.length }
              <Link to="/cart">Cart</Link>
            </Navbar.Header>
          </Navbar.Header>
          <Navbar.Collapse>
            <Nav>
            </Nav>
            <Nav pullRight>
              <NavItem eventKey={1} href="#">Login</NavItem>
              <NavItem eventKey={2} href="#">Signup</NavItem>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
    );
  }
}

export default Navigation;
