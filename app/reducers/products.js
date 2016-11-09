'use strict';

const _ = require('lodash');

const initialState = [];

const RECEIVE_ALL_PRODUCTS = 'RECEIVE_ALL_PRODUCTS';
const REMOVE_MULTIPLE_PRODUCTS = 'REMOVE_MULTIPLE_PRODUCTS';

export const receiveAllProducts = (products) => {
  return {
    type: RECEIVE_ALL_PRODUCTS,
    payload: products
  };
};

export const removeMultipleProducts = (products) => {
  return {
    type: REMOVE_MULTIPLE_PRODUCTS,
    payload: products
  };
};

export default (state = initialState, action) => {
  switch(action.type) {
    case RECEIVE_ALL_PRODUCTS:
      return action.payload;
    case REMOVE_MULTIPLE_PRODUCTS:
      return _.differenceBy(state, action.payload, 'id');
    default:
      return state;
  }
};