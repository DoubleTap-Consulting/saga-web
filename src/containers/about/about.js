import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";

import "./about.scss";

class About extends Component {
  constructor(props, context) {
    super(props, context);

    this.state = {};
  }

  render() {
    return (
      <div className="about">
        <div className="about-header brand-background-header">
          <h1>About Us</h1>
        </div>
        <div className="about-container">
          <h3>More information coming soon :)</h3>
        </div>
      </div>
    );
  }
}

About.propTypes = {
  dispatch: PropTypes.func.isRequired,
  location: PropTypes.object.isRequired,
  auth: PropTypes.object.isRequired
};

function mapStateToProps({ auth }) {
  return { auth };
}

export default connect(mapStateToProps)(About);
