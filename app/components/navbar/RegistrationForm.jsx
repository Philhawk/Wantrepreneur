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

    this.onSubmit = this.onSubmit.bind(this);
  }

  onSubmit(event){
    let clientInfo = event.target;
    console.log(this.props + "props aka submit button works");
    console.log(clientInfo);
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
        <CardHeader title="Create New User"/>
        <CardText>

          <TextField hintText="First Name"/><br/>
          <TextField hintText="Last Name"/><br/>
          <TextField hintText="Email"/><br/>
          <TextField hintText="Password" type="password"
          errorText="Required." errorStyle={requiredFields.errorStyle}       underlineFocusStyle={requiredFields.underlineStyle}/><br/>
          <TextField hintText="Confirm Password" type="password"           errorText="Required." errorStyle={requiredFields.errorStyle}       underlineFocusStyle={requiredFields.underlineStyle}/><br/>

        </CardText>
        <CardActions><RaisedButton label="Submit" onClick={this.onSubmit}/></CardActions>
      </Card>


    );
  }

}

/* ---- Container ---- */
const mapState = () => ({});
const mapDispatch = {signUpUser};

export default connect(mapState,mapDispatch)(RegistrationForm);
