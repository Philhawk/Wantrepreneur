'use strict';

import React from 'react';
import NavbarContainer from '../navbar/NavbarContainer';
import { Grid, Col, Row } from 'react-bootstrap';
import {Card, CardActions, CardHeader, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';

export default class extends React.Component {
  constructor (props) {
    super(props);
  }

  componentDidMount() {

  }

  componentWillUnmount() {

  }

  render () {
    return (
      <div>
        <NavbarContainer />
        <Grid>
          <Row>

            <p>{this.props.order}</p>
            {console.log(this.props.order)}
          </Row>
        </Grid>
      </div>
    );
  }
}
