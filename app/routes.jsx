import React from 'react';
import {Route, IndexRoute,Redirect} from "react-router";

//components
import Root from "./components/RootContainer";

const routes = (
  <Route path='/'>
    <IndexRoute component={Root}/>
  </Route>
)

export default routes;
