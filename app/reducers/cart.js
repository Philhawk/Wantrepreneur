'use strict';

const _ = require('lodash');

const initialState = [];

const ADD_TO_CART = 'ADD_TO_CART';
const RESET_CART = 'RESET_CART';
const SET_CART = 'SET_CART';

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

export const setCart = (newCart) => {
  return {
    type: SET_CART,
    payload: newCart
  };
};

export default (state = initialState, action) => {
  switch(action.type) {
    case ADD_TO_CART:
      // return [...state, action.payload];
      return _.unionBy(state, [action.payload], "id");
    case RESET_CART:
      return [];
    case SET_CART:
      return action.payload;
    default:
      return state;
  }
}
