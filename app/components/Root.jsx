import React, { Component } from 'react';
import NavbarContainer from './navbar/NavbarContainer';
import HomePageChoicesContainer from './homepage-choices/HomepageChoicesContainer';

export default class Root extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div>
        <NavbarContainer />
        <HomePageChoicesContainer />
      </div>
    );
  }
}
