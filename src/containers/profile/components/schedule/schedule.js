import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";

import Icon from "@material-ui/core/Icon";

import "./schedule.css";

class Schedule extends Component {
  constructor(props, context) {
    super(props, context);

    this.state = {};
  }

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
        {this.props.editingSchedule ? (
          <div className="profile-container-card-body">
            <input
              name="monday"
              value={this.props.player.schedule.monday}
              onChange={this.props.handleChange}
              placeholder="Day Off"
              className="brand-input-dark"
            />
            <input
              name="tuesday"
              value={this.props.player.schedule.tuesday}
              onChange={this.props.handleChange}
              placeholder="Day Off"
              className="brand-input-dark"
            />
            <input
              name="wednesday"
              value={this.props.player.schedule.wednesday}
              onChange={this.props.handleChange}
              placeholder="Day Off"
              className="brand-input-dark"
            />
            <input
              name="thursday"
              value={this.props.player.schedule.thursday}
              onChange={this.props.handleChange}
              placeholder="Day Off"
              className="brand-input-dark"
            />
            <input
              name="friday"
              value={this.props.player.schedule.friday}
              onChange={this.props.handleChange}
              placeholder="Day Off"
              className="brand-input-dark"
            />
            <input
              name="saturday"
              value={this.props.player.schedule.saturday}
              onChange={this.props.handleChange}
              placeholder="Day Off"
              className="brand-input-dark"
            />
            <input
              name="sunday"
              value={this.props.player.schedule.sunday}
              onChange={this.props.handleChange}
              placeholder="Day Off"
              className="brand-input-dark"
            />
          </div>
        ) : (
          <div className="profile-container-card-body">
            <h3 className="profile-container-card-body-text">
              Monday: {this.props.player.schedule.monday || "Day Off"}
            </h3>
            <h3 className="profile-container-card-body-text">
              Tuesday: {this.props.player.schedule.tuesday || "Day Off"}
            </h3>
            <h3 className="profile-container-card-body-text">
              Wednesday: {this.props.player.schedule.wednesday || "Day Off"}
            </h3>
            <h3 className="profile-container-card-body-text">
              Thursday: {this.props.player.schedule.thursday || "Day Off"}
            </h3>
            <h3 className="profile-container-card-body-text">
              Friday: {this.props.player.schedule.friday || "Day Off"}
            </h3>
            <h3 className="profile-container-card-body-text">
              Saturday: {this.props.player.schedule.saturday || "Day Off"}
            </h3>
            <h3 className="profile-container-card-body-text">
              Sunday: {this.props.player.schedule.sunday || "Day Off"}
            </h3>
          </div>
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

function mapStateToProps({ auth }) {
  return { auth };
}

export default connect(mapStateToProps)(Schedule);
