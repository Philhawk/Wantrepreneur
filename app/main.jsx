
import React from 'react';
import {render} from 'react-dom';
import { Provider } from 'react-redux';
import { Router, hashHistory, Route, IndexRoute} from 'react-router';

import store from './store';
import routes from './routes';


render (
  <Provider store={store}>
    <Router history={hashHistory}>
    {routes}
    </Router>
  </Provider>,
  document.getElementById('main')
);
