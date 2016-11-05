'use strict';

import { connect } from 'react-redux';
import Price from './Price';
import {filterWithPrice} from '../../reducers/price';

const mapDispatchToProps = () => dispatch => ({
	addPriceRange: (priceRange) => {
		dispatch(filterWithPrice(priceRange));
	}
});

export default connect(null, mapDispatchToProps)(Price);
