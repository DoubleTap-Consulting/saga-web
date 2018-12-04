import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { Route, Switch } from "react-router";

import asyncLoader from "components/asyncComponentLoader";
import PrivateRoute from "components/privateRoute";
// import { refreshLogin } from 'actions/auth';
import ScrollToTop from "../scroll-to-top/ScrollToTop";
import { getUserInfo } from "actions/user";
import { getAuth } from "utils/api";

// Relative imports
import Header from "../header/header";

import "./app.css";

const asyncLogin = asyncLoader(() => require("../../containers/login/login"));
const asyncSignup = asyncLoader(() =>
  require("../../containers/signup/signup")
);
const asyncPasswordReset = asyncLoader(() =>
  require("../../containers/password-reset/password-reset")
);
const asyncEmailValidation = asyncLoader(() =>
  require("../../containers/email-validation/emailValidation")
);
const asyncHome = asyncLoader(() => require("../../containers/home/home"));
const asyncProfile = asyncLoader(() =>
  require("../../containers/profile/profile")
);
const asyncPlayers = asyncLoader(() =>
  require("../../containers/players/players")
);
const asyncArticle = asyncLoader(() =>
  require("../../containers/article/article")
);
const asyncTournaments = asyncLoader(() =>
  require("../../containers/tournaments/tournaments")
);

class App extends Component {
  constructor(props) {
    super(props);

    getAuth();
    if (this.props.auth.profile) {
      this.props.dispatch(getUserInfo());
    }

    this.state = {};
  }

  render() {
    return (
      <ScrollToTop history={this.props.history}>
        <div className="app">
          <Header location={this.props.location} />
          <div className="app-container">
            <Switch>
              <Route exact path="/" component={asyncHome} />
              <Route path="/signup" component={asyncSignup} />
              <Route
                path="/emailvalidation/:token"
                component={asyncEmailValidation}
              />
              <Route
                path="/login"
                component={asyncLogin}
                location={this.props.location}
              />
              <Route path="/passwordreset" component={asyncPasswordReset} />
              <PrivateRoute
                path="/article/:articleId"
                component={asyncArticle}
              />
              <PrivateRoute path="/players" component={asyncPlayers} />
              <PrivateRoute path="/tournaments" component={asyncTournaments} />
              <PrivateRoute path="/profile" component={asyncProfile} />
              <PrivateRoute
                exact
                path="/profile/:username"
                component={asyncProfile}
              />
              <Route component={asyncHome} />
            </Switch>
          </div>
        </div>
      </ScrollToTop>
    );
  }
}

App.propTypes = {
  dispatch: PropTypes.func.isRequired,
  location: PropTypes.object.isRequired,
  history: PropTypes.object.isRequired
};

App.contextTypes = {
  history: PropTypes.object,
  router: PropTypes.object
};

const mapStateToProps = ({ auth, user }) => {
  return { auth, user };
};

export default connect(mapStateToProps)(App);
