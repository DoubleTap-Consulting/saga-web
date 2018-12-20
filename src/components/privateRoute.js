import React, { Component } from "react";
import { connect } from "react-redux";
import { Route, Redirect } from "react-router";
import PropTypes from "prop-types";
import { getAuth } from "../utils/api";

class PrivateRoute extends Component {
  constructor() {
    super();

    this.authenticated = getAuth();
  }

  render() {
    const ChildComponent = this.props.component;

    return (
      <Route
        {...this.props.rest}
        render={props =>
          this.authenticated.hasValidToken ? (
            <ChildComponent {...props} />
          ) : (
            <Redirect // eslint-disable-line
              to={{
                pathname: "/login",
                state: { from: props.location } // eslint-disable-line react/prop-types
              }}
            />
          )
        }
      />
    );
  }
}

PrivateRoute.propTypes = {
  component: PropTypes.func.isRequired,
  dispatch: PropTypes.func.isRequired,
  rest: PropTypes.array,
  user: PropTypes.object
};

PrivateRoute.defaultProps = {
  rest: undefined,
  user: null
};

PrivateRoute.contextTypes = {
  store: PropTypes.object.isRequired,
  router: PropTypes.object.isRequired
};

function mapStateToProps({ auth: { user, loginError } }) {
  if (user) {
    return { user };
  }
  return { user: null };
}

export default connect(mapStateToProps)(PrivateRoute);
