'use strict';

import Cart from './Cart';
import { connect } from 'react-redux';
import { setCart } from '../../reducers/cart';
import { getCartFromLocal } from './CartHelpers';

const mapStateToProps = ({ cart }, { params }) => ({
  cart
});

const mapDispatchToProps = () => dispatch => ({
  getCart: () => {
    dispatch(getCartFromLocal());
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(Cart);
