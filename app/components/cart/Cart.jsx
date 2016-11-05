'use strict';

import React from 'react';
import NavbarContainer from '../navbar/NavbarContainer';
import { Grid, Col, Row } from 'react-bootstrap';
import CheckoutContainer from '../Checkout/CheckoutContainer';
import io from 'socket.io-client';
let socket;

export default class extends React.Component {
  constructor (props) {
    super(props);
    this.soldProducts = this.soldProducts.bind(this);
  }

  componentDidMount() {
    this.props.getCart();
    socket = io('http://localhost:8080');
    socket.on('sold-products', this.soldProducts);
  }

  componentWillUnmount() {
    socket.off('sold-products', null);
    socket.disconnect();
    socket = null;
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
          <Row>
            <Col sm={12} key="stripe">
              <CheckoutContainer />
            </Col>
          </Row>
        </Grid>
      </div>
    );
  }

  soldProducts(products) {
    this.props.removeMultipleFromCart(products);
  }
}
