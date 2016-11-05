'use strict';

const initialState = [];

const ADD_PRICE_RANGE = 'ADD_PRICE_RANGE';

export const filterWithPrice = priceRange => {
  return {
    type: ADD_PRICE_RANGE,
    priceRange
  };
};

export default (state = initialState, action) => {
  switch(action.type) {
    case ADD_PRICE_RANGE:
      return action.priceRange;
    default:
      return state;
  }
}
