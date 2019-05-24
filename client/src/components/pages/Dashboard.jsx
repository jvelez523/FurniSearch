import React, { Component } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Sidenav from "../Sidenav";
import Sidecontent from "../Sidecontent";

export default class Dashboard extends Component {

  state = {
    user: {}
  }
  render() {
    return (
      <div className="dashcontain">
      {/* <Container className="dashContain"> */}
        <Row>
          <Col lg="1" className="center">
            <Sidenav />
          </Col>
          <Col className="center">
            <Sidecontent />
          </Col>
        </Row>
        {/* </Container> */}
      </div>
    );
  }
}
