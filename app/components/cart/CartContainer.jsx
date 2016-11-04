'use strict';

import Cart from './Cart';
import { connect } from 'react-redux';

const mapStateToProps = ({ cart }, { params }) => ({
  cart
});

export default connect(mapStateToProps, null)(Cart);
