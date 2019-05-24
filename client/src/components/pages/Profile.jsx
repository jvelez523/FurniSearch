import React, { Component } from "react";
import { Image, Col, Fade } from "react-bootstrap";

export default class Profile extends Component {



  componentDidMount(){
    console.log("Profile Mounted!")
  }

  render() {

    return (
      <React.Fragment>
      <Fade appear={true} in={true}>
        <Col>
          <Image src="https://lh4.googleusercontent.com/-M2L8JDc5Z8E/AAAAAAAAAAI/AAAAAAAAHOo/g60zYdLJfj8/photo.jpg" roundedCircle className="dashimg"/>
          <h2>Justin Velez</h2>
          <h2>Email: Justin@gmail.com</h2>
          <h2>Rooms Uploaded: 1</h2>
          <h2> Rooms Favorited: 1</h2>
        </Col>
        </Fade>
      </React.Fragment>
    );
  }
}
