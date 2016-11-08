'use strict';

import axios from 'axios';
import UserPage from './UserPage';
import { connect } from 'react-redux';
import { receiveOrders } from '../../reducers/orders';

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
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(UserPage);


