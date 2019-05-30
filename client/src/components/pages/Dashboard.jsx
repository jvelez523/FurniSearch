import React, { Component } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Sidenav from "../Sidenav";
import Sidecontent from "../Sidecontent";
import axios from "axios";
import {baseURL} from '../../api'

export default class Dashboard extends Component {

  state = {
    user: {},
    roomdata: []
  }

  componentDidMount(){
    let body = {
      uid: this.props.user.uid
    };

    axios({
      method: "post",
      url: `${baseURL}/myrooms`,
      data: body
    })
      .then(response => {
        console.log(response);
        this.setState({
          roomdata: response.data.data
        })
      })
      .catch(error => {
        console.log(error);
      });
  }

  render() {

    console.log(this.props.user)
    return (
      <div className="dashcontain">
      {/* <Container className="dashContain"> */}
        <Row>
          <Col lg="1" className="center">
            <Sidenav />
          </Col>
          <Col className="center">
            <Sidecontent user={this.props.user} roomdata={this.state.roomdata}/>
          </Col>
        </Row>
        {/* </Container> */}
      </div>
    );
  }
}
