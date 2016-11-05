'use strict';

import Cart from './Cart';
import { connect } from 'react-redux';
import { getCartFromLocal, removeFromCartThunk } from './CartHelpers';

const mapStateToProps = ({ cart }, { params }) => ({
  cart
});

const mapDispatchToProps = () => dispatch => ({
  getCart: () => {
    dispatch(getCartFromLocal());
  },
  removeFromCart: (item) => {
    dispatch(removeFromCartThunk(item));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(Cart);
