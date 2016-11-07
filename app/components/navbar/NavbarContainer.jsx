'use strict';

import Navigation from './Navbar';
import { connect } from 'react-redux';
import {logoutUser} from '../../reducers/user'

const mapStateToProps = ({ cart, user }) => ({
  cart,
  user
});

const mapDispatch = {logoutUser}

export default connect(mapStateToProps, mapDispatch)(Navigation);
