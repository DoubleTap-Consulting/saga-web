import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";

import "./marketplace.css";

class Marketplace extends Component {
  constructor(props, context) {
    super(props, context);

    this.state = {};
  }

  render() {
    return (
      <div className="marketplace">
        <div className="marketplace-header brand-background-header">
          <h1>Marketplace</h1>
        </div>
        <div className="marketplace-container">
          <h3>More information coming soon :)</h3>
        </div>
      </div>
    );
  }
}

Marketplace.propTypes = {
  dispatch: PropTypes.func.isRequired,
  location: PropTypes.object.isRequired,
  auth: PropTypes.object.isRequired
};

Marketplace.contextTypes = {
  router: PropTypes.object.isRequired,
  store: PropTypes.object.isRequired
};

function mapStateToProps({ auth }) {
  return { auth };
}

export default connect(mapStateToProps)(Marketplace);
