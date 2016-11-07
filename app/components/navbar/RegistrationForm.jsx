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
      password2 :'',
      match: true
    };

    this.onSubmitSignup       = this.onSubmitSignup.bind(this);
    this.nameHandler          = this.nameHandler.bind(this);
    this.lastnameHandler      = this.lastnameHandler.bind(this);
    this.emailHandler         = this.emailHandler.bind(this);
    this.passwordHandler1     = this.passwordHandler1.bind(this);
    this.passwordHandler2     = this.passwordHandler2.bind(this);
    this.passwordConfirmation = this.passwordConfirmation.bind(this);

  }

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

    this.passwordConfirmation();
  }

  passwordHandler2(evt){
    this.setState({
      password2 : evt.target.value,
    });
    this.passwordConfirmation();

  }

  passwordConfirmation(){
    if (this.state.password1 !== this.state.password2) {
      this.setState({match:true});
    } else this.setState({match : false});

    console.log(this.state.match);
  }

  onSubmitSignup(event){
    event.preventDefault();



    let newUser = {
      name : `${this.state.name} ${this.state.lastName}`,
      email: this.state.email,
      password : this.state.password1
    };
   this.props.signUpUser(newUser);
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

    <div>
        {this.state.match}
      <Card >
        <CardHeader title="Signup as New User"/>
        <form onSubmit={this.onSubmitSignup}>
        <CardText className="form-group" >
          <TextField name='firstName' label='firstName' hintText="First Name" onChange={this.nameHandler} /><br/>
          <TextField name='lastName' hintText="Last Name" onChange={this.lastnameHandler}/><br/>
          <TextField name='email' type="email" hintText="Email" onChange={this.emailHandler} required/><br/>
          <TextField name='password1' hintText="Password" type="password" onChange={this.password1Handler}
           required/><br/>
          <TextField name='password2' hintText="Confirm Password" type="password" onChange={this.password2Handler}  required/><br/>
          </CardText>
        <CardActions><RaisedButton disabled={false} type="submit" label="Submit"/></CardActions>
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
