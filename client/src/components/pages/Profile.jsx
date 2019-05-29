import React, { Component } from "react";
import { Image, Col, Fade } from "react-bootstrap";

export default class Profile extends Component {

  // state = {
  //   user: this.props.location.state.user,
  //   email: this.props.location.state.email
  // }

  componentDidMount(){
    console.log("Profile Mounted!", this.props.user)
  }

  render() {

    return (
      <React.Fragment>
      <Fade appear={true} in={true}>
        <Col>
          <Image src={this.props.user.photoURL} roundedCircle className="dashimg"/>
          <h2>Hi, {this.props.user.displayName}</h2>
          <h2>Email: {this.props.user.email}</h2>
          <h2>Rooms Uploaded: 1</h2>
          <h2> Rooms Favorited: 1</h2>
        </Col>
        </Fade>
      </React.Fragment>
    );
  }
}
