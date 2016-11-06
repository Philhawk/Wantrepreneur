'use strict';

const initialState = {};

const RECEIVE_ORDER = 'RECEIVE_ORDER';

export const receiveOrder = (order) => {
  return {
    type: RECEIVE_ORDER,
    payload: order
  };
};

export default (state = initialState, action) => {
  switch(action.type) {
    case RECEIVE_ORDER:
      return action.payload;
    default:
      return state;
  }
};
