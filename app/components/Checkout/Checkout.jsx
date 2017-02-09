'use strict';

import React from 'react';
import StripeCheckout from 'react-stripe-checkout';
import axios from 'axios';
import { browserHistory } from 'react-router';

export default class extends React.Component {
  constructor(props) {
    super(props);
    this.onToken = this.onToken.bind(this);
  }

  onToken(token) {
    axios.post('/api/checkout/submit', {
      cart: this.props.cart
    })
      .then((order) => {
        if (!order) { throw new Error('Order submission failed.'); }
        const products = this.props.cart;
        this.props.clearCart();
        browserHistory.push(`/thanks?order=${order.data.orderId}`);
        window.clientSocket.emit('checkout', products);
        this.props.removeProducts(products);
      })
      .catch((err) => {
        console.log(err);
        browserHistory.push('/cart');
      });
  }

  render() {
    return (
      <StripeCheckout
        stripeKey="pk_test_wwtifCBBiRdj5Gqt39peOmPY"
        name="Wantrepreneur"
        description=""
        image="/WPNavbarLogo.png"
        ComponentClass="div"
        amount={ this.props.cart.reduce((agg, product) => agg + (product.price * 100), 0) }
        currency="USD"
        bitcoin
        allowRememberMe
        token={this.onToken}
        reconfigureOnUpdate={false}
        triggerEvent="onTouchTap"
        >
        <div style={{margin:"13px"}}>
        <button className="btn btn-primary">
          Pay Now
        </button>
        </div>
      </StripeCheckout>
    );
  }
}

// Note: you can change the event to `onTouchTap`, `onClick`, `onTouchStart`
// useful if you're using React-Tap-Event-Plugin
