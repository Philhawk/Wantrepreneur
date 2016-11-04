'use strict';

import React from'react';
import {Col, Row, Grid, Jumbotron} from "react-bootstrap";
import {Link} from 'react-router';
import FontIcon from 'material-ui/FontIcon';
import {red500, yellow500, blue500} from 'material-ui/styles/colors';
import Navigation from '../navbar/Navbar';

export default class Categories extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchCategories();
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

                    {this.props.categories.allCategories.map(category => (
                      <Col md={6} mdPush={6} key={category.id} onClick={() => this.props.addCategory(category.name)}>
                        <Jumbotron className='boxes'>
                          <FontIcon className="material-icons" style={iconStyles}>{category.icon}</FontIcon>
                            <p>{category.name}</p>
                        </Jumbotron>
                      </Col>
                      ))}

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
