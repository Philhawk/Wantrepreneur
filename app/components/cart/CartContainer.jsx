'use strict';

import Cart from './Cart';
import { connect } from 'react-redux';
import { removeFromCartThunk, removeMultipleFromCartThunk } from './CartHelpers';

const mapStateToProps = ({ cart }) => ({
  cart
});

const mapDispatchToProps = () => dispatch => ({
  removeMultipleFromCart: products => {
    dispatch(removeMultipleFromCartThunk(products));
  },
  removeFromCart: (item) => {
    dispatch(removeFromCartThunk(item));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(Cart);
