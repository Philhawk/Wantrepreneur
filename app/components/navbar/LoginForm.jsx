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
      password : ''
    };

    this.emailHandler         = this.emailHandler.bind(this);
    this.passwordHandler      = this.passwordHandler.bind(this);
    this.onSubmitSignup       = this.onSubmitSignup.bind(this);

  }

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
      <Card>
        <CardHeader title="Existing User"/>
        <form onSubmit={this.onSubmitSignup}>
        <CardText className="form-group">
          <TextField name='email' onChange={this.emailHandler} hintText="Email" required/><br/>
          <TextField name='password' onChange={this.passwordHandler} hintText="Password" type="password" required/><br/>
        </CardText>
        <CardActions><RaisedButton type="submit" label="Login" onClick={close}/></CardActions>
        </form>
      </Card>


    );
  }

}

//---- Container--
const mapState = () => ({});
const mapDispatch = {loginUser};

export default connect (mapState,mapDispatch)(LoginForm);
