//React
import React from 'react';
import {Link} from 'react-router';


import {FlatButton, RaisedButton, Dialog, TextField} from 'material-ui';
import {Card, CardHeader, CardActions, CardText} from 'material-ui';

export default class RegistrationFrom extends React.Component{
  constructor(props){
    super(props);

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
          <TextField hintText="Password" type="password" errorText="Required." errorStyle={requiredFields.errorStyle}       underlineFocusStyle={requiredFields.underlineStyle}/><br/>
          <TextField hintText="Confirm Password" type="password"/><br/>
        </CardText>
        <CardActions><RaisedButton label="Submit" onClick={close}/></CardActions>
      </Card>


    );
  }

}
