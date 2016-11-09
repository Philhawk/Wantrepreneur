'use strict';

import React from 'react';
import NavbarContainer from '../navbar/NavbarContainer';
import { Grid, Col, Row, Modal } from 'react-bootstrap';
import {Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn} from 'material-ui/Table';
import DropDownMenu from 'material-ui/DropDownMenu';
import MenuItem from 'material-ui/MenuItem';
import {Card, CardHeader, CardActions, CardText, TextField, FlatButton, RaisedButton} from 'material-ui';
import { Link } from 'react-router';


export default class UserPage extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      order: 0,
      product: 0,
      showOrderModal: false,
      showProductModal: false,
      currentOrder: {},
      currentProduct: {}
    };

    this.openOrder = this.openOrder.bind(this);
    this.openProduct = this.openProduct.bind(this);
    this.closeOrder = this.closeOrder.bind(this);
    this.closeProduct = this.closeProduct.bind(this);

  }

  orderChange (event, index, value) {this.setState({value})}
  productChange (event, index, value) {this.setState({value})};

  componentWillMount () {
    this.props.getOrders();
    this.props.getProducts();
  }

  render () {
    return (
      <div>
        <NavbarContainer />
        <Grid>
          <Row>
            <Col sm={12}>
              <h1 className='other-heading'><span className='blue-animation'>Welcome!</span></h1>
              <br/>
            </Col>
          </Row>

          <Row>
            <Col md={2} sm={0} vertical-center></Col>
            <Col md={8} sm={12} vertical-center>
              <Table>
                <TableHeader displaySelectAll={false}>
                  <TableRow>
                    <TableHeaderColumn><h4>User Information</h4></TableHeaderColumn>
                  </TableRow>
                </TableHeader>

                <TableBody displayRowCheckbox={false}>
                    <TableRow>
                      <TableRowColumn>Name</TableRowColumn>
                      <TableRowColumn>
                        {this.props.user && this.props.user.name}
                      </TableRowColumn>
                    </TableRow>

                    <TableRow>
                      <TableRowColumn>Email</TableRowColumn>
                      <TableRowColumn>
                        {this.props.user && this.props.user.email}
                      </TableRowColumn>
                    </TableRow>
                </TableBody>
              </Table>

              <Table>
                <TableHeader displaySelectAll={false}>
                  <TableRow>
                    <TableHeaderColumn><h4>Order History</h4></TableHeaderColumn>
                  </TableRow>
                </TableHeader>

                <TableBody displayRowCheckbox={false}>
                  {this.props.orders.length ?
                    this.props.orders.map((order, index) => (
                      <TableRow key={`${order.id}`}>
                        <TableRowColumn>
                          <Link to={`/thanks?order=${order.orderId}`}>{order.created_at.toString().slice(0, 10)}</Link>
                        </TableRowColumn>
                      </TableRow>
                    ))
                  : 
                    <TableRow><TableRowColumn>You have no orders!</TableRowColumn></TableRow>
                }
                </TableBody>
              </Table>

              {this.props.user && this.props.user.roles === 'admin' ? 
                <Table>
                  <TableHeader displaySelectAll={false}>
                    <TableRow>
                      <TableHeaderColumn><h4>Admin Features</h4></TableHeaderColumn>
                    </TableRow>
                  </TableHeader>

                  <TableBody displayRowCheckbox={false}>

                    <TableRow>
                      <TableRowColumn>Orders</TableRowColumn>

                      <TableRowColumn>
                        <DropDownMenu value={this.state.order} onChange={this.orderChange}>
                          {this.props.orders && this.props.orders.map((order, index) => (
                              <MenuItem key={`${order.id}`} value={index} primaryText={`${order.id}`} />
                          ))}
                        </DropDownMenu>
                        <FlatButton onClick={() => this.openOrder(this.state.order)}>Edit</FlatButton>
                      </TableRowColumn>
                    </TableRow>

                    <TableRow>
                      <TableRowColumn>Products</TableRowColumn>

                      <TableRowColumn>
                        <DropDownMenu value={this.state.product} onChange={this.productChange}>
                          {this.props.products && this.props.products.map((product, index) => (
                              <MenuItem key={`${product.id}`} value={index} primaryText={`${product.name}`} />
                          ))}
                        </DropDownMenu>
                        <FlatButton onClick={() => this.openProduct(this.state.product)}>Edit</FlatButton>
                      </TableRowColumn>

                    </TableRow>
                  </TableBody>
                </Table>
                : null
              }
            </Col>
            <Col md={2} sm={0} vertical-center></Col>
          </Row>

        </Grid>


        <Modal show={this.state.showOrderModal} onHide={this.closeOrder}>
          <Card>
            <CardHeader title={this.state.currentOrder.id}/>
            <form onSubmit={this.onSubmitSignup}>
            <CardText className="form-group">
              <TextField name='email' onChange={this.emailHandler} hintText="Email"/><br/>
              <TextField name='password' onChange={this.passwordHandler} hintText="Password" type="password"/><br/>
            </CardText>
            <CardActions><RaisedButton type="submit" label="Update" onClick={close}/></CardActions>
            </form>
          </Card>
        </Modal>


        <Modal show={this.state.showProductModal} onHide={this.closeProduct}>
          <Card>
            <CardHeader title={this.state.currentProduct.name}/>
            <form onSubmit={this.onSubmitSignup}>
            <CardText className="form-group">
              Name <TextField name='name' fullWidth={true} onChange={this.emailHandler} hintText={`${this.state.currentProduct.name}`}/><br/>
              Price <TextField name='price' fullWidth={true} onChange={this.passwordHandler} hintText={`${this.state.currentProduct.price}`}/><br/>
              Description <TextField multiLine={true} fullWidth={true} rows={2} name='description' onChange={this.passwordHandler} hintText={`${this.state.currentProduct.description}`}/><br/>
              URL <TextField multiLine={true} rowsMax={100} fullWidth={true}  name='url' onChange={this.passwordHandler} hintText={`${this.state.currentProduct.url}`}/><br/>
              Image <TextField name='price' fullWidth={true} onChange={this.passwordHandler} hintText={`${this.state.currentProduct.image}`}/><br/>
            </CardText>
            <CardActions><RaisedButton type="submit" label="Create" onClick={close}/>
            <RaisedButton type="submit" label="Update" onClick={close}/>
            <RaisedButton type="submit" label="Delete" onClick={close}/></CardActions>
            </form>
          </Card>
        </Modal>

      </div>

    );
  }

  openOrder(order) {
    this.setState({showOrderModal: true, currentOrder: this.props.orders[this.state.order]});
  }

  closeOrder() {
    this.setState({showOrderModal: false, currentOrder: {}});
  }

  openProduct(product) {
    this.setState({showProductModal: true, currentProduct: this.props.products[this.state.product]});
  }

  closeProduct() {
    this.setState({showProductModal: false, currentProduct: {}});
  }


}
