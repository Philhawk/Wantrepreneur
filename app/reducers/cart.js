'use strict';

const _ = require('lodash');

const initialState = [];

const ADD_TO_CART = 'ADD_TO_CART';
const RESET_CART = 'RESET_CART';
const ADD_MULTIPLE_TO_CART = 'ADD_MULTIPLE_TO_CART';

export const addToCart = product => {
  return {
    type: ADD_TO_CART,
    payload: product
  };
};

export const resetCart = () => {
  return {
    type: RESET_CART,
    payload: null
  };
};

export const addMultipleToCart = (products) => {
  return {
    type: ADD_MULTIPLE_TO_CART,
    payload: products
  };
};

export default (state = initialState, action) => {
  switch(action.type) {
    case ADD_TO_CART:
      return _.unionBy(state, [action.payload], 'id');
    case RESET_CART:
      return [];
    case ADD_MULTIPLE_TO_CART:
      return _.unionBy(state, action.payload, 'id');
    default:
      return state;
  }
}
