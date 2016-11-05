'use strict';

import Cart from './Cart';
import { connect } from 'react-redux';
import { getCartFromLocal, removeFromCartThunk, removeMultipleFromCartThunk } from './CartHelpers';

const mapStateToProps = ({ cart }) => ({
  cart
});

const mapDispatchToProps = () => dispatch => ({
  getCart: () => {
    dispatch(getCartFromLocal());
  },
  removeMultipleFromCart: products => {
    dispatch(removeMultipleFromCartThunk(products));
  },
  removeFromCart: (item) => {
    dispatch(removeFromCartThunk(item));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(Cart);
