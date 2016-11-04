'use strict';

import Navigation from './Navbar';
import { connect } from 'react-redux';

const mapStateToProps = ({ cart }) => ({
  cart
});

export default connect(mapStateToProps, null)(Navigation);
