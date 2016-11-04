'use strict';

import React from'react';
import {Col, Row, Grid, Jumbotron} from "react-bootstrap";
import {Link} from 'react-router';
import FontIcon from 'material-ui/FontIcon';
import {red500, yellow500, blue500} from 'material-ui/styles/colors';
import {browserHistory} from 'react-router';
import Navigation from '../navbar/Navbar'

export default class Categories extends React.Component {
  constructor() {
    super();

  }

  helpMeChoose(){
    console.log('hitting')
    browserHistory.push('/categories')
  }

  redirectToProducts(){
    console.log('hitting')
    browserHistory.push('/all-options')
  }

  render() {

    let iconStyles = {
      fontSize: '80px',
      color: '#333333'
    };

      return (
        <div>
          <Navigation />
          <div className='categories-choices'>
            <Grid>
              <Row className="show-grid">
                <Col md={6} mdPush={6} className='rightDivCategoriesPage'>
                  <Row className="show-grid">
                    <Col md={6} mdPush={6}>
                      <Jumbotron className='boxes'>
                        <FontIcon className="material-icons" style={iconStyles}>devices</FontIcon>
                          <p>Technology</p>
                      </Jumbotron>
                    </Col>
                    <Col md={6} mdPull={6}>
                      <Jumbotron className='boxes'>
                        <FontIcon className="material-icons" style={iconStyles}>airplanemode_active</FontIcon>
                          <p>Travel</p>
                      </Jumbotron>
                    </Col>
                  </Row>
                  <Row className="show-grid">
                    <Col md={6} mdPush={6}>
                      <Jumbotron className='boxes'>
                        <FontIcon className="material-icons" style={iconStyles}>theaters</FontIcon>
                          <p>Entertainment</p>
                      </Jumbotron>
                    </Col>
                    <Col md={6} mdPull={6}>
                      <Jumbotron className='boxes'>
                        <FontIcon className="material-icons" style={iconStyles}>restaurant</FontIcon>
                          <p>Food</p>
                      </Jumbotron>
                    </Col>
                  </Row>
                </Col>
                <Col md={6} mdPull={6} className='leftDivCategoriesPage'>
                  <h1 className='categories-heading'><span>Categories</span></h1>
                  <h1 className='description-headline'>First, let's pick a category for your dream business</h1>
                </Col>
              </Row>
            </Grid>
          </div>
        </div>
    );
  }
}
