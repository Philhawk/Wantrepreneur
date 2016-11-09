'use strict';

import React from 'react';
import NavbarContainer from '../navbar/NavbarContainer';
import { Grid, Col, Row } from 'react-bootstrap';
import CheckoutContainer from '../Checkout/CheckoutContainer';
import {Card, CardActions, CardHeader, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';

export default class extends React.Component {
  constructor (props) {
    super(props);
    this.removeFromCart = this.removeFromCart.bind(this);
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

            {this.props.cart.length > 0 ? this.props.cart.sort((a, b) => a.name > b.name ? 1 : -1).map(cartItem => (
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
            {
              this.props.cart.length > 0 ? <CheckoutContainer /> : "Cart is empty"
            }
          </Row>
        </Grid>
      </div>
    );
  }
}
