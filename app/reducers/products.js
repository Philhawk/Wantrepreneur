const initialState = [];

const RECEIVE_ALL_PRODUCTS = 'RECEIVE_ALL_PRODUCTS';

export const receiveAllProducts = (products) => {
  return {
    type: RECEIVE_ALL_PRODUCTS,
    payload: products
  };
};

export default (state = initialState, action) => {
  switch(action.type) {
    case RECEIVE_ALL_PRODUCTS:
      return action.payload;
    default:
      return state;
  }
};
