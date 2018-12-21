import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";

import Icon from "@material-ui/core/Icon";
import moment from "moment";

import "./personal.css";

class Personal extends Component {
  constructor(props, context) {
    super(props, context);

    this.state = {};
  }

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
              name="firstName"
              value={this.props.player.firstName}
              onChange={this.props.handleChange}
              placeholder="First Name"
              className="brand-input-dark"
            />
            <input
              name="lastName"
              value={this.props.player.lastName}
              onChange={this.props.handleChange}
              placeholder="Last Name"
              className="brand-input-dark"
            />
            <input
              name="birthday"
              value={this.props.player.birthday}
              onChange={this.props.handleChange}
              placeholder="Birthday (MM/DD/YYYY)"
              className="brand-input-dark"
            />
            <input
              name="location"
              value={this.props.player.location}
              onChange={this.props.handleChange}
              placeholder="Location"
              className="brand-input-dark"
            />
          </div>
        ) : (
          <div className="profile-container-card-body">
            <h3>First Name: {this.props.player.firstName}</h3>
            <h3>Last Name: {this.props.player.lastName}</h3>
            <h3>
              Age:{" "}
              {this.props.player.birthday
                ? moment().diff(this.props.player.birthday, "years")
                : ""}
            </h3>
            <h3>Location: {this.props.player.location}</h3>
          </div>
        )}
      </div>
    );
  }
}

Personal.propTypes = {
  dispatch: PropTypes.func.isRequired
};

Personal.contextTypes = {
  router: PropTypes.object.isRequired,
  store: PropTypes.object.isRequired
};

function mapStateToProps({ auth }) {
  return { auth };
}

export default connect(mapStateToProps)(Personal);
