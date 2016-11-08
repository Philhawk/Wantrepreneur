import { combineReducers } from 'redux';
import products from './products';
import cart from './cart';
import categories from './categories';
import price from './price';
import user from './user';
import productsLoading from './productsLoading';
import orderLoading from './orderLoading';
import order from './order';
import orders from './orders';

export default combineReducers({
  products,
  cart,
  categories,
  price,
  productsLoading,
  user,
  order,
  orders,
  orderLoading
});
