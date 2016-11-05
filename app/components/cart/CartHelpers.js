'use strict';

const _ = require('lodash');

import { addToCart, removeFromCart, addMultipleToCart } from '../../reducers/cart';

export const getCartFromLocal = () => dispatch => {
  const local = window.localStorage.getItem('cart');
  if(local) {
    const windowCart = JSON.parse(local);
    if (Array.isArray(windowCart)) {
      dispatch(addMultipleToCart(windowCart));
    }
  }
};

export const addToCartThunk = product => dispatch => {
  let local = window.localStorage.getItem('cart');
  if (!local) { local = '[]'; }
  const windowCart = JSON.parse(local);
  window.localStorage.setItem('cart', JSON.stringify(_.unionBy(windowCart, [product], 'id')));
  dispatch(addToCart(product));
};

export const removeFromCartThunk = product => dispatch => {
  let local = window.localStorage.getItem('cart');
  if (!local) { local = '[]'; }
  const windowCart = JSON.parse(local);
  window.localStorage.setItem('cart', JSON.stringify(_.differenceBy(windowCart, [product], 'id')));
  dispatch(removeFromCart(product));
};
