'use strict';

import React from 'react';
import NavbarContainer from '../navbar/NavbarContainer';
import {Grid, Col, Row, Modal, Button, FormGroup, FormControl} from 'react-bootstrap';
import { addToCart } from '../../reducers/cart';

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
      <div className='potato'>
        <NavbarContainer />
        <Grid>

          <Row>
            <Col sm={12}>
              <FormGroup>
                <FormControl id="product-searchbar" type="text" placeholder="Search" onInput={this.onSearchInput} />
              </FormGroup>
            </Col>
          </Row>

          <Row>
          {
            this.props.products
              .sort((a, b) => a.name > b.name ? 1: -1)
              .filter(p => p.name.toLowerCase().includes(this.state.search)
                || p.description.toLowerCase().includes(this.state.search)
                || p.categories
                    .reduce((a, b) => a + b.name, '')
                    .toLowerCase()
                    .includes(this.state.search)
              )
              .map(p => {
                return (
                  <Col className="product-grid" key={p.id} sm={6} md={4} onClick={() => this.open(p)}>
                    <Row><img src={ p.image }/>
                    <p>{ p.name }</p>
                    </Row>
                  </Col>
                )
            })
          }
          </Row>
        </Grid>

        <Modal show={this.state.showModal} onHide={this.close}>
          <Modal.Header closeButton>
            <Modal.Title>{this.state.currentProduct.name}</Modal.Title>
          </Modal.Header>

          <Modal.Body>
            <p><a href={this.state.currentProduct.url ? this.state.currentProduct.url : null}><img src={this.state.currentProduct.image}/></a></p>
            <p className="product-price">Price: ${this.state.currentProduct.price ? this.state.currentProduct.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ","): null}</p>
            <p>{this.state.currentProduct.description}</p>
          </Modal.Body>

          <Modal.Footer>
            <Button onClick={() => this.props.addItemToCart(this.state.currentProduct)}>Add to Cart</Button>
          </Modal.Footer>
        </Modal>

      </div>
    )
  }

  onSearchInput(evt) {
    this.setState({search: evt.target.value.toLowerCase()});
  }

  open(product) {
    this.setState({showModal: true, currentProduct: product});
  }

  close() {
    this.setState({showModal: false, currentProduct: {}});
  }
}
