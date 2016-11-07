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
//
  render() {
    // Material UI styles




    // actions for login/sign form buttons
    const actions = [
      ];

      let requiredFields ={
        errorStyle: {
          color: '#F4E04D',
        },
        underlineStyle: {
          borderColor: '#54F2f2',
        }
      };

    const badgeDisplay = this.props.cart && this.props.cart.length ? "inline" : "none";


    return (
      <div>
        <Toolbar style={{'backgroundColor':'transparent'}}>
          <ToolbarGroup>
            <Link to='/' className='logo'>{WPLogo}</Link>
            <Link to='/'><ToolbarTitle/>Wantrepreneur</Link>


        </ToolbarGroup>
            <Dialog className='my-account' actions={actions} modal={false} open={this.state.open} onRequestClose={this.handleClose}>
                <h4> Please Login or Signup to see User Home Page </h4>
                <div className="row" style={{display: 'flex'}}>
                  <RegistrationForm className="col-md-6" close={this.handleClose}/>
                  <span></span>
                  <LoginForm className="col-md-6" close={this.handleClose}/>
                </div>
            </Dialog>


          <ToolbarGroup>
            <div>
              <IconButton tooltip="My Account" >
                <FontIcon className="material-icons"  hoverColor={'#FCFCFC'} onTouchTap={this.handleOpen}>home</FontIcon>
              </IconButton>

              <Badge
                  badgeContent={this.props.cart ? this.props.cart.length : ''}
                  style ={{color:'#333333', padding:'1px 15px 10px 10px', display: badgeDisplay}}
                  badgeStyle={{top: 0, right: 0, fontSize: 12}}
              >
                <IconButton tooltip="My Cart" >
                  <Link to="/cart">
                      <FontIcon className="material-icons"  hoverColor={'#FCFCFC'} >shopping_cart</FontIcon>
                  </Link>
                </IconButton>
              </Badge>
            </div>

        </ToolbarGroup>
      </Toolbar>
      </div>
    );
  }
}

export default Navigation;
