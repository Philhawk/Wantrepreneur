import { combineReducers } from 'redux';
import products from './products';
import cart from './cart';
import categories from './categories';
import price from './price';

export default combineReducers({
  products,
  cart,
  categories,
  price
});
