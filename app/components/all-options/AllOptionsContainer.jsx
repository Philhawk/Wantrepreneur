'use strict';

import axios from 'axios';
import { connect } from 'react-redux';
import AllOptions from './AllOptions';
import { receiveAllProducts } from '../../reducers/products';
import { addToCart, setCart } from '../../reducers/cart';

const receiveProducts = () => dispatch => {
  axios.get('/api/products')
  .then(products => dispatch(receiveAllProducts(products.data)));
};

const addToCartThunk = product => dispatch => {
  let local = window.localStorage.getItem('cart');
  if (!local) { local = '[]'; }
  const windowCart = JSON.parse(local);
  window.localStorage.setItem('cart', JSON.stringify([...windowCart, product]));
  dispatch(addToCart(product));
};

const getCartFromLocal = () => dispatch => {
  const local = window.localStorage.getItem('cart');
  if(local) {
    const windowCart = JSON.parse(local);
    if (Array.isArray(windowCart)) {
      dispatch(setCart(windowCart));
    }
  }
};

const mapStateToProps = ({products}, {params}) => ({
  products
});

const mapDispatchToProps = () => dispatch => ({
	getProducts: () => dispatch(receiveProducts()),
  addItemToCart: product => {
    dispatch(addToCartThunk(product));
  },
  getCart: () => {
    dispatch(getCartFromLocal());
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(AllOptions);
