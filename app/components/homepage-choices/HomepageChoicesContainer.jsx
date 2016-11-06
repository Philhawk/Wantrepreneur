'use strict';

import { connect } from 'react-redux';
import { resetCategoryFilter } from '../../reducers/categories';
import { resetPriceFilter } from '../../reducers/price';
import HomepageChoices from './HomepageChoices';

const mapDispatchToProps = () => dispatch => ({
  resetFilter: () => {
    dispatch(resetCategoryFilter());
    dispatch(resetPriceFilter());
  }
});

export default connect(null, mapDispatchToProps)(HomepageChoices);
