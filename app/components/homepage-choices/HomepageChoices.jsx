import React from'react';
import {Col, Row, Grid, Jumbotron} from "react-bootstrap";
import FontIcon from 'material-ui/FontIcon';
import {Link} from 'react-router';
import {red500, yellow500, blue500} from 'material-ui/styles/colors';
import {browserHistory} from 'react-router';

export default class HomepageChoices extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      helpClass: "boxes animated flipInX"
    };
  }

  componentDidMount() {
    window.setTimeout(() => this.setState({ helpClass: "boxes animated pulse"}), 5000);
    this.props.resetFilter();
    console.log('  _       ___\n \\ \\    /| |_)\n  \\_\\/\\/ |_|');
  }

  helpMeChoose(){
    browserHistory.push('/categories');
  }

  redirectToProducts(){
    browserHistory.push('/all-options');
  }

  render() {

    let iconStyles = {
      fontSize: '80px',
      color: '#fffef9'
    };

    return (
      <div>
        <div className='homepage-choices'>
          <Grid>
            <Row className="show-grid">

              <Col md={6} mdPush={6} className='rightDivOpeningPage'>
                <h1 className='heading'><span className='css-animation'>Wantrepreneur</span></h1>
                <h3 className='description-headline'>Let us help choose the right business for you</h3>
              </Col>
              <Col md={6} mdPull={6} className='leftDivOpeningPage'>
                <Col md={6} mdPush={6}>
                  <Jumbotron onClick={this.redirectToProducts} className="boxes animated flipInX">
                    <FontIcon className="material-icons" style={iconStyles}>check_circle</FontIcon>
                    <p>I know what I want</p>
                  </Jumbotron>
                </Col>
                <Col md={6} mdPull={6}>
                  <Jumbotron onClick={this.helpMeChoose} className={this.state.helpClass}>
                    <FontIcon className="material-icons" style={iconStyles}>help</FontIcon>
                    <p className='box-content'>Help me choose</p>
                  </Jumbotron>
                </Col>
              </Col>
            </Row>
          </Grid>
        </div>
        <div className='homepage-second'>
          <Grid>
            <Row className="show-grid">

              <Col md={6} mdPush={6} className='rightDivOpeningPage'>
                <h2 className='lower-heading'><span className='blue-animation'>Be your own boss</span></h2>
                <h3 className='lower-headline'>Because life's too short to not enjoy it.</h3>
              </Col>
              <Col md={6} mdPull={6} className='leftDivOpeningPage'>

              </Col>
            </Row>
          </Grid>
        </div>
        <div className='homepage-third'>
          <Grid>
            <Row className="show-grid">

              <Col md={6} mdPush={6} className='rightDivOpeningPage'>
                <h2 className='lower-heading'><span className='blue-animation'>Be your own boss</span></h2>
                <h3 className='lower-headline'>Because life's too short to not enjoy it.</h3>
              </Col>
              <Col md={6} mdPull={6} className='leftDivOpeningPage'>

              </Col>
            </Row>
          </Grid>
        </div>
      </div>
    );
  }
}
