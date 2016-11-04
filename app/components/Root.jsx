import React, { Component } from 'react';
import NavbarContainer from './navbar/NavbarContainer';
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
            <NavbarContainer />
            <HomePageChoices />
          </div>
        </MuiThemeProvider>
      </div>
    );
  }
}
