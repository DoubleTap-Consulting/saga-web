import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";

import Icon from "@material-ui/core/Icon";

import "./schedule.css";

class Schedule extends Component {
  render() {
    return (
      <div className="profile-container-card brand-background-dark">
        <div className="profile-container-card-header">
          <Icon className="profile-container-card-header-icon">
            calendar_today
          </Icon>
          <h3>Schedule</h3>
          {this.props.isOwnProfile && (
            <button
              className={`profile-playerHeader-info-button profile-playerHeader-info-edit-main ${this
                .props.editingSchedule &&
                "profile-playerHeader-info-button-save"}`}
              onClick={
                this.props.editingSchedule
                  ? this.props.submitSchedule
                  : this.props.editSchedule
              }
            >
              {this.props.editingSchedule ? "Save" : "Edit"}
            </button>
          )}
        </div>
        {this.props.profile.schedule && (
          <span>
            {this.props.editingSchedule ? (
              <div className="profile-container-card-body">
                <input
                  name="monday"
                  value={this.props.profile.schedule.monday}
                  onChange={this.props.handlePlayerChange}
                  placeholder="Day Off"
                  className="brand-input-dark"
                />
                <input
                  name="tuesday"
                  value={this.props.profile.schedule.tuesday}
                  onChange={this.props.handlePlayerChange}
                  placeholder="Day Off"
                  className="brand-input-dark"
                />
                <input
                  name="wednesday"
                  value={this.props.profile.schedule.wednesday}
                  onChange={this.props.handlePlayerChange}
                  placeholder="Day Off"
                  className="brand-input-dark"
                />
                <input
                  name="thursday"
                  value={this.props.profile.schedule.thursday}
                  onChange={this.props.handlePlayerChange}
                  placeholder="Day Off"
                  className="brand-input-dark"
                />
                <input
                  name="friday"
                  value={this.props.profile.schedule.friday}
                  onChange={this.props.handlePlayerChange}
                  placeholder="Day Off"
                  className="brand-input-dark"
                />
                <input
                  name="saturday"
                  value={this.props.profile.schedule.saturday}
                  onChange={this.props.handlePlayerChange}
                  placeholder="Day Off"
                  className="brand-input-dark"
                />
                <input
                  name="sunday"
                  value={this.props.profile.schedule.sunday}
                  onChange={this.props.handlePlayerChange}
                  placeholder="Day Off"
                  className="brand-input-dark"
                />
              </div>
            ) : (
              // FIX THIS
              <div className="profile-container-card-body">
                <div className="profile-container-card-body-line">
                  <h3 className="profile-container-card-body-subtitle">
                    Monday
                  </h3>
                  <h3 className="profile-container-card-body-text">
                    {this.props.profile.schedule.monday || "Day Off"}
                  </h3>
                </div>
                <div className="profile-container-card-body-line">
                  <h3 className="profile-container-card-body-subtitle">
                    Tuesday
                  </h3>
                  <h3 className="profile-container-card-body-text">
                    {this.props.profile.schedule.tuesday || "Day Off"}
                  </h3>
                </div>
                <div className="profile-container-card-body-line">
                  <h3 className="profile-container-card-body-subtitle">
                    Wednesday
                  </h3>
                  <h3 className="profile-container-card-body-text">
                    {this.props.profile.schedule.wednesday || "Day Off"}
                  </h3>
                </div>
                <div className="profile-container-card-body-line">
                  <h3 className="profile-container-card-body-subtitle">
                    Thursday
                  </h3>
                  <h3 className="profile-container-card-body-text">
                    {this.props.profile.schedule.thursday || "Day Off"}
                  </h3>
                </div>
                <div className="profile-container-card-body-line">
                  <h3 className="profile-container-card-body-subtitle">
                    Friday
                  </h3>
                  <h3 className="profile-container-card-body-text">
                    {this.props.profile.schedule.friday || "Day Off"}
                  </h3>
                </div>
                <div className="profile-container-card-body-line">
                  <h3 className="profile-container-card-body-subtitle">
                    Saturday
                  </h3>
                  <h3 className="profile-container-card-body-text">
                    {this.props.profile.schedule.saturday || "Day Off"}
                  </h3>
                </div>
                <div className="profile-container-card-body-line">
                  <h3 className="profile-container-card-body-subtitle">
                    Sunday
                  </h3>
                  <h3 className="profile-container-card-body-text">
                    {this.props.profile.schedule.sunday || "Day Off"}
                  </h3>
                </div>
              </div>
            )}
          </span>
        )}
      </div>
    );
  }
}

Schedule.propTypes = {
  dispatch: PropTypes.func.isRequired
};

Schedule.contextTypes = {
  router: PropTypes.object.isRequired,
  store: PropTypes.object.isRequired
};

function mapStateToProps({ auth, profile: { data: profile } }) {
  return { auth, profile };
}

export default connect(mapStateToProps)(Schedule);
