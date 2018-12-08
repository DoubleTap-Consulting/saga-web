import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";

import "./confirmEmail.css";

class ConfirmEmail extends Component {
  constructor(props, context) {
    super(props, context);

    this.state = {};
  }

  render() {
    return (
      <div className="confirmEmail">
        <div className="confirmEmail-header brand-background-header">
          <h1>Registration Successful!</h1>
        </div>
        <div className="confirmEmail-container">
          <h3>Please confirm your email address before continuing.</h3>
        </div>
      </div>
    );
  }
}

ConfirmEmail.propTypes = {
  dispatch: PropTypes.func.isRequired,
  location: PropTypes.object.isRequired,
  auth: PropTypes.object.isRequired
};

ConfirmEmail.contextTypes = {
  router: PropTypes.object.isRequired,
  store: PropTypes.object.isRequired
};

function mapStateToProps({ auth }) {
  return { auth };
}

export default connect(mapStateToProps)(ConfirmEmail);
