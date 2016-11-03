import React from'react';
import {Col, Row, Grid, Jumbotron} from "react-bootstrap";
import {Link} from 'react-router';
import FontIcon from 'material-ui/FontIcon';
import {red500, yellow500, blue500} from 'material-ui/styles/colors';


export default class HomepageChoices extends React.Component {
  constructor() {
    super();

  }

  render() {

    const iconStyles = {
        color: 'red',
    };
      return (
        <div className='homepage-choices'>
          <Grid>
            <Row className="show-grid">
              <Col md={6} mdPush={6} className='rightDivOpeningPage'>
                <h1 className='heading'><span>Wantrepreneur</span></h1>
                <h1 className='description-headline'>Help us choose the right business for you</h1>
              </Col>
              <Col md={6} mdPull={6} className='leftDivOpeningPage'>
                <Col md={6} mdPush={6}>
                  <Jumbotron className='boxes'>
                    <FontIcon className="material-icons" style={color='red'>home</FontIcon>
                  </Jumbotron>
                </Col>
                <Col md={6} mdPull={6}>
                  <Jumbotron className='boxes'>
                    Potato
                  </Jumbotron>
                </Col>
              </Col>
            </Row>
          </Grid>
        </div>
    );
  }
}
