'use strict';

const initialState = false;

const PRODUCTS_LOADING = 'PRODUCTS_LOADING';
const PRODUCTS_NOT_LOADING = 'PRODUCTS_NOT_LOADING';

export const productsLoading = () => {
  return {
    type: PRODUCTS_LOADING,
    payload: true
  };
};

export const productsNotLoading = () => {
  return {
    type: PRODUCTS_NOT_LOADING,
    payload: false
  };
};

export default (state = initialState, action) => {
  switch(action.type) {
    case PRODUCTS_LOADING:
    case PRODUCTS_NOT_LOADING:
      return action.payload;
    default:
      return state;
  }
};
