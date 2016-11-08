'use strict';

import Navigation from './Navbar';
import { connect } from 'react-redux';
import {logoutUser, loginUser} from '../../reducers/user'

const mapStateToProps = ({ cart, user }) => ({
  cart,
  user
});

const mapDispatch = {logoutUser, loginUser}

export default connect(mapStateToProps, mapDispatch)(Navigation);
