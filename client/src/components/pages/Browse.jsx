import React, { Component } from "react";
import { Container, Row, Col, Card, Button, Fade } from "react-bootstrap";
import Categories from "../browse/Categories";
import RecentItems from "../browse/RecentItems";

export default class Browse extends Component {
  render() {
    return (
      <Fade appear={true} in={true}>
        <Container className="uploadscont">
        <RecentItems />
        </Container>
      </Fade>
    );
  }
}
