//React
import React from 'react';
import {Link} from 'react-router';
//redux
import {connect} from 'react-redux';
import {loginUser} from '../../reducers/user';


import {FlatButton, RaisedButton, Dialog, TextField} from 'material-ui';
import {Card, CardHeader, CardActions, CardText} from 'material-ui';

class LoginForm extends React.Component{
  constructor(props){
    super(props);
    this.state={
      email: '',
      password : '',
      error : "Invalid Password or Email",
      loginAttempts: 0
    };

    this.emailHandler         = this.emailHandler.bind(this);
    this.passwordHandler      = this.passwordHandler.bind(this);
    this.onSubmitSignup       = this.onSubmitSignup.bind(this);
    this.attempted            = this.attempted.bind(this);

  }
// Event handlers
  emailHandler(evt){
    this.setState({
      email : evt.target.value
    });
  }

  passwordHandler(evt){
    this.setState({
      password : evt.target.value,
    });
  }

  onSubmitSignup(event){
    event.preventDefault();
    this.props.loginUser(this.state);
    this.attempted();

  }

  attempted(){
    this.setState({
      password:'',
      loginAttempts: this.state.logintries++
    });

  }


  // Login Form compnent
  render(){
    let {close} = this.props;
    let style={

    };

    return(
      <Card style={style}>
        <CardHeader title="Existing User" textStyle={{fontVariant: "small-caps", textDecoration:"underline"}}/>
        <form onSubmit={this.onSubmitSignup} >
        <CardText className="form-group">
          <TextField name='email' type='email'
            floatingLabelText="Email"
            onChange={this.emailHandler}
            value={this.state.email}
            hintText="Email"
            required/><br/>
          <TextField name='password' onChange={this.passwordHandler} floatingLabelText="Password" hintText="Password" type="password" value={this.state.password} errorText={(this.state.loginAttempts===0 && !this.props.user) ? null : this.state.error} required/><br/>
        </CardText>
        <CardActions><RaisedButton type="submit" label="Login" /></CardActions>
        </form>
      </Card>


    );
  }

}

//---- Container--
const mapState = () => ({});
const mapDispatch = {loginUser};

export default connect (mapState,mapDispatch)(LoginForm);
