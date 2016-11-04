import React from 'react';
import { Route, IndexRoute, browserHistory, Router } from 'react-router';

//components
import Root from './components/RootContainer';
import CategoriesContainer from './components/categories/CategoriesContainer';
import PriceComponent from './components/price/Price';
import AllOptionsContainer from './components/all-options/AllOptionsContainer';
import CartContainer from './components/cart/CartContainer';

const routes =()=> (
  <Router history={browserHistory}>
  <Route path='/'>
    <IndexRoute component={Root}/>
      <Route component={ CategoriesContainer } path='/categories'/>
      <Route component={ PriceComponent } path='/price'/>
      <Route component={ AllOptionsContainer } path='/all-options'/>
      <Route component={ CartContainer } path='/cart' />
  </Route>
  </Router>
);

export default routes;
