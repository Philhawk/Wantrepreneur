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

    this.onSubmitSignup = this.onSubmitSignup.bind(this);
  }

  onSubmitSignup(event){

    console.log(this.props);
    console.log(event + "event");
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
        <CardText>
          <TextField name='firstName' hintText="First Name"/><br/>
          <TextField name='lastName' hintText="Last Name"/><br/>
          <TextField name="email" type="email" hintText="Email"/><br/>
          <TextField hintText="Password" type="password"
          errorText="Required." errorStyle={requiredFields.errorStyle}       underlineFocusStyle={requiredFields.underlineStyle}/><br/>
          <TextField hintText="Confirm Password" type="password"           errorText="Required." errorStyle={requiredFields.errorStyle}       underlineFocusStyle={requiredFields.underlineStyle}/><br/>
          </CardText>
        <CardActions><RaisedButton type="submit" label="Submit" onClick={close} /></CardActions>
        </form>
      </Card>


    );
  }

}

/* ---- Container ---- */
const mapState = () => ({});
const mapDispatch = {signUpUser};

export default connect(mapState,mapDispatch)(RegistrationForm);
