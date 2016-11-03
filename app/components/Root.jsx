import React, { Component } from 'react';
import Navigation from './navbar/Navbar';
import HomePageChoices from './homepage-choices/HomepageChoices';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

export default class Roots extends Component {
  constructor() {
    super();

  }

  render() {

      return (
        <div>
          <MuiThemeProvider>
            <div>
              <Navigation />
              <HomePageChoices />
            </div>
          </MuiThemeProvider>
        </div>
    );
  }
}
