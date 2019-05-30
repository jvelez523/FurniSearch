import React, { Component } from "react";
import {Fade } from "react-bootstrap";
import Profile from "./pages/Profile";
import Yourroom from "./pages/Yourroom";
import { Route, Link, NavLink, Switch } from "react-router-dom";
import { Transition } from 'react-transition-group';
import Favorites from "./pages/Favorites";



export default class Sidecontent extends Component {


  state = {
    open: false
  }

  render() {
    return (
      <div>
        {/* <Switch> */}
        {/* <Fade  appear={true}> */}
          <Route path="/dashboard/profile" exact component={() => <Profile user={this.props.user} />} />
          {/* </Fade> */}
          <Route path="/dashboard/yourrooms" exact component={() => <Yourroom roomdata={this.props.roomdata} />} />
          <Route path="/dashboard/favorites" exact component={Favorites} />
        {/* </Switch> */}
      </div>
    );
  }
}

// roomdata={this.props.roomdata}