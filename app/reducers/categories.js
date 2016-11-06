'use strict';

const _ = require('lodash');

const initialState = {
  allCategories: [],
  filter: []
};

const ADD_CATEGORY = 'ADD_CATEGORY;'
const ADD_CATEGORIES = 'ADD_CATEGORIES';
const REMOVE_CATEGORY = 'REMOVE_CATEGORY';
const RECEIVE_ALL_CATEGORIES = 'RECEIVE_ALL_CATEGORIES';
const RESET_CATEGORY_FILTER = 'RESET_CATEGORY_FILTER';

export const receiveAllCategories = (categories) => {
  return {
    type: RECEIVE_ALL_CATEGORIES,
    payload: categories
  };
};

export const addCategories = categories => {
  return {
    type: ADD_CATEGORIES,
    payload: categories
  };
};

export const addCategory = category => {
  return {
    type: ADD_CATEGORY,
    payload: category
  };
};

export const removeCategory = category => {
  return {
    type: REMOVE_CATEGORY,
    payload: category
  };
};

export const resetCategoryFilter = () => {
  return {
    type: RESET_CATEGORY_FILTER,
    payload: null
  };
}

export default (state = initialState, action) => {
  switch(action.type) {
    case RECEIVE_ALL_CATEGORIES:
      return {
        ...state,
        allCategories: action.payload
      };
    case ADD_CATEGORIES:
      return {
        ...state,
        filter: _.union(state.filter, action.payload)
      };
    case ADD_CATEGORY:
      return {
        ...state,
        filter: _.union(state.filter, [action.payload])
      };
    case REMOVE_CATEGORY:
      return {
        ...state,
        filter: _.difference(state.filter, [action.payload])
      };
    case RESET_CATEGORY_FILTER:
      return {
        ...state,
        filter: []
      };
    default:
      return state;
  }
}
