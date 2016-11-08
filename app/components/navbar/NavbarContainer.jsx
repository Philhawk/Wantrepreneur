'use strict';

import Navigation from './Navbar';
import { connect } from 'react-redux';
import {logoutUser, loginUser} from '../../reducers/user'
import { getCartFromLocal } from '../cart/CartHelpers';
import { removeMultipleFromCartThunk } from '../cart/CartHelpers';

const mapStateToProps = ({ cart, user }) => ({
  cart,
  user
});

const mapDispatchToProps = () => dispatch => ({
  loginUser: (user) => {
    dispatch(loginUser(user));
  },
  logoutUser: () => {
    dispatch(logoutUser());
  },
  getLocalStorage: () => {
    dispatch(getCartFromLocal());
  },
  removeMultipleFromCart(products) {
    dispatch(removeMultipleFromCartThunk(products));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(Navigation);
