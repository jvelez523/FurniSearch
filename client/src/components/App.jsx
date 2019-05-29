import React, { Component } from "react";
import { Route, Link, NavLink, Switch } from "react-router-dom";
import Home from "./pages/Home";
import api from "../api";
import Navigation from "./Nav";
import Dashboard from "./pages/Dashboard";
import Profile from "./pages/Profile";
import Yourroom from "./pages/Yourroom";
import NewFurniture from "./pages/newFurniture"
import Search from "./pages/Search";
import { Fade } from "react-bootstrap";
import Browse from "./pages/Browse";
import withFirebaseAuth from "react-with-firebase-auth";
import * as firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from "../firebaseConfig";
import axios from "axios";
const firebaseApp = firebase.initializeApp(firebaseConfig);
const firebaseAppAuth = firebaseApp.auth();
const providers = {
  googleProvider: new firebase.auth.GoogleAuthProvider(),
  facebookProvider: new firebase.auth.FacebookAuthProvider()
};

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      countries: []
    };
  }

  handleLogoutClick(e) {
    api.logout();
  }

  componentDidMount() {
    // console.log("This is the user from app.js", user)
  }

  onlogin = data => {
    let body = {
      displayName: this.props.user.displayName,
      email: this.props.user.email,
      uid: this.props.user.uid
    };

    axios({
      method: "post",
      url: "/api/signup",
      data: body
    })
      .then(response => {
        console.log(response);
      })
      .catch(error => {
        console.log(error);
      });
  };

  render() {
    const { user, signOut, signInWithGoogle, signInWithFacebook } = this.props;

    return (
      <div className="App">
        <Navigation
          user={user}
          signOut={signOut}
          google={signInWithGoogle}
          facebook={signInWithFacebook}
          datapush={this.onlogin}
        />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route
            path="/dashboard"
            component={() => <Dashboard user={user} />}
          />
          <Route
            path="/postfurn"
            component={() => <NewFurniture user={user} />}
          />
          <Route exact path="/search" component={Search} />
          <Route exact path="/browse" component={Browse} />
          {/* <Route render={() => <h2>404</h2>} /> */}
        </Switch>
      </div>
    );
  }
}

export default withFirebaseAuth({
  providers,
  firebaseAppAuth
})(App);
