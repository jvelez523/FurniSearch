import React, { Component } from "react";
import { Link } from "react-router-dom";
import {
  Navbar,
  NavDropdown,
  Nav,
  Button,
  Modal,
  DropdownButton,
  Dropdown
} from "react-bootstrap";
// import withFirebaseAuth from "react-with-firebase-auth";
// import * as firebase from "firebase/app";
// import "firebase/auth";
// import firebaseConfig from "../firebaseConfig";

// const firebaseApp = firebase.initializeApp(firebaseConfig);
// const firebaseAppAuth = firebaseApp.auth();
// const providers = {
//   googleProvider: new firebase.auth.GoogleAuthProvider(),
//   facebookProvider: new firebase.auth.FacebookAuthProvider()
// };

class Navigation extends Component {
  state = { show: false };

  handleClose = () => {
    this.setState({ show: false });
  };

  handleShow = () => {
    this.setState({ show: true });
  };

  signingoogle = () => {
    this.props.google()
    .then((data)=> {
      console.log("this is the datapush function")
      this.props.datapush()
    })
  }

  render() {
    // const { user, signOut, signInWithGoogle, signInWithFacebook } = this.props;
    
    console.log(this.props.user);

    return (
      <div>
        {/* //Navigation Bar */}
        <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
          <Navbar.Brand className="navlogo">
            <Link to="/" onClick={window.location.reload}>
              <i className="fas fa-chair iconspacing" />
              Furni-Search
            </Link>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Link href="#pricing">
                <Link to="/browse">Browse</Link>
              </Nav.Link>

              <Nav.Link href="#features">
              {this.props.user ? (
                <Link to="/postfurn#step1">Post Furniture</Link>
              ) : (
                <Link to="#" onClick={this.handleShow}>Post Furniture</Link>
              )
              }
              </Nav.Link>
              <Nav.Link href="#pricing">
                <Link to="/search">Search</Link>
              </Nav.Link>
            </Nav>
            <Nav>
              {this.props.user ? (
                <DropdownButton
                  id="dropdown-basic-button"
                  title={`Hi, ${this.props.user.displayName}`}
                  variant="outline-primary"
                >
                  <Dropdown.Item>
                    <Link
                      to={{
                        pathname: "/dashboard/profile",
                        state: {
                          user: this.props.user.displayName,
                          email: this.props.user.email,
                          picture: this.props.user.photoURL
                        }
                      }}
                    >
                      Dashboard
                    </Link>
                  </Dropdown.Item>
                  <Dropdown.Item href="#/action-2">
                    Post Furniture
                  </Dropdown.Item>
                  <Dropdown.Item onClick={this.props.signOut}>Logout</Dropdown.Item>
                </DropdownButton>
              ) : (
                <Button variant="outline-primary" onClick={this.handleShow}>
                  Log In / Sign-Up
                </Button>
              )}
              {/* <Button variant="outline-primary" onClick={this.handleShow}>
                Log In / Sign-Up
              </Button> */}
            </Nav>
          </Navbar.Collapse>
        </Navbar>

        {/* Modal Content(Login) */}
        <Modal show={this.state.show} onHide={this.handleClose} centered>
          <Modal.Header className="login-modal">
            <Modal.Title>Log In/Sign Up</Modal.Title>
          </Modal.Header>
          <Modal.Body className="login-modal">
            {this.props.user ? (
              <button onClick={this.props.signOut}>Sign out</button>
            ) : (
              <div className="loginbtngroup">
                <Button
                  variant="outline-danger"
                  size="lg"
                  className="loginbtn"
                  onClick={event => {
                  this.signingoogle();
                  this.handleClose();
                }}
                >
                  <i className="fab fa-google iconspacing" />
                  Log in with Google
                </Button>
              </div>
            )}
            {/* <Button variant="outline-danger" size="lg" className="loginbtn" onClick={signInWithGoogle}>
              <i className="fab fa-google iconspacing" />
              Log in with Google
            </Button> */}
          </Modal.Body>
          <h4 className="center">Or</h4>
          <Modal.Body className="login-modal">
            {this.props.user ? (
              <button onClick={this.props.signOut}>Sign out</button>
            ) : (
              <Button
                size="lg"
                variant="outline-primary"
                className="loginbtn"
                onClick={event => {
                  this.props.facebook();
                  this.handleClose();
                }}
              >
                <i className="fab fa-facebook iconspacing" />
                Log in with Facebook
              </Button>
            )}
            {/* <Button size="lg" variant="outline-primary" className="loginbtn" onClick={signInWithFacebook}>
              <i className="fab fa-facebook iconspacing" />
              Log in with Facebook
            </Button> */}
          </Modal.Body>
        </Modal>
      </div>
    );
  }
}

export default Navigation
