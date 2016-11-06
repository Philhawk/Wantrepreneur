'use strict';

import axios from 'axios';
import { connect } from 'react-redux';
import AllOptions from './AllOptions';
import { receiveAllProducts, removeMultipleProducts } from '../../reducers/products';
import { getCartFromLocal, addToCartThunk, removeFromCartThunk, removeMultipleFromCartThunk } from '../cart/CartHelpers';
import { receiveCategories } from '../categories/CategoriesContainer';

const receiveProducts = () => dispatch => {
  axios.get('/api/products')
  .then(products => dispatch(receiveAllProducts(products.data)));
};

const mapStateToProps = ({products, cart, categories, price}) => ({
  products,
  categories,
  price,
  cart
});

const mapDispatchToProps = () => dispatch => ({
	getProducts: () => {
    dispatch(receiveProducts());
  },
  addItemToCart: product => {
    dispatch(addToCartThunk(product));
  },
  removeItemFromCart: product => {
    dispatch(removeFromCartThunk(product));
  },
  getCart: () => {
    dispatch(getCartFromLocal());
  },
  removeMultipleFromCart: products => {
    dispatch(removeMultipleFromCartThunk(products));
  },
  removeMultipleProductsFromOptions: products => {
    dispatch(removeMultipleProducts(products));
  },
  getCategories: categories => {
    if (!categories.length) {
      dispatch(receiveCategories());
    }
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(AllOptions);
