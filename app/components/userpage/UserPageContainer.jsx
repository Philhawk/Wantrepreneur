'use strict';

import axios from 'axios';
import UserPage from './UserPage';
import { connect } from 'react-redux';
import { receiveOrders } from '../../reducers/orders';
import { receiveProducts } from '../all-options/AllOptionsContainer';
import {createProduct} from '../../reducers/products';

const fetchOrders = () => dispatch => {
  axios.get(`/api/orders`)
    .then(orders => {
      dispatch(receiveOrders(orders.data));
    });
};

const mapStateToProps = ({ user, products, orders }) => ({
  user,
  products,
  orders
});

const mapDispatchToProps = () => dispatch => ({
  getOrders: () => {
    dispatch(fetchOrders());
  },
  getProducts: () => {
    dispatch(receiveProducts());
  },
  createOneProduct: (product) => {
    dispatch(createProduct(product));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(UserPage);


