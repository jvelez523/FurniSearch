import React, { Component } from 'react';
import { Route, Link, NavLink, Switch } from 'react-router-dom';
import Home from './pages/Home';
import api from '../api';
import Navigation from './Nav'
import Dashboard from './pages/Dashboard';
import Profile from './pages/Profile';
import Yourroom from './pages/Yourroom';
import newFurniture from './pages/newFurniture';
import Search from './pages/Search';
import { Fade } from "react-bootstrap";
import Browse from './pages/Browse';



export default class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      countries: []
    }
  }

  handleLogoutClick(e) {
    api.logout()
  }

  render() {
    return (
      <div className="App">
      <Navigation />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/dashboard" component={Dashboard} />
          <Route path="/postfurn" component={newFurniture} exact />
          <Route path="/search" component={Search} exact />
          <Route path="/browse" component={Browse} exact />
          <Route render={() => <h2>404</h2>} />
        </Switch>
      </div>
    );
  }
}