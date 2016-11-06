'use strict';

const initialState = [];

const ADD_PRICE_RANGE = 'ADD_PRICE_RANGE';
const RESET_PRICE_FILTER = 'RESET_PRICE_FILTER';

export const filterWithPrice = priceRange => {
  return {
    type: ADD_PRICE_RANGE,
    payload: priceRange
  };
};

export const resetPriceFilter = () => {
  return {
    type: RESET_PRICE_FILTER,
    payload: null
  };
}

export default (state = initialState, action) => {
  switch(action.type) {
    case ADD_PRICE_RANGE:
      return action.payload;
    case RESET_PRICE_FILTER:
      return [];
    default:
      return state;
  }
}
