'use strict';

const initialState = false;

const ORDER_LOADING = 'ORDER_LOADING';
const ORDER_NOT_LOADING = 'ORDER_NOT_LOADING';

export const orderLoading = () => {
  return {
    type: ORDER_LOADING,
    payload: true
  };
};

export const orderNotLoading = () => {
  return {
    type: ORDER_NOT_LOADING,
    payload: false
  };
};

export default (state = initialState, action) => {
  switch(action.type) {
    case ORDER_LOADING:
    case ORDER_NOT_LOADING:
      return action.payload;
    default:
      return state;
  }
};
