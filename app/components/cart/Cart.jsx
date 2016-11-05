'use strict';

import React from 'react';
import NavbarContainer from '../navbar/NavbarContainer';
import { Grid, Col, Row } from 'react-bootstrap';
import CheckoutContainer from '../Checkout/CheckoutContainer';
import io from 'socket.io-client';
let socket;
import {Card, CardActions, CardHeader, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';

export default class extends React.Component {
  constructor (props) {
    super(props);
    this.soldProducts = this.soldProducts.bind(this);
    this.removeFromCart = this.removeFromCart.bind(this);
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

  removeFromCart(item) {
    this.props.removeFromCart(item);
  }

  render () {
    return (
      <div>
        <NavbarContainer />
        <Grid>
          <Row>

            {this.props.cart.length > 0 ? this.props.cart.map(cartItem => (
              <Col sm={12} lg={6} key={ cartItem.id } className='cart-item'>
                <Card>
                  <Row>
                    <Col lg={6}>
                       <CardHeader title={cartItem.name} subtitle={'$' + cartItem.price} actAsExpander={true} showExpandableButton={true} />
                       <CardActions>
                         <FlatButton label="Remove from Cart" onClick={() => this.removeFromCart(cartItem)}/>
                       </CardActions>
                     </Col>
                     <Col lg={6}>
                      <img className='cart-image' src={ cartItem.image}/>
                     </Col>
                 </Row>
              </Card>
              </Col>
            )) : null}
          </Row>
          <Row>
              <CheckoutContainer />
          </Row>
        </Grid>
      </div>
    );
  }

  soldProducts(products) {
    this.props.removeMultipleFromCart(products);
  }
}
