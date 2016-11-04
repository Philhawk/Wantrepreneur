'use strict';

import React from'react';
import Navbar from '../navbar/Navbar';
import Slider from 'material-ui/Slider';
import {Grid, Col, Button} from 'react-bootstrap';

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
      	<Navbar />
      	<Grid>
      		<Col sm={8}>
      			<h2>Select your maximum price:</h2>
		      	<span>{this.state.firstSlider}</span>
		      	
		        <Slider
		        	className='price-slider'
		          min={0}
		          max={100}
		          step={1}
		          defaultValue={50}
		          value={this.state.firstSlider}
		          onChange={this.handleFirstSlider}
		        />

		        <Button>Next</Button>
		       </Col>
        </Grid>
      </div>
    );
  }
};