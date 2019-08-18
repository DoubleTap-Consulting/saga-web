import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";

import "./partners.scss";

class Partners extends Component {
  constructor(props, context) {
    super(props, context);

    this.state = {};
  }

  render() {
    return (
      <div className="partners">
        <div className="partners-header brand-background-header">
          <h1>Partners</h1>
        </div>
        <div className="partners-container">
          <h3>More information coming soon :)</h3>
        </div>
      </div>
    );
  }
}

Partners.propTypes = {
  dispatch: PropTypes.func.isRequired,
  location: PropTypes.object.isRequired,
  auth: PropTypes.object.isRequired
};

function mapStateToProps({ auth }) {
  return { auth };
}

export default connect(mapStateToProps)(Partners);
