'use strict';

import React from 'react';
import { Link } from 'react-router';
import NavbarContainer from '../navbar/NavbarContainer';
import {Grid, Col, Row, Modal, Button, FormGroup, FormControl, DropdownButton, MenuItem} from 'react-bootstrap';
import Snackbar from 'material-ui/Snackbar';
import AutoComplete from 'material-ui/AutoComplete';
import Avatar from 'material-ui/Avatar';
import FontIcon from 'material-ui/FontIcon';
import CircularProgress from 'material-ui/CircularProgress';
import { addToCart } from '../../reducers/cart';
import io from 'socket.io-client';
let socket;
import {GridList, GridTile} from 'material-ui/GridList';
import IconButton from 'material-ui/IconButton';
import Subheader from 'material-ui/Subheader';
import StarBorder from 'material-ui/svg-icons/toggle/star-border';
import _ from 'lodash';
import Chip from 'material-ui/Chip';
import {blue300, grey50} from 'material-ui/styles/colors';

const snackbarAutoHideDuration = 4000;

export default class extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      search: '',
      showModal: false,
      currentProduct: {},
      snackbarOpen: false,
      undoAction: '', // 'add' or 'remove'
      sortField: 'name',
      sortAscending: 1, // 1 for ascending, -1 for descending
    };

    this.onSearchInput = this.onSearchInput.bind(this);
    this.open = this.open.bind(this);
    this.close = this.close.bind(this);
    this.handleTouchTapAdd = this.handleTouchTapAdd.bind(this);
    this.handleTouchTapRemove = this.handleTouchTapRemove.bind(this);
    this.handleActionTouchTap = this.handleActionTouchTap.bind(this);
    this.handleRequestClose = this.handleRequestClose.bind(this);
    this.soldProducts = this.soldProducts.bind(this);
    this.setSortMethod = this.setSortMethod.bind(this);
    this.categoryChips = this.categoryChips.bind(this);
    this.handleChipClick = this.handleChipClick.bind(this);
  }

  componentDidMount() {
    this.props.getProducts();
    this.props.getCart();
    this.props.getCategories(this.props.categories.allCategories);
    socket = io('http://localhost:8080');
    socket.on('sold-products', this.soldProducts);
  }

  componentWillUnmount() {
    socket.off('sold-products', null);
    socket.disconnect();
    socket = null;
  }

  getSortFunction(field, direction) {
    switch (field) {
      case 'name':
      default:
        return (a, b) => a[field].toLowerCase() > b[field].toLowerCase() ? direction : -direction;
      case 'price':
        return (a, b) => direction * (a[field] - b[field]);
      case 'category':
        return (a,b) => a[field][0].name.toLowerCase() > b[field][0].name.toLowerCase() ? direction : -direction;
    }
  }

  setSortMethod(sortField, sortAscending) {
    this.setState({sortField, sortAscending});
  }

  handleChipClick(categoryId) {
    if (this.props.categories.filter.indexOf(categoryId) >= 0) {
      this.props.removeCategoryFromFilter(categoryId);
    } else {
      this.props.addCategoryToFilter(categoryId);
    }
  }

  categoryChips(styles) {
    return this.props.categories.allCategories.map(category => (

      <Chip
        onClick={() => this.handleChipClick(category.id)}
        style={styles.chip}
        backgroundColor={this.props.categories.filter.indexOf(category.id) >= 0 ? blue300 : grey50}
        key={category.id}
      >
        <Avatar color="#444" size={32} icon={<FontIcon className="material-icons">{category.icon}</FontIcon>} />
        {category.name}
      </Chip>
    ));
  }

  render () {
    const sortedProducts =   this.props.products
                              .filter(p => this.props.price.length ? this.props.price[0] <= p.price && p.price <= this.props.price[1] : true)
                              .filter(p => {
                                if (this.state.search !== '') {
                                  return p.name.toLowerCase().includes(this.state.search)
                                         || p.description.toLowerCase().includes(this.state.search)
                                         || p.categories.map(c => c.name.toLowerCase()).includes(this.state.search)
                                }
                                return true;
                              })
                              .filter(p => p.categories.filter(category => {
                                return this.props.categories.filter.length ? this.props.categories.filter.indexOf(category.id) >= 0 : true;
                              }).length)
                              .sort(this.getSortFunction(this.state.sortField, this.state.sortAscending));

    const styles = {
      root: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
      },
      wrapper: {
        display: 'flex',
        flexWrap: 'wrap',
        'text-align': 'center',
      },
      gridList: {
        width: 500,
        height: 450,
        overflowY: 'auto',
        display: 'inline',
      },
      chip: {
        margin: 4,
        display: 'inline'
      },
    };

    return (
      <div>
        <NavbarContainer />
        <Grid>
          <Row>
            <Col sm={12}>

              <AutoComplete
                floatingLabelText="What are you looking for?"
                style={{color: 'yellow'}}
                floatingLabelFocusStyle={{ color: 'yellow'} }
                filter={AutoComplete.caseInsensitiveFilter}
                dataSource={[...this.props.products.map(p => p.name),...this.props.categories.allCategories.map(c => c.name)]}
                onUpdateInput={this.onSearchInput}
                fullWidth={true}
                menuStyle={{color: 'red'}}
                onNewRequest={this.onSearchInput}
                maxSearchResults={8}
              >
              </AutoComplete>
            </Col>
          </Row>
          <Row>
            <div style={styles.wrapper}>
              {this.categoryChips(styles)}
            </div>
          </Row>

          <Row>
            {

              sortedProducts.length ? sortedProducts.map(p => (
                <Col className="product-grid" key={p.id} sm={6} md={4} lg={6} onClick={() => this.open(p)}>
                  <GridList
                    cellHeight={180}
                    style={styles.gridList}
                  >
                    <GridTile
                      className={this.props.cart.filter(c => c.id === p.id).length ? "cart-product" : ""}
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
              )) : (this.props.productsLoading ?
                <CircularProgress size={80} thickness={5} color="#F4E04D" />
              : "No matching businesses found.")
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
            { this.props.cart.filter(product => product.id === this.state.currentProduct.id).length ?
              <Link to='/cart'><Button>Go to Cart</Button></Link>
              : <Button onTouchTap={this.handleTouchTapAdd}>Add to Cart</Button>
            }
          </Modal.Footer>
        </Modal>

        <div>
          <Snackbar
            open={this.state.snackbarOpen}
            message={`${this.state.currentProduct.name} was ${this.state.undoAction === 'add' ? 'removed from' : 'added to'} your shopping cart`}
            action="undo"
            autoHideDuration={snackbarAutoHideDuration}
            onActionTouchTap={this.handleActionTouchTap}
            onRequestClose={this.handleRequestClose}
          />
        </div>
      </div>
    )
  }

  onSearchInput(evt) {
    this.setState({search: evt.toLowerCase()});
  }

  // For product modals
  open(product) {
    this.setState({showModal: true, currentProduct: product});
  }

  close() {
    this.setState({showModal: false, currentProduct: {}});
  }

  // For shopping cart features
  handleTouchTapAdd() {
    this.setState({
      snackbarOpen: true,
      undoAction: 'remove'
    });
    this.props.addItemToCart(this.state.currentProduct);
  }

  handleTouchTapRemove() {
    this.setState({
      snackbarOpen: true,
      undoAction: 'add'
    });
    this.props.removeItemFromCart(this.state.currentProduct);
  }

  handleActionTouchTap() {
    this.setState({
      snackbarOpen: false,
      undoAction: ''
    });
    if (this.state.undoAction === 'add') {
      this.props.addItemToCart(this.state.currentProduct);
    } else if (this.state.undoAction === 'remove') {
      this.props.removeItemFromCart(this.state.currentProduct);
    }
  }

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
