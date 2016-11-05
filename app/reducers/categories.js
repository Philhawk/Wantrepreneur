'use strict';

const initialState = {
  allCategories: [],
  filter: null
};

const ADD_CATEGORIES = 'ADD_CATEGORIES';
const RECEIVE_ALL_CATEGORIES = 'RECEIVE_ALL_CATEGORIES';

export const receiveAllCategories = (categories) => {
  return {
    type: RECEIVE_ALL_CATEGORIES,
    categories
  };
};

export const filterWithCategory = category => {
  return {
    type: ADD_CATEGORIES,
    category
  };
};

export default (state = initialState, action) => {
  switch(action.type) {
    case RECEIVE_ALL_CATEGORIES:
      return {
        ...state, 
        allCategories: action.categories
      }
    case ADD_CATEGORIES:
      return {
        ...state, 
        filter: action.category
      }
    default:
      return state;
  }
}
