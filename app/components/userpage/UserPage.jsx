'use strict';

import React from 'react';
import NavbarContainer from '../navbar/NavbarContainer';
import { Grid, Col, Row } from 'react-bootstrap';
import {Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn} from 'material-ui/Table';
import { Link } from 'react-router';

export default class UserPage extends React.Component {
  constructor (props) {
    super(props);
  }

  componentDidMount () {
    this.props.getOrders();
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

              <div className='container'>
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

                      <TableRow>
                        <TableRowColumn>Password</TableRowColumn>
                        <TableRowColumn>
                          <input></input><button>Update</button>
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
                    {this.props.orders && this.props.orders.map((order, index) => (
                    <TableRow key={`${order.id}`}>
                      <TableRowColumn>
                        <Link to={`/thanks?order=${order.orderId}`}>{order.created_at.toString().slice(0, 10)}</Link>
                      </TableRowColumn>
                    </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>

          </Row>

          <Row>
          {this.props.products && this.props.products.map(product => (<p>product.name</p>))}
          </Row>
        </Grid>
      </div>
    );
  }
}
