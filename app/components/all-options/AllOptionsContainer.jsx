'use strict';

import axios from 'axios';
import { connect } from 'react-redux';
import AllOptions from './AllOptions';
import { receiveAllProducts, removeMultipleProducts } from '../../reducers/products';
import { addToCartThunk, removeFromCartThunk, removeMultipleFromCartThunk } from '../cart/CartHelpers';
import { receiveCategories } from '../categories/CategoriesContainer';
import { addCategory, removeCategory } from '../../reducers/categories';
import { productsLoading, productsNotLoading } from '../../reducers/productsLoading';
import { filterWithPrice } from '../../reducers/price';

const receiveProducts = () => dispatch => {
  dispatch(productsLoading());
  axios.get('/api/products')
    .then(products => {
      dispatch(receiveAllProducts(products.data));
      dispatch(productsNotLoading());
    });
};

const mapStateToProps = ({products, cart, categories, price, productsLoading}) => ({
  products,
  categories,
  price,
  cart,
  productsLoading
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
  },
  addCategoryToFilter: category => {
    dispatch(addCategory(category));
  },
  removeCategoryFromFilter: category => {
    dispatch(removeCategory(category));
  },
  addPriceRange: priceRange => {
    dispatch(filterWithPrice(priceRange));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(AllOptions);
