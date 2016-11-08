import React from 'react';
import { Route, IndexRoute, browserHistory, Router } from 'react-router';

//components
import Root from './components/RootContainer';
import CategoriesContainer from './components/categories/CategoriesContainer';
import PriceContainer from './components/price/PriceContainer';
import AllOptionsContainer from './components/all-options/AllOptionsContainer';
import CartContainer from './components/cart/CartContainer';
import ThanksContainer from './components/thanks/ThanksContainer';
import UserPageContainer from './components/userpage/UserPageContainer';

const routes =()=> (
  <Router history={browserHistory}>
    <Route path='/'>
      <IndexRoute component={Root}/>
        <Route component={ CategoriesContainer } path='/categories'/>
        <Route component={ PriceContainer } path='/price'/>
        <Route component={ AllOptionsContainer } path='/all-options'/>
        <Route component={ CartContainer } path='/cart' />
        <Route component={ ThanksContainer } path='/thanks' />
        <Route component={ UserPageContainer } path='/userpage' />
    </Route>
  </Router>
);

export default routes;
