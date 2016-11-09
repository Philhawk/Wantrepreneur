import React from 'react';
import injectTapEventPlugin from "react-tap-event-plugin";
import ReactDom from 'react-dom';
import { Provider } from 'react-redux';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { removeMultipleProducts } from './reducers/products';
import { removeMultipleFromCart } from './reducers/cart';

import store from './store';
import Routes from './routes';

/* const socket = io.connect('http://localhost');*/
const io = require('socket.io-client');
const socket = io.connect();
window.clientSocket = socket;

socket.on('sold-products', (products) => {
  store.dispatch(removeMultipleProducts(products));
  store.dispatch(removeMultipleFromCart(products));
  console.log('removing products from all-options and cart');
});

//Needed for onTouchTap
//Can go away when react 1.0 release
//Check this repo:
//https://github.com/zilverline/react-tap-event-plugin
injectTapEventPlugin();



ReactDom.render (
  <Provider store={store}>
    <MuiThemeProvider>
      <Routes/>
    </MuiThemeProvider>
  </Provider>,
  document.getElementById('main')
);
