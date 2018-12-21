import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";

import Icon from "@material-ui/core/Icon";

import "./settings.css";

class Settings extends Component {
  constructor(props, context) {
    super(props, context);

    this.state = {};
  }

  render() {
    return (
      <div className="profile-container-card brand-background-dark">
        <div className="profile-container-card-header">
          <Icon className="profile-container-card-header-icon">settings</Icon>
          <h3>Settings</h3>
        </div>
        <div className="profile-container-card-body">
          <h3 className="profile-container-card-body-text">
            Selected Game: {this.props.player.game}
          </h3>
          <h3 className="profile-container-card-body-text">
            Gaming Level: Competitive
          </h3>
          <div className="divider" />
          <button className="brand-button-failure">Delete my Account</button>
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

function mapStateToProps({ auth }) {
  return { auth };
}

export default connect(mapStateToProps)(Settings);
