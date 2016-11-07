'use strict';

import axios from 'axios';
import { connect } from 'react-redux';
import Thanks from './Thanks';
import { orderLoading, orderNotLoading } from '../../reducers/orderLoading';
import { receiveOrder } from '../../reducers/order';

const fetchOrder = (orderHash) => dispatch => {
  dispatch(orderLoading());
  axios.get(`/api/orders/thanks?orderId=${orderHash}`)
    .then(order => {
      dispatch(receiveOrder(order.data));
      dispatch(orderNotLoading());
    });
};

const mapStateToProps = ({orderLoading, order}) => ({
  orderLoading,
  order
});

const mapDispatchToProps = () => dispatch => ({
  getOrder: (orderHash) => {
    dispatch(fetchOrder(orderHash));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(Thanks);
