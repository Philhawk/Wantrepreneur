'use strict';

import { addToCart } from '../../reducers/cart';

export const getCartFromLocal = () => dispatch => {
  const local = window.localStorage.getItem('cart');
  if(local) {
    const windowCart = JSON.parse(local);
    if (Array.isArray(windowCart)) {
      // dispatch(setCart(windowCart));
      windowCart.forEach(product => {
        dispatch(addToCart(product));
      });
    }
  }
};

export const addToCartThunk = product => dispatch => {
  let local = window.localStorage.getItem('cart');
  if (!local) { local = '[]'; }
  const windowCart = JSON.parse(local);
  window.localStorage.setItem('cart', JSON.stringify([...windowCart, product]));
  dispatch(addToCart(product));
}
