'use strict';

import React from'react';
import NavbarContainer from '../navbar/NavbarContainer';
import Slider from 'material-ui/Slider';
import {Grid, Col, Row, Button} from 'react-bootstrap';
import {Link} from 'react-router';

export default class SliderExampleControlled extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
    	firstSlider: 50,
  	};

  	this.handleFirstSlider = this.handleFirstSlider.bind(this);
  };


	handleFirstSlider(event, value) {
    this.setState({firstSlider: value});
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

	      		<Col sm={8}>
			      	<p>{this.state.firstSlider}</p>
			      	
			        <Slider
			        	className='price-slider'
			          min={0}
			          max={100}
			          step={1}
			          defaultValue={50}
			          value={this.state.firstSlider}
			          onChange={this.handleFirstSlider}
			        />

			        <Link to='/all-options'>
                <Button>Next</Button>
              </Link>
			      </Col>
        	</Grid>
        </div>
      </div>
    );
  }
};