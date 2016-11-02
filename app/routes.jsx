import React from 'react';
import {Route, IndexRoute,Redirect} from 'react-router';

//components
import Root from './components/RootContainer';
import CategoriesComponent from './components/categories/Categories';
import PriceComponent from './components/price/Price';
import AllOptionsContainer from './components/all-options/AllOptionsContainer';

const routes = (
  <Route path='/'>
    <IndexRoute component={Root}/>
      <Route component={ CategoriesComponent } path='/categories'/>
      <Route component={ PriceComponent } path='/price'/>
      <Route component={ AllOptionsContainer } path='/all-options'/>
  </Route>
)

export default routes;
