'use strict';

const _ = require('lodash');

import { addToCart, removeFromCart, addMultipleToCart } from '../../reducers/cart';

const setLocalCartFromArray = cartArray => {
  window.localStorage.setItem('cart', JSON.stringify(cartArray));
};

const getLocalCartAsArray = () => {
  const local = window.localStorage.getItem('cart');
  if (local) {
    return JSON.parse(local);
  }
  return [];
};

export const getCartFromLocal = () => dispatch => {
  const windowCart = getLocalCartAsArray();
  dispatch(addMultipleToCart(windowCart));
};

export const addToCartThunk = product => dispatch => {
  const windowCart = getLocalCartAsArray();
  setLocalCartFromArray(_.unionBy(windowCart, [product], 'id'));
  dispatch(addToCart(product));
};

export const removeFromCartThunk = product => dispatch => {
  const windowCart = getLocalCartAsArray();
  setLocalCartFromArray(_.differenceBy(windowCart, [product], 'id'));
  dispatch(removeFromCart(product));
};
