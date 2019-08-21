import React, { Component } from "react";
import { Router, Route, Switch } from "react-router";
import { createBrowserHistory } from "history";
import { Provider } from "react-redux";
import configureStore from "store/configureStore";
import PrivateRoute from "components/privateRoute";
import ReactGA from "react-ga";
import { getAuth } from "utils/api";
import { saveUserToStore } from "actions/auth";

// Components
import Login from "containers/login/login";
import Signup from "containers/signup/signup";
import PasswordReset from "containers/password-reset/password-reset";
import Home from "containers/home/home";
import Profile from "containers/profile/profile";
import Marketplace from "containers/marketplace/marketplace";
import Players from "containers/players/players";
import Article from "containers/article/article";
import Leagues from "containers/leagues/leagues";
import League from "containers/league/league";
import Tournaments from "containers/tournaments/tournaments";
import Tournament from "containers/tournament/tournament";
import Content from "containers/content/content";
import Confirmed from "containers/confirmed/confirmed";
import ConfirmEmail from "containers/confirm-email/confirmEmail";
import Privacy from "containers/privacy/privacy";
import Contact from "containers/contact/contact";
import Partners from "containers/partners/partners";
import About from "containers/about/about";
import Faq from "containers/faq/faq";
import Header from "containers/header/header";
import Footer from "containers/footer/footer";

import "./app.scss";

const store = configureStore();

class App extends Component {
  constructor(props, context) {
    super(props, context);

    this.authenticated = getAuth();
    // if (this.authenticated.hasValidToken) {
    //   this.props.dispatch(saveUserToStore());
    // }
    this.state = {};
  }

  componentDidMount() {
    ReactGA.initialize(process.env.REACT_APP_GOOGLE_ANALYTICS_ID);
    // this.props.history.listen(location => ReactGA.pageview(location.pathname));
  }

  render() {
    const history = createBrowserHistory();
    return (
      <Provider store={store}>
        <div className="app" id="appRoot">
          <div className="app-container">
            <div>
              <Router history={history}>
                <Header />
                <Switch>
                  <Route exact path="/" component={Home} />
                  <Route exact path="/signup" component={Signup} />
                  <Route exact path="/login" component={Login} />
                  <Route
                    exact
                    path="/passwordreset"
                    component={PasswordReset}
                  />
                  <PrivateRoute
                    path="/article/:articleId"
                    component={Article}
                  />
                  <PrivateRoute exact path="/users" component={Players} />
                  <PrivateRoute
                    exact
                    path="/tournaments"
                    component={Tournaments}
                  />
                  <PrivateRoute
                    path="/tournaments/:tournamentId"
                    component={Tournament}
                  />
                  <PrivateRoute exact path="/leagues" component={Leagues} />
                  <PrivateRoute path="/leagues/:leagueId" component={League} />
                  <PrivateRoute exact path="/content" component={Content} />
                  <Route
                    exact
                    path="/account-confirmed"
                    component={Confirmed}
                  />
                  <Route exact path="/privacy" component={Privacy} />
                  <Route exact path="/confirm-email" component={ConfirmEmail} />
                  <Route exact path="/faq" component={Faq} />
                  <Route exact path="/contact" component={Contact} />
                  <Route exact path="/partners" component={Partners} />
                  <Route exact path="/marketplace" component={Marketplace} />
                  <Route exact path="/about" component={About} />
                  <Route exact path="/:username" component={Profile} />
                </Switch>
                <Footer />
              </Router>
            </div>
          </div>
        </div>
      </Provider>
    );
  }
}

export default App;
