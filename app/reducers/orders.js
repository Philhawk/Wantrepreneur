'use strict';

const initialState = [];

const RECEIVE_ORDERS = 'RECEIVE_ORDERS';

export const receiveOrders = (orders) => {
  return {
    type: RECEIVE_ORDERS,
    payload: orders
  };
};

export default (state = initialState, action) => {
  switch(action.type) {
    case RECEIVE_ORDERS:
      return action.payload;
    default:
      return state;
  }
};
