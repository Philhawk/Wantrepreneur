import React from'react';
import {Col, Row, Grid, Jumbotron} from "react-bootstrap";
import {Link} from 'react-router';
import FontIcon from 'material-ui/FontIcon';
import {red500, yellow500, blue500} from 'material-ui/styles/colors';
import {browserHistory} from 'react-router';


export default class HomepageChoices extends React.Component {
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
        <div className='homepage-choices'>
          <Grid>
            <Row className="show-grid">
              <Col md={6} mdPush={6} className='rightDivOpeningPage'>
                <h1 className='heading'><span>Wantrepreneur</span></h1>
                <h1 className='description-headline'>Let us help you choose the right business for you</h1>
              </Col>
              <Col md={6} mdPull={6} className='leftDivOpeningPage'>
                <Col md={6} mdPush={6}>
                  <Jumbotron onClick={this.redirectToProducts} className='boxes'>
                    <FontIcon className="material-icons" style={iconStyles}>check_circle</FontIcon>
                      <p> I know</p>
                  </Jumbotron>
                </Col>
                <Col md={6} mdPull={6}>
                  <Jumbotron onClick={this.helpMeChoose} className='boxes'>
                    <FontIcon className="material-icons" style={iconStyles}>help</FontIcon>
                      <p> Help me </p>
                  </Jumbotron>
                </Col>
              </Col>
            </Row>
          </Grid>
        </div>
    );
  }
}
