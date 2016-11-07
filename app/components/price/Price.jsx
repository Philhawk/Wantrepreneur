'use strict';

import React from 'react';
import NavbarContainer from '../navbar/NavbarContainer';
import {Grid, Col, Row, Button, Jumbotron} from 'react-bootstrap';
import FontIcon from 'material-ui/FontIcon';
import {Link} from 'react-router';

export default class Price extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
    	priceRange: [0,1000000]
  	};

  	this.setRange = this.setRange.bind(this);
  };

	setRange(value) {
    this.setState({priceRange: value});
  };

  render() {

		let iconStyles = {
			fontSize: '80px',
			color: '#333333'
		};


    return (
      <div>
      	<NavbarContainer />
        <div className='categories-choices'>
          <Grid>

            <Row>
              <Col sm={12}>
                <h1><span className='css-animation'>Price Range</span></h1>
                <h3 className='description-headline'>Next, let us know how much you're willing to spend</h3>
                <br/>
              </Col>
            </Row>
						<Row>
							<Link to='/all-options'>
								<Col sm={6} md={4} lg={4} onClick={() => (this.props.addPriceRange([0, 333333]))}>
									<Jumbotron className='boxes'>
										<FontIcon className="material-icons" style={iconStyles}>local_atm</FontIcon>
										<p>Less Expensive</p>
									</Jumbotron>
								</Col>
								<Col sm={6} md={4} lg={4} onClick={() => (this.props.addPriceRange([0, Infinity]))}>
									<Jumbotron className='boxes'>
										<FontIcon className="material-icons" style={iconStyles}>local_atm</FontIcon>
										<FontIcon className="material-icons" style={iconStyles}>local_atm</FontIcon>
										<p>More Expensive</p>
									</Jumbotron>
								</Col>
								<Col sm={6} md={4} lg={4} onClick={() => (this.props.addPriceRange([0, Math.random() < 0.5 ? 333333 : Infinity]))}>
									<Jumbotron className='boxes'>
										<FontIcon className="material-icons" style={iconStyles}>insert_emoticon</FontIcon>
										<p>Surprise Me</p>
									</Jumbotron>
								</Col>
							</Link>
						</Row>
					</Grid>
        </div>
      </div>
    );
  }
};
