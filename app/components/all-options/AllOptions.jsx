'use strict';

import React from 'react';
import NavbarContainer from '../navbar/NavbarContainer';
import {Grid, Col, Row, Modal, Button, FormGroup, FormControl} from 'react-bootstrap';
import Snackbar from 'material-ui/Snackbar';
import { addToCart } from '../../reducers/cart';
import io from 'socket.io-client';
let socket;
import {GridList, GridTile} from 'material-ui/GridList';
import IconButton from 'material-ui/IconButton';
import Subheader from 'material-ui/Subheader';
import StarBorder from 'material-ui/svg-icons/toggle/star-border';
import _ from 'lodash';

const snackbarAutoHideDuration = 4000;

export default class extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      search: '',
      showModal: false,
      currentProduct: {},
      snackbarOpen: false,
    };

    this.onSearchInput = this.onSearchInput.bind(this);
    this.open = this.open.bind(this);
    this.close = this.close.bind(this);
    this.handleTouchTap = this.handleTouchTap.bind(this);
    this.handleActionTouchTap = this.handleActionTouchTap.bind(this);
    this.handleRequestClose = this.handleRequestClose.bind(this);
    this.soldProducts = this.soldProducts.bind(this);
  }

  componentDidMount() {
    this.props.getProducts();
    this.props.getCart();
    socket = io('http://localhost:8080');
    socket.on('sold-products', this.soldProducts);
  }

  componentWillUnmount() {
    socket.off('sold-products', null);
    socket.disconnect();
    socket = null;
  }

  render () {

    const sortedProducts =   this.props.products
                              .filter(p => p.name.toLowerCase().includes(this.state.search)
                                || p.description.toLowerCase().includes(this.state.search)
                                || p.categories
                                    .reduce((a, b) => a + b.name, '')
                                    .toLowerCase()
                                    .includes(this.state.search)
                              )
                              .filter(p => p.categories.filter(category => category.id === this.props.categories.filter).length)

    const styles = {
      root: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
      },
      gridList: {
        width: 500,
        height: 450,
        overflowY: 'auto',
        display: 'inline',
      },
    };

    return (
      <div>
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

              sortedProducts.map(p => {
                return (
                <Col className="product-grid" key={p.id} sm={6} md={4} lg={6} onClick={() => this.open(p)}>
                  <GridList cellHeight={180} style={styles.gridList} >
                    <GridTile
                       key={p.id}
                       title={p.name}
                       actionIcon={<IconButton><StarBorder color="white" /></IconButton>}
                       actionPosition="left"
                       titlePosition="top"
                       titleBackground="linear-gradient(to bottom, rgba(0,0,0,0.7) 0%,rgba(0,0,0,0.3) 70%,rgba(0,0,0,0) 100%)"
                       cols={2}
                       rows={2}
                     >
                       <img src={p.image} />
                     </GridTile>
                  </GridList>
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
            <Button onTouchTap={this.handleTouchTap}>Add to Cart</Button>
          </Modal.Footer>
        </Modal>

        <div>
          <Snackbar
            open={this.state.snackbarOpen}
            message={`${this.state.currentProduct.name} was added to your shopping cart`}
            action="undo"
            autoHideDuration={snackbarAutoHideDuration}
            onActionTouchTap={this.handleActionTouchTap}
            onRequestClose={this.handleRequestClose}
          />
        </div>
      </div>
    )
  }

  // For product modals
  onSearchInput(evt) {
    this.setState({search: evt.target.value.toLowerCase()});
  }

  open(product) {
    this.setState({showModal: true, currentProduct: product});
  }

  close() {
    this.setState({showModal: false, currentProduct: {}});
  }

  // For shopping cart features
  handleTouchTap() {
    this.setState({
      snackbarOpen: true,
    });
    this.props.addItemToCart(this.state.currentProduct);
  };

  handleActionTouchTap() {
    this.setState({
      snackbarOpen: false,
    });
    this.props.removeItemFromCart(this.state.currentProduct);
  };

  handleRequestClose() {
    this.setState({
      snackbarOpen: false,
    });
  };

  soldProducts(products) {
    this.props.removeMultipleFromCart(products);
    this.props.removeMultipleProductsFromOptions(products);
  }
}
