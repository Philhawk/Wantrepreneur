'use strict';

import Navigation from './Navbar';
import { connect } from 'react-redux';
import {logoutUser} from '../../reducers/user'
import { removeMultipleFromCartThunk } from '../cart/CartHelpers';

const mapStateToProps = ({ cart, user }) => ({
  cart,
  user
});

/* const mapDispatch = {logoutUser}*/
const mapDispatchToProps = () => dispatch => ({
  logoutUser() {
    dispatch(logoutUser());
  },
  removeMultipleFromCart(products) {
    dispatch(removeMultipleFromCartThunk(products));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(Navigation);
