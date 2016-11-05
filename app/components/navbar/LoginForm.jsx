//React
import React from 'react';
import {Link} from 'react-router';


import {FlatButton, RaisedButton, Dialog, TextField} from 'material-ui';
import {Card, CardHeader, CardActions, CardText} from 'material-ui';

export default class LoginForm extends React.Component{
  constructor(props){
    super(props);

  }


  render(){

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
        <CardText>
          <TextField hintText="Email"/><br/>
          <TextField hintText="Password" type="password"/><br/>
        </CardText>
        <CardActions><RaisedButton label="Login" onClick={close}/></CardActions>
      </Card>


    );
  }

}
