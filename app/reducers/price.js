'use strict';

const initialState = 0;

const ADD_PRICE = 'ADD_PRICE';

export const addPrice = price => {
  return {
    type: ADD_PRICE,
    price
  };
};

export default (state = initialState, action) => {
  switch(action.type) {
    case ADD_PRICE:
      return action.price;
    default:
      return state;
  }
}
