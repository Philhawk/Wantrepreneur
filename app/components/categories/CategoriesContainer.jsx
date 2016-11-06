'use strict';

import axios from 'axios';
import { connect } from 'react-redux';
import Categories from './Categories';
import { receiveAllCategories, addCategory } from '../../reducers/categories';


export const receiveCategories = () => dispatch => {
	axios.get('/api/categories')
	.then(categories => dispatch(receiveAllCategories(categories.data)));
}

// Shouldn't need to push to props
const mapStateToProps = ({categories}) => ({
	categories
});

const mapDispatchToProps = () => dispatch => ({
	fetchCategories: () => {
		dispatch(receiveCategories());
	},
	addCategory: (category) => {
		dispatch(addCategory(category));
	}
});

export default connect(mapStateToProps, mapDispatchToProps)(Categories);
