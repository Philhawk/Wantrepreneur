'use strict';

import Checkout from './Checkout';
import { connect } from 'react-redux';

const mapStateToProps = ({ cart }, { params }) => ({
  cart
});

export default connect (mapStateToProps, null)(Checkout);
