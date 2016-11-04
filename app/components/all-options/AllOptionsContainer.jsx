'use strict';

import axios from 'axios';
import { connect } from 'react-redux';
import AllOptions from './AllOptions';
import { receiveAllProducts } from '../../reducers/products';
import { addToCart } from '../../reducers/cart';

const receiveProducts = products => dispatch => {
	axios.get('/api/products')
	.then(products => dispatch(receiveAllProducts(products.data)));
};

const mapStateToProps = ({products}, {params}) => ({
  products
});

const mapDispatchToProps = () => dispatch => ({
	getProducts: () => dispatch(receiveProducts()),

  addItemToCart: product => {
    dispatch(addToCart(product));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(AllOptions);
