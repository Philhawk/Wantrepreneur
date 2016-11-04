import React from 'react';
import injectTapEventPlugin from 'react-tap-event-plugin';
import ReactDom from 'react-dom';
import { Provider } from 'react-redux';

import store from './store';
import Routes from './routes';

//Needed for onTouchTap
//Can go away when react 1.0 release
//Check this repo:
//https://github.com/zilverline/react-tap-event-plugin
injectTapEventPlugin();

ReactDom.render (
  <Provider store={store}>
      <Routes/>
  </Provider>,
  document.getElementById('main')
);
