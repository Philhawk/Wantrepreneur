import React from'react';
import {Col, Row,Grid} from "react-bootstrap";
import {Link} from 'react-router';


export default class HomepageChoices extends React.Component {
  constructor() {
    super();

  }

  render() {


      return (
        <div>
          <Grid>
          <Row className="show-grid">
            <Col md={6} mdPush={6}><code>&lt;{'Col md={6} mdPush={6}'} /&gt;</code></Col>
            <Col md={6} mdPull={6}><code>&lt;{'Col md={6} mdPull={6}'} /&gt;</code></Col>
          </Row>
          </Grid>
        </div>
    );
  }
}
