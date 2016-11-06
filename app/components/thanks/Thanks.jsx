'use strict';

import React from 'react';
import NavbarContainer from '../navbar/NavbarContainer';
import CircularProgress from 'material-ui/CircularProgress';
import { Grid, Col, Row } from 'react-bootstrap';
import { Card, CardHeader } from 'material-ui/Card';

export default class Thanks extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.getOrder(this.props.location.query.order);
  }

  render() {
    return (
      <div>
        <NavbarContainer />
        <Grid>
          <Row>
            { this.props.orderLoading && !this.props.order.products ? null : (
                <Col sm={12} lg={6}>
                  <CardHeader title="Thank you for purchasing!" />
                </Col>
              )}
          </Row>
          <Row>
            { this.props.orderLoading ?
              <CircularProgress size={80} thickness={5} color="#F4E04D" />
              : (this.props.order ?
                  this.props.order.products && this.props.order.products.sort((a, b) => a.name > b.name ? 1 : -1).map(product => (
                    <Col sm={12} lg={6} key={product.id} className='cart-item'>
                      <Card>
                        <Row>
                          <Col lg={6}>
                            <CardHeader title={product.name} subtitle={'$' + product.price} />
                          </Col>
                          <Col lg={6}>
                            <img className='cart-image' src={ product.image} />
                          </Col>
                        </Row>
                      </Card>
                    </Col>)
                ) : null )
            }
          </Row>
        </Grid>
      </div>
    )
  }
}
