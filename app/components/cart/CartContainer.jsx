'use strict';

import Cart from './Cart';
import { connect } from 'react-redux';
import { getCartFromLocal } from './CartHelpers';

const mapStateToProps = ({ cart }) => ({
  cart
});

const mapDispatchToProps = () => dispatch => ({
  getCart: () => {
    dispatch(getCartFromLocal());
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(Cart);
