import React, { Component } from "react";
import { Image, Col, Fade, Card, ListGroup } from "react-bootstrap";

export default class Profile extends Component {
  // state = {
  //   user: this.props.location.state.user,
  //   email: this.props.location.state.email
  // }

  componentDidMount() {
    console.log("Profile Mounted!", this.props.user);
  }

  render() {
    return (
      <React.Fragment>
        <Fade appear={true} in={true}>
          <Col>
            <Image
              src={this.props.user.photoURL}
              roundedCircle
              className="dashimg shadow"
            />
            <h2>Hi, {this.props.user.displayName}</h2>
            <Card>
              <ListGroup variant="flush">
                <ListGroup.Item><h4>Email: {this.props.user.email}</h4></ListGroup.Item>
                <ListGroup.Item><h4>Rooms Uploaded: 1</h4></ListGroup.Item>
                <ListGroup.Item><h4> Rooms Favorited: 1</h4></ListGroup.Item>
              </ListGroup>
            </Card>
          </Col>
        </Fade>
      </React.Fragment>
    );
  }
}
