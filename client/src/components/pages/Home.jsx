import React, { Component } from "react";
import { Jumbotron, Container, Button, Card, Row, Col } from "react-bootstrap";
import Mostrecent from "../Mostrecent";
import Searchhome from "../Searchhome";

export default class Home extends Component {
  // constructor(props) {
  //   super(props)
  //   this.state = {
  //   }
  // }
  render() {
    return (
      <React.Fragment>
        <Jumbotron fluid className="homeHero">
          <Container className="herocont">
            <h1 shadow>View ideas from homes all around the World!</h1>
          </Container>
        </Jumbotron>
        <Container>
        <Mostrecent />
        </Container>
        <div className="searchcont">
        <Container>
        <Searchhome />
        </Container>
        </div>
      </React.Fragment>
    );
  }
}
