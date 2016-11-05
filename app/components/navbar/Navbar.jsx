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



import RegistrationFrom from './RegistrationFrom.jsx';
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

  onChangeHandler(e){
    console.log(e.target.value);
  }

//
  render() {
    // Material UI styles
    let navbarIcon={
      color: '#F4E04D',
      width:"45px",
      height:'45px'
    };



    // actions for login/sign form buttons
    const actions = [
      //<FlatButton label="Cancel" primary={true} onTouchTap={this.handleClose}/>,
      ];

      let requiredFields ={
        errorStyle: {
          color: '#F4E04D',
        },
        underlineStyle: {
          borderColor: '#54F2f2',
        }
      };

    return (
      <div>
      <Toolbar style={{'background-color':'transparent'}}>
        <ToolbarGroup>
            <Link to='/' className='logo'>{WPLogo}</Link>
            <Link to='/'><ToolbarTitle text=" Wantrepreneur"/></Link>

        </ToolbarGroup>
        <ToolbarGroup>


          <IconButton tooltip="My Account" >
            <FontIcon className="material-icons" style={navbarIcon} onTouchTap={this.handleOpen}>home</FontIcon>
          </IconButton>


            <Dialog actions={actions} modal={false} open={this.state.open} onRequesClose={this.handleClose}>
            <div className="row" style={{display: 'flex'}}>
              <RegistrationFrom className="col-md-6" close={this.handleClose}/>
              <LoginForm className="col-md-6" close={this.handleClose}/>
            </div>
            </Dialog>


          <Badge badgeContent={this.props.cart ? this.props.cart.length : ''} secondary={true} badgeStyle={{top: 12, right: 12}}>
            <IconButton tooltip="My Cart">
              <Link to="/cart">
                <FontIcon className="material-icons" style={navbarIcon} hoverColor='#FCFCFC'>shopping_cart</FontIcon>
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
