

import React from 'react';
import { Route, IndexRedirect} from 'react-router';
import ReactDom from 'react-dom';
import {connect, Provider} from 'react-redux';

import store from './store';
import Routes from './routes';

ReactDom.render (
  <Provider store={store}>
      <Routes/>
  </Provider>,
  document.getElementById('main')
);
