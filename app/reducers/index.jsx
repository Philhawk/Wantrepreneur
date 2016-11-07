import { combineReducers } from 'redux';
import products from './products';
import cart from './cart';
import categories from './categories';
import price from './price';
import user from './user.js';
import productsLoading from './productsLoading';
import orderLoading from './orderLoading';
import order from './order';

export default combineReducers({
  products,
  cart,
  categories,
  price,
  productsLoading,
  user,
  order,
  orderLoading
});
