import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";

import Icon from "@material-ui/core/Icon";

import "./endorsements.css";

class Endorsements extends Component {
  constructor(props, context) {
    super(props, context);

    this.state = {};
  }

  render() {
    return (
      <div className="profile-container-card brand-background-dark">
        <div className="profile-container-card-header">
          <Icon className="profile-container-card-header-icon">group</Icon>
          <h3>Endorsements</h3>
        </div>
        {this.props.endorsements.map(endorsement => (
          <div
            className="profile-playerHeader-info-experience"
            key={`profileEndorsements${endorsement.id}`}
          >
            {/* TODO: create how this looks */}
            <h5>Endorsement</h5>
          </div>
        ))}
        {this.props.endorsements.length === 0 && (
          <div className="profile-playerHeader-info-experience">
            <h3 className="profile-container-card-body-text">
              No endorsements to show.
            </h3>
          </div>
        )}
      </div>
    );
  }
}

Endorsements.propTypes = {
  dispatch: PropTypes.func.isRequired
};

Endorsements.contextTypes = {
  router: PropTypes.object.isRequired,
  store: PropTypes.object.isRequired
};

function mapStateToProps({ auth }) {
  return { auth };
}

export default connect(mapStateToProps)(Endorsements);
