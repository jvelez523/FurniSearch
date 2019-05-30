import React, { Component } from "react";
import { Row, Col, Card } from "react-bootstrap";
import axios from "axios";
import { baseURL } from "../api";

export default class Mostrecent extends Component {
  state = {
    housedata: []
  };

  componentDidMount() {
    axios
      .get(`${baseURL}/roomshome`)
      .then(response => {
        console.log("This is the response================", response.data);
        this.setState({
          housedata: response.data.data
        });
      })
      .catch(err => console.error(err));
  }

  render() {
    return (
      <div className="mostRecentHold">
        <h1 className="center">Most Recent</h1>
        <Row>
          {this.state.housedata.map((house, index) => (
            <Col xs="12" lg="4">
              <div class="card mb-3 shadow-lg">
                <div class="row no-gutters">
                  <div
                    class="col-md-12"
                    style={{
                      backgroundImage: `url(${house.imgurl})`
                    }}
                    className="cardhome"
                  >
                    <div class="card-body homecard">
                      <h5 class="card-title">{house.roomname}</h5>
                      <p class="card-text">
                        {house.roomdesc}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </Col>
          ))}
        </Row>
      </div>

    );
  }
}
