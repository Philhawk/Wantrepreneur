import React, { Component } from 'react';
import Navigation from './navbar/Navbar';
import HomePageChoices from './homepage-choices/HomepageChoices';

export default class Roots extends Component {
  constructor() {
    super();

  }

  render() {


      return (
        <div>
          <div>
            <Navigation />
          </div>
          <div>
            <HomePageChoices />
            <cite>~Home Page, bones</cite>
          </div>
        </div>
    );
  }
}
