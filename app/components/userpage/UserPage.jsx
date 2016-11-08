'use strict';

import React from 'react';
import NavbarContainer from '../navbar/NavbarContainer';
import { Grid, Col, Row } from 'react-bootstrap';
import {Card, CardActions, CardHeader, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';

export default class UserPage extends React.Component {
  constructor (props) {
    super(props);
  }

  render () {
    return (
      <div>
        <NavbarContainer />
        <Grid>
          <Row>
            <Col sm={12}>
              <h1 className='other-heading'><span className='blue-animation'>Welcome to your User Page {this.props.user && this.props.user.name}</span></h1>
              <h3 className='description-headline'>First, let's pick a category for your dream business</h3>
              <br/>
            </Col>
          </Row>

          <Row>

          </Row>
        </Grid>
      </div>
    );
  }
}
