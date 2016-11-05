import React, { Component } from 'react';
import NavbarContainer from './navbar/NavbarContainer';
import HomePageChoices from './homepage-choices/HomepageChoices';

export default class Root extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div>
        <NavbarContainer />
        <HomePageChoices />
      </div>
    );
  }
}
