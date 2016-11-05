//React
import React from 'react';
import {Link} from 'react-router';

// material-ui imports
import {AppBar, Tabs, Tab, Toolbar, ToolbarGroup, ToolbarTitle, NotificationsIcon} from 'material-ui';
import FontIcon from 'material-ui/FontIcon';
import Badge from 'material-ui/Badge';
import IconButton from 'material-ui/IconButton';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';

//Custom images Logos
const WPLogo = <img src="/WPNavbarLogo.png"/> ;

/* ---  Component --- */
class Navigation extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      open: false
    };
    this.handleOpen = this.handleOpen.bind(this);
    this.handleClose = this.handleClose.bind(this);
  }

  // temp function to put in for buttons
  handleTouchTap() {
  alert('onTouchTap triggered on the component');
  }

  handleOpen(){
    this.setState({open: true});
    }

  handleClose(){
    this.setState({open: false});
    }


  render() {
    // Material UI styles
    let cartIcon={
      color: '#F4E04D',
    };

    let navbar={
      color: '#F4E04D'
    };

    // actions for login / sign form
    const actions = [
      <FlatButton
      label="Cancel"
      primary={true}
      onTouchTap={this.handleClose}
        />,
        <FlatButton
        label="Create"
        primary={true}
        keyboardFocused={true}
        onTouchTap={this.handleClose}
        />,
      ];


    return (
      <div>
      <Toolbar className='navbar' style={navbar}>
        <ToolbarGroup>
            <Link to='/' className='logo'>{WPLogo}</Link>
            <Link to='/'><ToolbarTitle text="Wantrepreneur"/></Link>

        </ToolbarGroup>
        <ToolbarGroup>

          <RaisedButton label="My Account" onTouchTap={this.handleOpen}/>
          <Dialog
            title="Login"
            actions={actions}
            modal={false}
            open={this.state}
            onRequesClose={this.handleClose}></Dialog>


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
