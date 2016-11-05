'use strict';

import { addToCart,
         removeFromCart,
         resetCart,
         addMultipleToCart,
         removeMultipleFromCart
       } from '../../reducers/cart';

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
  window.localStorage.setItem('cart', JSON.stringify([...windowCart, product]));
  dispatch(addToCart(product));
};

export const removeFromCartThunk = product => dispatch => {
  let local = window.localStorage.getItem('cart');
  if (!local) { local = '[]'; }
  const windowCart = JSON.parse(local);
  window.localStorage.setItem('cart', JSON.stringify(windowCart.filter(localProduct => localProduct.id !== product.id)));
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
