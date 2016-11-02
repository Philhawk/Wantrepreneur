
import React from 'react';
import {render} from 'react-dom';
import { Provider } from 'react-redux';
import { Router, hashHistory, Route, IndexRoute} from 'react-router';

import store from './store'
import Root from './components/Root'

render (
  <Provider store={store}>

    <IndexRoute component={Root}/>
  </Provider>,
  document.getElementById('main')
)
