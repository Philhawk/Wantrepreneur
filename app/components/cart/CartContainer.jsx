'use strict';

import Cart from './Cart';
import { connect } from 'react-redux';
import { setCart } from '../../reducers/cart';

const getCartFromLocal = () => dispatch => {
  const local = window.localStorage.getItem('cart');
  if(local) {
    const windowCart = JSON.parse(local);
    if (Array.isArray(windowCart)) {
      dispatch(setCart(windowCart));
    }
  }
};

const mapStateToProps = ({ cart }, { params }) => ({
  cart
});

const mapDispatchToProps = () => dispatch => ({
  getCart: () => {
    dispatch(getCartFromLocal());
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(Cart);
