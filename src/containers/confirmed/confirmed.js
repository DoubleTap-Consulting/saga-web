import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";

import { emailConfirmed } from "actions/auth";

import "./confirmed.css";

class Confirmed extends Component {
  constructor(props, context) {
    super(props, context);

    this.state = {};
  }

  componentDidMount() {
    let token = this.props.location.search.slice(17);
    this.props.dispatch(emailConfirmed(token));
  }

  render() {
    return (
      <div className="confirmed">
        <div className="confirmEmail-header brand-background-header">
          <h1>Email Validation!</h1>
        </div>
        <div className="confirmed-container">
          <h3>
            Thanks for confirming your email! Redirecting you in 3... 2... 1...
          </h3>
        </div>
      </div>
    );
  }
}

Confirmed.propTypes = {
  dispatch: PropTypes.func.isRequired,
  location: PropTypes.object.isRequired,
  auth: PropTypes.object.isRequired
};

Confirmed.contextTypes = {
  router: PropTypes.object.isRequired,
  store: PropTypes.object.isRequired
};

function mapStateToProps({ auth }) {
  return { auth };
}

export default connect(mapStateToProps)(Confirmed);
