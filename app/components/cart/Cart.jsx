'use strict';

import React from 'react';
import NavbarContainer from '../navbar/NavbarContainer';
import { Grid, Col, Row } from 'react-bootstrap';

export default class extends React.Component {
  constructor (props) {
    super(props);
  }

  componentDidMount() {
    this.props.getCart();
  }

  render () {
    return (
      <div>
        <NavbarContainer />
        <Grid>
          <Row>
            {this.props.cart.length > 0 ? this.props.cart.map(cartItem => (
              <Col sm={12} key={ cartItem.id }>
                {cartItem.name}
              </Col>
            )) : null}
          </Row>
        </Grid>
      </div>
    );
  }
}
