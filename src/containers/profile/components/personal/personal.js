import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";

import Icon from "@material-ui/core/Icon";
import moment from "moment";

import "./personal.scss";

class Personal extends Component {
  render() {
    return (
      <div className="profile-container-card brand-background-dark">
        <div className="profile-container-card-header">
          <Icon className="profile-container-card-header-icon">person</Icon>
          <h3>Personal</h3>
          {this.props.isOwnProfile && (
            <button
              className={`profile-playerHeader-info-button profile-playerHeader-info-edit-main ${this
                .props.editingPersonal &&
                "profile-playerHeader-info-button-save"}`}
              onClick={
                this.props.editingPersonal
                  ? this.props.submitPersonal
                  : this.props.editPersonal
              }
            >
              {this.props.editingPersonal ? "Save" : "Edit"}
            </button>
          )}
        </div>
        {this.props.editingPersonal ? (
          <div className="profile-container-card-body">
            <input
              name="name"
              value={this.props.profile.name}
              onChange={this.props.handlePlayerChange}
              placeholder="Name"
              className="brand-input-dark"
            />
            <input
              name="birthday"
              value={this.props.profile.birthday}
              onChange={this.props.handlePlayerChange}
              placeholder="Birthday (MM/DD/YYYY)"
              className="brand-input-dark"
            />
            <input
              name="location"
              value={this.props.profile.city}
              onChange={this.props.handlePlayerChange}
              placeholder="City"
              className="brand-input-dark"
            />
            <input
              name="location"
              value={this.props.profile.state}
              onChange={this.props.handlePlayerChange}
              placeholder="State"
              className="brand-input-dark"
            />
          </div>
        ) : (
          <div className="profile-container-card-body">
            <div className="profile-container-card-body-line">
              <h2 className="profile-container-card-body-subtitle">
                Full Name
              </h2>
              <h3 className="profile-container-card-body-text">
                {`${this.props.profile.name}`}
              </h3>
            </div>
            <div className="profile-container-card-body-line">
              <h2 className="profile-container-card-body-subtitle">Age</h2>
              <h3 className="profile-container-card-body-text">
                {this.props.profile.birthday
                  ? moment().diff(this.props.player.birthday, "years")
                  : ""}
              </h3>
            </div>
            <div className="profile-container-card-body-line">
              <h2 className="profile-container-card-body-subtitle">Location</h2>
              <h3 className="profile-container-card-body-text">
                {this.props.profile.city}, {this.props.profile.state}
              </h3>
            </div>
          </div>
        )}
      </div>
    );
  }
}

Personal.propTypes = {
  dispatch: PropTypes.func.isRequired
};

function mapStateToProps({ auth, profile: { data: profile } }) {
  return { auth, profile };
}

export default connect(mapStateToProps)(Personal);
