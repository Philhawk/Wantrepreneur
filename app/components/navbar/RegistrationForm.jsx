//React
import React from 'react';
import {Link} from 'react-router';
// redux
import {connect} from 'react-redux';
import {signUpUser} from '../../reducers/user';

// material-ui
import {FlatButton, RaisedButton, Dialog, TextField} from 'material-ui';
import {Card, CardHeader, CardActions, CardText} from 'material-ui';

class RegistrationForm extends React.Component{
  constructor(props){
    super(props);

    this.state = {
      name : "",
      lastname: '',
      email: '',
      password1 :'',
      password2 :'',
      signAttempted: 0,
      error : "Email already registered"
    };

    this.onSubmitSignup       = this.onSubmitSignup.bind(this);
    this.nameHandler          = this.nameHandler.bind(this);
    this.lastnameHandler      = this.lastnameHandler.bind(this);
    this.emailHandler         = this.emailHandler.bind(this);
    this.passwordHandler1     = this.passwordHandler1.bind(this);
    this.passwordHandler2     = this.passwordHandler2.bind(this);
    this.attempted            = this.attempted.bind(this);
  }

// EventHandlers
  nameHandler(evt){
    this.setState({
      name : evt.target.value
    });
  }

  lastnameHandler(evt){
    this.setState({
      lastName : evt.target.value
    });
  }

  emailHandler(evt){
    this.setState({
      email : evt.target.value
    });
  }

  passwordHandler1(evt){
    this.setState({
      password1 : evt.target.value,
    });
  }

  passwordHandler2(evt){
    this.setState({
      password2 : evt.target.value,
    });
  }

// submit handler
  onSubmitSignup(event){
    event.preventDefault();

    let newUser = {
      name : `${this.state.name} ${this.state.lastName}`,
      email: this.state.email,
      password : this.state.password1
    };
   this.props.signUpUser(newUser);
   this.attempted();
  }

  attempted(){
    this.setState({
      password1: "",
      password2: "",
      signAttempted: this.state.signAttempted +1
    });

  }


  render(){
    let {close} = this.props;

    let style={
      "height" : "33em",
      "width" : "30em"
    };

    return(

    <div>
      <Card style={style}>
        <CardHeader title="Sign Up as New User"/>
        <form onSubmit={this.onSubmitSignup}>
        <CardText className="form-group" >
          <TextField name='firstName' label='firstName' floatingLabelText="First Name" hintText="First Name" onChange={this.nameHandler} /><br/>
          <TextField name='lastName' label='lastName' floatingLabelText="Last Name" hintText="Last Name" onChange={this.lastnameHandler}/><br/>
          <TextField name='email' type="email" hintText="Email" onChange={this.emailHandler} floatingLabelText="Email" errorText={(this.state.signAttempted===0 && !this.props.user) ? null:this.state.error} required/><br/>
          <TextField name='password1' value={this.state.password1} hintText="Password" type="password" onChange={this.passwordHandler1} floatingLabelText="Password"
           required/><br/>
          <TextField name='password2' value={this.state.password2} hintText="Confirm Password" type="password" floatingLabelText="Confirm Password" onChange={this.passwordHandler2}  required/><br/>
          </CardText>
        <CardActions><RaisedButton disabled={(this.state.password1 !== this.state.password2) ? true : false} type="submit" label="Submit"  /></CardActions>
        </form>
      </Card>
    </div>


    );
  }

}

/* ---- Container ---- */
const mapState = () => ({});
const mapDispatch = {signUpUser};

export default connect(mapState,mapDispatch)(RegistrationForm);
