'use strict';

import React from 'react';
import Navbar from '../navbar/Navbar';
import { Grid, Col, Row } from 'react-bootstrap';

export default class extends React.Component {
  constructor (props) {
    super(props);
  }

  componentDidMount() {
    /* window.localStorage.set('cart', this.props.cart);*/
  }

  render () {
    return (
      <div>
        <Navbar />
        <Grid>
          <Row>
            {this.props.cart.map(cartItem => {
              <Col sm={12}>
                cartItem.name;
              </Col>
            })}
          </Row>
        </Grid>
      </div>
    );
  }
}
