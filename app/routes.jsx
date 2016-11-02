import React from 'react';
import {Route, IndexRoute,Redirect} from "react-router";

//components
import Root from "./components/RootContainer";
import CategoriesComponent from "./components/categories/Categories";
import PriceComponent from "./components/price/Price";

const routes = (
  <Route path='/'>
    <IndexRoute component={Root}/>
    <Route component={ CategoriesComponent } path='/categories'/>
    <Route component={ PriceComponent } path='/price'/>
  </Route>
)

export default routes;
