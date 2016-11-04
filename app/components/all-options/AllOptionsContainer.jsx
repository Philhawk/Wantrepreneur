'use strict';

import axios from 'axios';
import { connect } from 'react-redux';
import AllOptions from './AllOptions';
import { receiveAllProducts } from '../../reducers/products';
import { addToCart, setCart } from '../../reducers/cart';
import { getCartFromLocal, addToCartThunk, removeFromCartThunk } from '../cart/CartHelpers';

const receiveProducts = () => dispatch => {
  axios.get('/api/products')
  .then(products => dispatch(receiveAllProducts(products.data)));
};

const mapStateToProps = ({products}, {params}) => ({
  products
});

const mapDispatchToProps = () => dispatch => ({
	getProducts: () => dispatch(receiveProducts()),
  addItemToCart: product => {
    dispatch(addToCartThunk(product));
  },
  removeItemFromCart: product => {
    dispatch(removeFromCartThunk(product));
  },
  getCart: () => {
    dispatch(getCartFromLocal());
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(AllOptions);
