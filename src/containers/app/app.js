import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { Route, Switch } from "react-router";
import asyncLoader from "components/asyncComponentLoader";
import PrivateRoute from "components/privateRoute";
import { saveUserToStore } from "actions/auth";
// import { getUserInfo } from "actions/user";
import { getAuth } from "utils/api";
import { Helmet } from "react-helmet";
// Relative imports
import Header from "../header/header";
import Footer from "../footer/footer";
import Profile from "../../containers/profile/profile";
import { ScrollContext } from "react-router-scroll-4";
import ReactGA from "react-ga";

import "./app.css";

const asyncLogin = asyncLoader(() => require("../../containers/login/login"));
const asyncSignup = asyncLoader(() =>
  require("../../containers/signup/signup")
);
const asyncPasswordReset = asyncLoader(() =>
  require("../../containers/password-reset/password-reset")
);
const asyncHome = asyncLoader(() => require("../../containers/home/home"));
const asyncProfile = asyncLoader(() =>
  require("../../containers/profile/profile")
);
const asyncMarketplace = asyncLoader(() =>
  require("../../containers/marketplace/marketplace")
);
const asyncPlayers = asyncLoader(() =>
  require("../../containers/players/players")
);
const asyncArticle = asyncLoader(() =>
  require("../../containers/article/article")
);
const asyncLeagues = asyncLoader(() =>
  require("../../containers/leagues/leagues")
);
const asyncLeague = asyncLoader(() =>
  require("../../containers/league/league")
);
const asyncTournaments = asyncLoader(() =>
  require("../../containers/tournaments/tournaments")
);
const asyncTournament = asyncLoader(() =>
  require("../../containers/tournament/tournament")
);
const asyncContent = asyncLoader(() =>
  require("../../containers/content/content")
);
const asyncConfirmed = asyncLoader(() =>
  require("../../containers/confirmed/confirmed")
);
const asyncConfirmEmail = asyncLoader(() =>
  require("../../containers/confirm-email/confirmEmail")
);
const asyncPrivacy = asyncLoader(() =>
  require("../../containers/privacy/privacy")
);
const asyncContact = asyncLoader(() =>
  require("../../containers/contact/contact")
);
const asyncPartners = asyncLoader(() =>
  require("../../containers/partners/partners")
);
const asyncAbout = asyncLoader(() => require("../../containers/about/about"));
const asyncFaq = asyncLoader(() => require("../../containers/faq/faq"));

class App extends Component {
  constructor(props) {
    super(props);

    this.authenticated = getAuth();
    if (this.authenticated.hasValidToken) {
      this.props.dispatch(saveUserToStore());
    }

    this.state = {};
  }

  componentDidMount() {
    ReactGA.initialize(process.env.REACT_APP_GOOGLE_ANALYTICS_ID);
    this.props.history.listen(location => ReactGA.pageview(location.pathname));
  }

  render() {
    return (
      <div className="app">
        <Helmet>
          <meta charSet="utf-8" />
          <title>Saga.GG - your home for esports</title>
          <meta
            name="description"
            content="Your esports resume, curated content, events and much more."
          />
          <link rel="canonical" href="http://saga.gg" />
        </Helmet>
        <Header location={this.props.location} />
        <ScrollContext>
          <div className="app-container">
            <Switch>
              <Route exact path="/" component={asyncHome} />
              <Route path="/signup" component={asyncSignup} />
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
              <PrivateRoute exact path="/users" component={asyncPlayers} />
              <PrivateRoute
                exact
                path="/tournaments"
                component={asyncTournaments}
              />
              <PrivateRoute
                exact
                path="/tournaments/:tournamentId"
                component={asyncTournament}
              />
              <PrivateRoute exact path="/leagues" component={asyncLeagues} />
              <PrivateRoute
                exact
                path="/leagues/:leagueId"
                component={asyncLeague}
              />
              <PrivateRoute exact path="/content" component={asyncContent} />
              <Route
                exact
                path="/account-confirmed"
                component={asyncConfirmed}
              />
              <Route exact path="/privacy" component={asyncPrivacy} />
              <Route
                exact
                path="/confirm-email"
                component={asyncConfirmEmail}
              />
              <Route exact path="/faq" component={asyncFaq} />
              <Route exact path="/contact" component={asyncContact} />
              <Route exact path="/partners" component={asyncPartners} />
              <Route exact path="/marketplace" component={asyncMarketplace} />
              <Route exact path="/about" component={asyncAbout} />
              <PrivateRoute exact path="/:username" component={asyncProfile} />
              {/* TODO: check to see if below worked for refreshing profile upon URL change */}
              <Route
                exact
                path="/:username"
                render={props => (
                  <Profile key={this.props.location.pathname} {...props} />
                )}
              />
              <Route component={asyncHome} />
            </Switch>
          </div>
        </ScrollContext>
        <Footer />
      </div>
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
