'use strict';

import Cart from './Cart';
import { connect } from 'react-redux';
import { getCartFromLocal } from './CartHelpers';
import { removeMultipleFromCartThunk } from '../cart/CartHelpers';

const mapStateToProps = ({ cart }, { params }) => ({
  cart
});

const mapDispatchToProps = () => dispatch => ({
  getCart: () => {
    dispatch(getCartFromLocal());
  },
  removeMultipleFromCart: products => {
    dispatch(removeMultipleFromCartThunk(products));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(Cart);
