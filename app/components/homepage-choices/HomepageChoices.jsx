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
      color: '#333333'
    };

    return (
      <div className='homepage-choices'>
        <Grid>
          <Row className="show-grid">

            <Col md={6} mdPush={6} className='rightDivOpeningPage'>
              <h1 className='heading'><span className='css-animation'>Wantrepreneur</span></h1>
              <h1 className='description-headline'>Let us help you choose the right business for you</h1>
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
                    <p>Help me choose</p>
                </Jumbotron>
              </Col>
            </Col>
          </Row>
        </Grid>
      </div>
    );
  }
}
