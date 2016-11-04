import React, { Component } from 'react';
import Navigation from './navbar/Navbar';
import HomePageChoices from './homepage-choices/HomepageChoices';

export default class Root extends Component {
  constructor() {
    super();

  }

  render() {

      return (
        <div>
          <Navigation />
          <HomePageChoices />
        </div>
    );
  }
}
