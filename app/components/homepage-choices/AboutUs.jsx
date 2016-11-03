import React from'react';
import {Col, Row, Grid, Jumbotron} from "react-bootstrap";
import {Link} from 'react-router';
import AlarmIcon from 'react-material-icons/icons/action/alarm';


export default class HomepageChoices extends React.Component {
  constructor() {
    super();

  }

  render() {


      return (
        <div className='about-us'>
          <Grid>
            <Row className="show-grid">
              <Col md={6} mdPush={6} className='rightDivOpeningPage'>
                <h1 className='heading'><span>Wantrepreneur</span></h1>
                <h1 className='description-headline'>Help us choose the right business for you</h1>
              </Col>
              <Col md={6} mdPull={6} className='leftDivOpeningPage'>
                <Col md={6} mdPush={6}>
                  <Jumbotron className='boxes'>
                    <AlarmIcon className='alarm'/>
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
