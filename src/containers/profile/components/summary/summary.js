import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";

import Icon from "@material-ui/core/Icon";

import "./summary.css";

class Summary extends Component {
  constructor(props, context) {
    super(props, context);

    this.state = {};
  }

  render() {
    return (
      <div className="profile-container-card brand-background-dark">
        <div className="profile-container-card-header">
          <Icon className="profile-container-card-header-icon">class</Icon>
          <h3>Summary</h3>
          {this.props.isOwnProfile && (
            <button
              className={`profile-playerHeader-info-button profile-playerHeader-info-edit-main ${this
                .props.editingSummary &&
                "profile-playerHeader-info-button-save"}`}
              onClick={
                this.props.editingSummary
                  ? this.props.submitSummary
                  : this.props.editSummary
              }
            >
              {this.props.editingSummary ? "Save" : "Edit"}
            </button>
          )}
        </div>
        <div className="profile-container-card-body">
          {this.props.editingSummary ? (
            <textarea
              name="summary"
              value={this.props.player.summary}
              onChange={this.props.handleChange}
              placeholder="Summary"
              className="brand-text-area-dark"
              rows="5"
              maxLength="255"
            />
          ) : (
            <h3 className="profile-container-card-body-text profile-container-card-body-summary">
              {this.props.player.summary}
            </h3>
          )}
        </div>
      </div>
    );
  }
}

Summary.propTypes = {
  dispatch: PropTypes.func.isRequired
};

Summary.contextTypes = {
  router: PropTypes.object.isRequired,
  store: PropTypes.object.isRequired
};

function mapStateToProps({ auth }) {
  return { auth };
}

export default connect(mapStateToProps)(Summary);
