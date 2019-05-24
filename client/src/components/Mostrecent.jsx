import React, { Component } from 'react'
import { Row, Col, Card } from "react-bootstrap";


export default class Mostrecent extends Component {
  render() {
    return (
      <div className="mostRecentHold">
              <h1 className="center">Most Recent</h1>
        <Row>
          <Col>
          <div class="card mb-3 shadow-lg" >
  <div class="row no-gutters">
    <div class="col-md-12" style={{backgroundImage: `url(https://t-ec.bstatic.com/images/hotel/max1024x768/896/89615184.jpg)`}} className="cardhome">
      <div class="card-body">
        <h5 class="card-title">Card title</h5>
        <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
      </div>
    </div>
  </div>
</div>
          </Col>
          <Col>
          <div class="card mb-3 shadow-lg" >
  <div class="row no-gutters">
    <div class="col-md-12" style={{backgroundImage: `url(https://t-ec.bstatic.com/images/hotel/max1024x768/896/89615184.jpg)`}} className="cardhome">
      <div class="card-body">
        <h5 class="card-title">Card title</h5>
        <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
      </div>
    </div>
  </div>
</div>
            </Col>
            <Col>
            <div class="card mb-3 shadow-lg" >
  <div class="row no-gutters">
    <div class="col-md-12" style={{backgroundImage: `url(https://t-ec.bstatic.com/images/hotel/max1024x768/896/89615184.jpg)`}} className="cardhome">
      <div class="card-body">
        <h5 class="card-title">Card title</h5>
        <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
      </div>
    </div>
  </div>
</div>
            </Col>
        </Row>
      </div>
    )
  }
}
