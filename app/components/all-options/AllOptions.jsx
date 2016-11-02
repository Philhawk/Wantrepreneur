'use strict';

import React from'react';
import Navbar from '../navbar/Navbar';
import {Grid, Col, Row, Modal} from 'react-bootstrap';

export default class extends React.Component {
	constructor (props) {
		super(props);
    this.state = {
      search: '',
      showModal: false,
      currentProduct: {}
    };

    this.onSearchInput = this.onSearchInput.bind(this);
    this.open = this.open.bind(this);
    this.close = this.close.bind(this);
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
                  <Col key={p.id} sm={12} md={4} onClick={() => this.open(p)}>
                    <Row className="product-image"><img src={ p.image }/></Row>
                    <Row>{ p.name }</Row>
                  </Col>
                )
            })
          }
          </Row>
        </Grid>

        <Modal show={this.state.showModal} onHide={this.close}>
          <Modal.Header closeButton>
            <Modal.Title>{this.state.currentProduct.name}</Modal.Title>
            <Modal.Body>
              <img src={this.state.currentProduct.image} />
            </Modal.Body>
            <Modal.Body>
              {this.state.currentProduct.description}
            </Modal.Body>
          </Modal.Header>
        </Modal>
      </div>
  	)
	}

  onSearchInput(evt) {
    this.setState({ search: evt.target.value.toLowerCase() });
  }

  open(product) {
    this.setState({ showModal: true, currentProduct: product });
  }

  close() {
    this.setState({ showModal: false, currentProduct: {} });
  }
}
