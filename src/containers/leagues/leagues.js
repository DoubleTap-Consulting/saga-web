import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";

import "./leagues.css";

class Leagues extends Component {
  constructor(props, context) {
    super(props, context);

    this.state = {};
  }

  render() {
    return (
      // map settings, stats, schedule, leaderboards
      <div className="leagues">
        <div className="leagues-header brand-background-header">
          <h1>Leagues</h1>
        </div>
        <div className="leagues-container">
          <h3>Coming soon</h3>
        </div>
      </div>
    );
  }
}

Leagues.propTypes = {
  dispatch: PropTypes.func.isRequired,
  location: PropTypes.object.isRequired,
  auth: PropTypes.object.isRequired
};

function mapStateToProps({ auth }) {
  return { auth };
}

export default connect(mapStateToProps)(Leagues);
