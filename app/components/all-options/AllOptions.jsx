'use strict';

import React from'react';
import Navbar from '../navbar/Navbar';
import {Grid, Col, Row} from 'react-bootstrap';

export default class extends React.Component {
	constructor (props) {
		super(props);
    this.state = {
      search: ''
    };
    this.onSearchInput = this.onSearchInput.bind(this);
	}

	componentDidMount() {
		this.props.getProducts();
	}

	render () {
    return (
      <div>
        <Navbar />
        <Grid>
          <Row>
            <Col sm={12}>
            <input
                    placeholder="Search bar placeholder text"
                    onInput={ this.onSearchInput }
                    id="product-searchbar"
                  />
            </Col>
          </Row>
          <Row>
          {
            this.props.products
              .filter(p => p.name.toLowerCase().includes(this.state.search)
                || p.description.toLowerCase().includes(this.state.search)
                || p.categories
                    .reduce((a, b) => a + b.name, '')
                    .toLowerCase()
                    .includes(this.state.search)
              )
              .map(p => {
                return (
                  <Col sm={12} md={4}>
                    <Row className="product-image">{ <img src={p.image} />}</Row>
                    <Row>{ p.name }</Row>
                  </Col>
                )
            })
          }
          </Row>
        </Grid>
      </div>
  	)
	}

  onSearchInput(evt) {
    this.setState({ search: evt.target.value.toLowerCase() });
  }
}
