'use strict';

import React from 'react';
import StripeCheckout from 'react-stripe-checkout';
import axios from 'axios';

export default class extends React.Component {
  constructor(props) {
    super(props);
    this.onToken = this.onToken.bind(this);
  }

  onToken(token) {
    fetch('/api/checkout/submit', {
      method: 'POST',
      body: this.props.cart
           //JSON.stringify(token),
    })
      .then(response => {
        console.log(response);
        return response.json();
      })
      .then()
      // TODO: error handling for stripe checkout
      .catch(console.error)
  }

  render() {
    return (
      <StripeCheckout
        stripeKey="pk_test_wwtifCBBiRdj5Gqt39peOmPY"
        name="Wantrepreneur"
        description=""
        image="/WPNavbarLogo.png"
        ComponentClass="div"
        amount={ this.props.cart.reduce((agg, product) => agg + product.price, 0) }
        currency="USD"
        bitcoin
        allowRememberMe
        token={this.onToken}
        reconfigureOnUpdate={false}
        // Note: you can change the event to `onTouchTap`, `onClick`, `onTouchStart`
        // useful if you're using React-Tap-Event-Plugin
        triggerEvent="onTouchTap"
        >
        <button className="btn btn-primary">
          Pay Now
        </button>
      </StripeCheckout>
    );
  }
}
