'use strict';

import React from'react';
import NavbarContainer from '../navbar/NavbarContainer';
import {Grid, Col, Row, Button} from 'react-bootstrap';
import {Link} from 'react-router';
import 'rc-slider/assets/index.css';
import Rcslider from 'rc-slider';

export default class SliderExampleControlled extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
    	priceRange: [0, 1000000]
  	};

  	this.setRange = this.setRange.bind(this);
  };

	setRange(value) {
    this.setState({priceRange: value});
  };

  render() {
    return (
      <div>
      	<NavbarContainer />
        <div className='categories-choices'>
          <Grid>

            <Row>
              <Col sm={12}>
                <h1 className='categories-heading'><span>Price Range</span></h1>
                <h1 className='description-headline'>Next, select the ideal price range for your business</h1>
                <br/>
              </Col>
            </Row>

	      		<Col sm={12}>
			      	<h3>Min: {this.state.priceRange[0]}, Max: {this.state.priceRange[1]}</h3>
			      	<Rcslider 
                min={0}
                max={1000000}
                range={true}
                defaultValue={[0, 1000]}
                onAfterChange={this.setRange}
              />

              <Row>
                <br />
  			        <Link to='/all-options'>
                  <Button onClick={() => this.props.addPriceRange(this.state.priceRange)}>Next</Button>
                </Link>
              </Row>

			      </Col>
        	</Grid>
        </div>
      </div>
    );
  }
};