'use strict';

import Navigation from './Navbar';
import { connect } from 'react-redux';
import {logoutUser} from '../../reducers/user'
import { getCartFromLocal } from '../cart/CartHelpers';

const mapStateToProps = ({ cart, user }) => ({
  cart,
  user
});

const mapDispatchToProps = () => dispatch => ({
  logoutUser: () => {
    dispatch(logoutUser());
  },
  getLocalStorage: () => {
    dispatch(getCartFromLocal());
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(Navigation);
