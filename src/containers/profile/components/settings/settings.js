import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";

import Icon from "@material-ui/core/Icon";

import "./settings.css";

class Settings extends Component {
  render() {
    return (
      <div className="profile-container-card brand-background-dark">
        <div className="profile-container-card-header">
          <Icon className="profile-container-card-header-icon">settings</Icon>
          <h3>Settings</h3>
        </div>
        <div className="profile-container-card-body">
          <h3 className="profile-container-card-body-text">
            Selected Game:
            <select
              className="brand-select"
              value={this.props.profile.game}
              name="game"
              style={{ marginLeft: "5px" }}
              onChange={this.props.handleChange}
            >
              <option value={"PUBG"}>PUBG</option>
              <option value={"FORTNITE"}>Fortnite</option>
              <option value={"BLACKOUT"}>Blackout</option>
            </select>
          </h3>
          <h3 className="profile-container-card-body-text">
            Gaming Level:
            <select
              className="brand-select"
              value={this.props.profile.gaming_level}
              name="level"
              style={{ marginLeft: "5px" }}
              onChange={this.props.handleChange}
            >
              <option value={"CASUAL"}>Casual</option>
              <option value={"STREAMER"}>Streamer</option>
              <option value={"ASPIRING_PRO"}>Aspiring Pro</option>
              <option value={"PRO_TIER_3"}>Pro - Tier 3</option>
              <option value={"PRO_TIER_2"}>Pro - Tier 2</option>
              <option value={"PRO_TIER_1"}>Pro - Tier 1</option>
            </select>
          </h3>
          <h3 className="profile-container-card-body-text">
            Game Perspective Preference:
            <select
              className="brand-select"
              value={this.props.profile.perspective_preference}
              name="perspectivePreference"
              style={{ marginLeft: "5px" }}
              onChange={this.props.handleChange}
            >
              <option value={"FPP"}>FPP</option>
              <option value={"TPP"}>TPP</option>
              <option value={"BOTH"}>Both</option>
            </select>
          </h3>
          <div className="divider" />
          <button
            className="brand-button-failure-dark right"
            onClick={this.props.deleteAccount}
          >
            Delete my Account
          </button>
        </div>
      </div>
    );
  }
}

Settings.propTypes = {
  dispatch: PropTypes.func.isRequired
};

Settings.contextTypes = {
  router: PropTypes.object.isRequired,
  store: PropTypes.object.isRequired
};

function mapStateToProps({ auth, profile: { data: profile } }) {
  return { auth, profile };
}

export default connect(mapStateToProps)(Settings);
