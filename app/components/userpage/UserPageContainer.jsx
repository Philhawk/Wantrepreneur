'use strict';

import UserPage from './UserPage';
import { connect } from 'react-redux';

const mapStateToProps = ({ order, user }) => ({
  order,
  user
});

const mapDispatchToProps = () => dispatch => ({
});

export default connect(mapStateToProps, mapDispatchToProps)(UserPage);
