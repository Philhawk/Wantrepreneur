//React
import React from 'react';
import {Link} from 'react-router';

// For Navbar
import {AppBar, Tabs, Tab, Toolbar, ToolbarGroup, ToolbarTitle, NotificationsIcon} from 'material-ui';
//Cart
import {FontIcon,Badge,IconButton,ActionHome } from 'material-ui';
//Dialog modol
import {FlatButton, RaisedButton, Dialog, TextField} from 'material-ui';
import {Card, CardHeader, CardActions, CardText} from 'material-ui';



import RegistrationForm from './RegistrationForm.jsx';
import LoginForm from './LoginForm.jsx';

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

  componentDidMount() {
    this.props.getLocalStorage();
  }

  // temp function to put in for buttons and events
  handleTouchTap() {
  alert('onTouchTap triggered on the component');
  }

  handleOpen(){
    this.setState({open: true});
    }

  handleClose(){
    this.setState({open: false});
    }

  componentWillMount() {
    let loggedUser = window.localStorage.getItem('user');
    if (loggedUser) {
      this.props.loginUser(JSON.parse(loggedUser));
    }
  }

//
  render() {
    // Material UI styles



    const styles = {
      toolbar: {
        'backgroundColor': 'transparent',
        'padding-left': '8px',
        'margin-top': '0.2em',
      }
    };

    const dialogstyle = {
      width: '100%',
      maxWidth: 'none',
    };
    // actions for login/sign form buttons
    const actions = [
      ];



    const badgeDisplay = this.props.cart && this.props.cart.length ? "inline" : "none";

// icon components
    const logoutIcon =
        <IconButton tooltip="Log Out" >
              <FontIcon className="material-icons"  hoverColor={'#FCFCFC'} onClick={this.props.logoutUser} onTouchTap={this.handleClose}>exit_to_app</FontIcon>
        </IconButton>;


    const houseIcon =
        <IconButton tooltip="My Account" >
            <FontIcon className="material-icons"  hoverColor={'#FCFCFC'} onTouchTap={this.handleOpen}>home</FontIcon>
        </IconButton>;

    const accountCircle =
      <Link to='/userpage'>
        <IconButton tooltip="Home Page" >
            <FontIcon className="material-icons"  hoverColor={'#FCFCFC'}>account_circle</FontIcon>
        </IconButton>
      </Link>;

    const loginSignIn =
          <Dialog className='my-account' contentStyle={dialogstyle} actions={actions} modal={false} open={(this.props.user === null) ?this.state.open : false} autoScrollBodyContent={true} onRequestClose={this.handleClose}>
              <h4> Please Login or Sign Up to see User Home Page </h4>
              <div className="row" style={{display: 'flex'}}>
                  <RegistrationForm className="col-md-6" close={this.handleClose}/>
                  <span></span>
                  <LoginForm className="col-md-6" close={this.handleClose}/>
              </div>
          </Dialog>;



// Navbar component
    return (
      <div>
        <Toolbar style={styles.toolbar}>
          <ToolbarGroup>
            <Link to='/' className='logo'>{WPLogo}</Link>
          </ToolbarGroup>

          <ToolbarGroup>
            <div>
              {(this.props.user === null)?  houseIcon : accountCircle}
              {loginSignIn}
              <Badge
                  badgeContent={this.props.cart ? this.props.cart.length : ''}
                  style ={{color:'#333333', padding:'1px 15px 10px 10px', display: badgeDisplay}}
                  badgeStyle={{top: 0, right: 0, fontSize: 12}}>
                <IconButton tooltip="My Cart" >
                  <Link to="/cart">
                      <FontIcon className="material-icons"  hoverColor={'#FCFCFC'} >shopping_cart</FontIcon>
                  </Link>
                </IconButton>
              </Badge>
              {(this.props.user === null) ? null : logoutIcon}
            </div>
        </ToolbarGroup>
      </Toolbar>
      </div>
    );
  }
}

export default Navigation;
