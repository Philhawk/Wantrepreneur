'use strict';

const initialState = [];

const ADD_TO_CART = 'ADD_TO_CART';
const RESET_CART = 'RESET_CART';

export const addToCart = (product) => {
  return {
    type: ADD_TO_CART,
    payload: product
  };
};

export const resetCart = () => {
  return {
    type: ADD_TO_CART,
    payload: null
  };
};

export default (state = initialState, action) => {
  switch(action.type) {
    case ADD_TO_CART:
      return [...state, action.payload];
    case RESET_CART:
      return [];
    default:
      return state;
  }
}
