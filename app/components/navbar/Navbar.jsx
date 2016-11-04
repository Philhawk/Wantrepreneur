
import React from 'react';
// import {Nav, Navbar, NavItem, NavDropdown, MenuItem} from "react-bootstrap";
import {AppBar, Tabs, Tab, Toolbar, ToolbarGroup, ToolbarTitle} from 'material-ui';
import FontIcon from 'material-ui/FontIcon';
import {Link} from 'react-router';

const WPLogo = <img src="/WPNavbarLogo.png"/> ;


class Navigation extends React.Component {
  constructor(props){
    super(props);
  }


  handleTouchTap() {
  alert('onTouchTap triggered on the component');
  }



  render() {

    let cartIcon={
      color: '#F4E04D',
      fontSize: '45px',

    };



    return (
      <Toolbar>

       <ToolbarTitle text="Wantrepreneur"/>

        <FontIcon className="material-icons" style={cartIcon} hoverColor='#FCFCFC' >shopping_cart</FontIcon>

      </Toolbar>

    );
  }
}

export default Navigation;


/* BootStrap NavBar
<Navbar inverse collapseOnSelect>
<Navbar.Header>
<Navbar.Brand>
<Link className='brand' to="/">

</Link>
</Navbar.Brand>
<Navbar.Toggle />
</Navbar.Header>
<Navbar.Collapse>
<Nav>
</Nav>
<Nav pullRight>
<NavItem eventKey={1} >Login</NavItem>
<NavItem eventKey={2} >Signup</NavItem>
</Nav>
</Navbar.Collapse>
</Navbar>
*/
