'use strict';

import Checkout from './Checkout';
import { connect } from 'react-redux';
import { resetCartThunk } from '../cart/CartHelpers';
import { removeMultipleProducts } from '../../reducers/products';

const mapStateToProps = ({ cart }) => ({
  cart
});

const mapDispatchToProps = () => dispatch => ({
  clearCart: () => {
    dispatch(resetCartThunk());
  },
  removeProducts: (products) => {
    dispatch(removeMultipleProducts(products));
  }
})

export default connect (mapStateToProps, mapDispatchToProps)(Checkout);
