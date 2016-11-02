'use strict';

import axios from 'axios';
import { connect } from 'react-redux';
import AllOptions from './AllOptions';
import { receiveAllProducts } from '../../reducers/products';

const receiveProducts = products => dispatch => {
	axios.get('/api/products')
	.then(products => dispatch(receiveAllProducts(products.data)));
};

const mapStateToProps = ({products}, {params}) => ({
  products
});

const mapDispatchToProps = () => dispatch => ({
	getProducts: products => dispatch(receiveProducts())
});

export default connect(mapStateToProps, mapDispatchToProps)(AllOptions);
