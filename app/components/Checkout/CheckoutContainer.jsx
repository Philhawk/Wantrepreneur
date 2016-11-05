'use strict';

import Checkout from './Checkout';
import { connect } from 'react-redux';
import { resetCart } from '../../reducers/cart';

const mapStateToProps = ({ cart }) => ({
  cart
});

const mapDispatchToProps = () => dispatch => ({
  clearCart: () => {
    dispatch(resetCart());
  }
})

export default connect (mapStateToProps, mapDispatchToProps)(Checkout);
