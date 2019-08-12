import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";

import Icon from "@material-ui/core/Icon";

import StatTabs from "./components/statTabs/statTabs";

import "./stats.css";

class Stats extends Component {
  constructor(props, context) {
    super(props, context);

    this.state = {};
  }

  render() {
    return (
      <div className="stats profile-container-card brand-background-dark">
        <div className="profile-container-card-header">
          {this.props.icon && (
            <Icon className="profile-container-card-header-icon">
              {this.props.icon}
            </Icon>
          )}
          <h3>{this.props.title}</h3>
        </div>
        <div className="stats-container profile-playerHeader-info-experience">
          {/* PUBG */}
          {this.props.profile.game === "PUBG" && (
            <StatTabs stats={this.props.stats} order={this.props.order} />
          )}
        </div>
      </div>
    );
  }
}

Stats.propTypes = {
  dispatch: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  lifetimeStats: PropTypes.array,
  order: PropTypes.array
};

Stats.contextTypes = {
  router: PropTypes.object.isRequired,
  store: PropTypes.object.isRequired
};

Stats.defaultProps = {
  lifetimeStats: [],
  order: []
};

function mapStateToProps({ auth, profile: { data: profile } }) {
  return { auth, profile };
}

export default connect(mapStateToProps)(Stats);
