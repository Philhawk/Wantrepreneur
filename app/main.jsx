'use strict'
import React from 'react'
import {render} from 'react-dom'
import { Provider } from 'react-redux'

import store from './store'
import Root from './components/Root'
import AllOptions from './components/all-options/AllOptionsContainer';

render (
  <Provider store={store}>

    <AllOptions />
  </Provider>,
  document.getElementById('main')
)