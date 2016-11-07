//React
import React from 'react';
import {Link} from 'react-router';
// redux
import {connect} from 'react-redux';
import {signUpUser} from '../../reducers/RegistrationForm';

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
      password2 :''
    };

    this.onSubmitSignup = this.onSubmitSignup.bind(this);
    this.nameHandler =this.nameHandler.bind(this);
    this.lastnameHandler =this.lastnameHandler.bind(this);
    this.emailHandler =this.emailHandler .bind(this);
    this.passwordHandler1 =this.passwordHandler1 .bind(this);
    this.passwordHandler2 =this.passwordHandler2 .bind(this);

  }

  nameHandler(evt){
    console.log(evt.target.value);
    this.setState({
      name : evt.target.value
    });
  }
  lastnameHandler(evt){
    console.log(evt.target.value);
    this.setState({
      lastName : evt.target.value
    });
  }
  emailHandler(evt){
    console.log(evt.target.value);
    this.setState({
      email : evt.target.value
    });
  }
  passwordHandler1(evt){
    console.log(evt.target.value);
    this.setState({
      password1 : evt.target.value
    });
  }
  passwordHandler2(evt){
    console.log(evt.target.value);
    this.setState({
      password2 : evt.target.value
    });
  }

  onSubmitSignup(event){
    event.preventDefault();
    console.log(this.state);
    console.log(event + "event");

  //  this.props.signUpUser("myUser");
  }


  render(){
    let {close} = this.props;

    let requiredFields ={
      errorStyle: {
        color: '#F4E04D',
      },
      underlineStyle: {
        borderColor: '#54F2f2',
      }
    };



    return(
      <Card >
        <CardHeader title="Signup as New User"/>
        <form onSubmit={this.onSubmitSignup}>
        <CardText className="form-group" >
          <TextField name='firstName' label='firstName' hintText="First Name" onChange={this.nameHandler} /><br/>
          <TextField name='lastName' hintText="Last Name" onChange={this.lastnameHandler}/><br/>
          <TextField name='email' type="email" hintText="Email" onChange={this.emailHandler} required/><br/>
          <TextField name='password' hintText="Password" type="password" onChange={this.password2}
           required/><br/>
          <TextField name='password1' hintText="Confirm Password" type="password" onChange={this.password2}  required/><br/>
          </CardText>
        <CardActions><RaisedButton type="submit" label="Submit"/></CardActions>
        </form>
      </Card>


    );
  }

}

/* ---- Container ---- */
const mapState = () => ({});
const mapDispatch = {signUpUser};

export default connect(mapState,mapDispatch)(RegistrationForm);
