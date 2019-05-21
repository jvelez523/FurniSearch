import React, { Component } from "react";
import { Navbar, NavDropdown, Nav, Button, Modal } from "react-bootstrap";

export default class Navigation extends Component {
  state = { show: false };

  handleClose = () => {
    this.setState({ show: false });
  };

  handleShow = () => {
    this.setState({ show: true });
  };

  render() {
    return (
      <div>
        {/* //Navigation Bar */}
        <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
          <Navbar.Brand href="#home" className="navlogo">
            <i className="fas fa-chair iconspacing" />
            Furni-Search
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Link href="#features">Features</Nav.Link>
              <Nav.Link href="#pricing">Pricing</Nav.Link>
              <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                  Another action
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">
                  Something
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">
                  Separated link
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
            <Nav>
              <Button variant="outline-primary" onClick={this.handleShow}>
                Log In / Sign-Up
              </Button>
            </Nav>
          </Navbar.Collapse>
        </Navbar>

        {/* Modal Content(Login) */}
        <Modal show={this.state.show} onHide={this.handleClose} centered>
          <Modal.Header className="login-modal">
            <Modal.Title>Log In/Sign Up</Modal.Title>
          </Modal.Header>
          <Modal.Body className="login-modal">
            <Button variant="outline-danger" size="lg" className="loginbtn" onClick={this.handleShow}>
              <i className="fab fa-google iconspacing" />
              Log in with Google
            </Button>
          </Modal.Body>
          <h4 className="center">Or</h4>
          <Modal.Body className="login-modal">
            <Button size="lg" variant="outline-primary" className="loginbtn" onClick={this.handleShow}>
              <i className="fab fa-facebook iconspacing" />
              Log in with Facebook
            </Button>
          </Modal.Body>
        </Modal>
      </div>
    );
  }
}
