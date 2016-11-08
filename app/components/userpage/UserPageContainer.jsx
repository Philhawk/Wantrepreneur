'use strict';

import UserPage from './UserPage';
import { connect } from 'react-redux';

const mapStateToProps = ({ user, products, order }) => ({
  user,
  products,
  order
});

const mapDispatchToProps = () => dispatch => ({
});

export default connect(mapStateToProps, mapDispatchToProps)(UserPage);
