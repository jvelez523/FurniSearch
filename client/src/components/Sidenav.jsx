import React, { Component } from "react";
import { Nav, Container, Row, Col } from "react-bootstrap";
import { Route, Link, NavLink, Switch } from 'react-router-dom';


export default class Sidenav extends Component {
  render() {
    return (
      <div className="sidenavhold">
      <h3>Dashboard</h3>
            <Nav
              variant="pills"
              defaultActiveKey="/home"
              className="flex-column"
            >
              <Link to="/dashboard/profile"><Nav.Link href="/dashboard/profile">Profile</Nav.Link></Link>
              <Link to="/dashboard/yourrooms"><Nav.Link href="/dashboard/yourrooms">Your Rooms</Nav.Link></Link>
              <Link to="/dashboard/favorites"><Nav.Link href="/dashboard/favorites">Favorites</Nav.Link></Link>
            </Nav>
      </div>
    );
  }
}
