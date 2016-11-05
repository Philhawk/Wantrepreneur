'use strict';

import Checkout from './Checkout';
import { connect } from 'react-redux';
import { resetCartThunk } from '../cart/CartHelpers';

const mapStateToProps = ({ cart }, { params }) => ({
  cart
});

const mapDispatchToProps = () => dispatch => ({
  clearCart: () => {
    dispatch(resetCartThunk());
  }
})

export default connect (mapStateToProps, mapDispatchToProps)(Checkout);
