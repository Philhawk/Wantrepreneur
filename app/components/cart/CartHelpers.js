'use strict';

import { addToCart,
         removeFromCart,
         resetCart,
         addMultipleToCart,
         removeMultipleFromCart
       } from '../../reducers/cart';

const _ = require('lodash');

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

export const resetCartThunk = () => dispatch => {
  window.localStorage.setItem('cart', '[]' );
  dispatch(resetCart());
};

export const removeMultipleFromCartThunk = (products) => dispatch => {
  let local = window.localStorage.getItem('cart');
  if (!local) { local = '[]'; }
  const windowCart = JSON.parse(local);
  window.localStorage.setItem('cart', JSON.stringify(windowCart, products, 'id'));
  dispatch(removeMultipleFromCart(windowCart));
};
