//React
import React from 'react';
import {Link} from 'react-router';

// material-ui
import {AppBar, Tabs, Tab, Toolbar, ToolbarGroup, ToolbarTitle,NotificationsIcon} from 'material-ui';
import FontIcon from 'material-ui/FontIcon';
import Badge from 'material-ui/Badge';
import IconButton from 'material-ui/IconButton';



//Custom images Logos
const WPLogo = <img src="/WPNavbarLogo.png"/> ;


class Navigation extends React.Component {
  constructor(props){
    super(props);
  }


  handleTouchTap() {
  alert('onTouchTap triggered on the component');
  }

//to do
// add notification + num on cartIcon
// add Logo
// make pretty


  render() {

    let cartIcon={
      color: '#F4E04D',
      //fontSize: '30px',

    };

    let navbar={
      color: '#F4E04D'
    };

    return (
      <div>
      <Toolbar className='navbar' style={navbar}>
        <ToolbarGroup>
            <Link to='/' className='logo'>{WPLogo}</Link>
            <Link to='/'><ToolbarTitle text="Wantrepreneur"/></Link>

        </ToolbarGroup>
        <ToolbarGroup>
          <Badge badgeContent={this.props.cart ? this.props.cart.length : ''} secondary={true} badgeStyle={{top: 12, right: 12}}>

            <IconButton tooltip="My Cart">
              <Link to="/cart">
              <FontIcon className="material-icons" style={cartIcon} hoverColor='#FCFCFC' >shopping_cart</FontIcon>
              </Link>
            </IconButton>
          </Badge>
        </ToolbarGroup>
      </Toolbar>
      </div>
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
