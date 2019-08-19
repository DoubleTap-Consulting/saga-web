import React, { useState } from "react";
import { connect } from "react-redux";
import Icon from "@material-ui/core/Icon";
import { updateProfileData, updateProfile } from "actions/profile";

import "./schedule.scss";

function Schedule({
  schedule = {
    monday: "",
    tuesday: "",
    wednesday: "",
    thursday: "",
    friday: "",
    saturday: "",
    sunday: ""
  },
  isOwnProfile,
  dispatch,
  userId
}) {
  const [editingSchedule, setEditingSchedule] = useState(false);

  const submitSchedule = () => {
    setEditingSchedule(false);
    dispatch(updateProfile(userId, { schedule }));
  };

  const editSchedule = () => {
    setEditingSchedule(true);
  };

  const handleChange = event => {
    let tempSchedule = { ...schedule };
    tempSchedule[event.target.name] = event.target.value;
    dispatch(updateProfileData({ schedule: tempSchedule }));
  };

  return (
    <div className="profile-container-card brand-background-dark">
      <div className="profile-container-card-header">
        <Icon className="profile-container-card-header-icon">
          calendar_today
        </Icon>
        <h3>Schedule</h3>
        {isOwnProfile && (
          <button
            className={`profile-playerHeader-info-button profile-playerHeader-info-edit-main ${editingSchedule &&
              "profile-playerHeader-info-button-save"}`}
            onClick={editingSchedule ? submitSchedule : editSchedule}
          >
            {editingSchedule ? "Save" : "Edit"}
          </button>
        )}
      </div>
      {schedule && (
        <span>
          {editingSchedule ? (
            <div className="profile-container-card-body">
              <div className="row">
                <h5 className="schedule-inputContainer-title">Monday</h5>
                <input
                  name="monday"
                  value={schedule.monday}
                  onChange={handleChange}
                  placeholder="Day Off"
                  className="brand-input-dark"
                />
              </div>
              <div className="row">
                <h5 className="schedule-inputContainer-title">Tuesday</h5>
                <input
                  name="tuesday"
                  value={schedule.tuesday}
                  onChange={handleChange}
                  placeholder="Day Off"
                  className="brand-input-dark"
                />
              </div>
              <div className="row">
                <h5 className="schedule-inputContainer-title">Wednesday</h5>
                <input
                  name="wednesday"
                  value={schedule.wednesday}
                  onChange={handleChange}
                  placeholder="Day Off"
                  className="brand-input-dark"
                />
              </div>
              <div className="row">
                <h5 className="schedule-inputContainer-title">Thursday</h5>
                <input
                  name="thursday"
                  value={schedule.thursday}
                  onChange={handleChange}
                  placeholder="Day Off"
                  className="brand-input-dark"
                />
              </div>
              <div className="row">
                <h5 className="schedule-inputContainer-title">Friday</h5>
                <input
                  name="friday"
                  value={schedule.friday}
                  onChange={handleChange}
                  placeholder="Day Off"
                  className="brand-input-dark"
                />
              </div>
              <div className="row">
                <h5 className="schedule-inputContainer-title">Saturday</h5>
                <input
                  name="saturday"
                  value={schedule.saturday}
                  onChange={handleChange}
                  placeholder="Day Off"
                  className="brand-input-dark"
                />
              </div>
              <div className="row">
                <h5 className="schedule-inputContainer-title">Sunday</h5>
                <input
                  name="sunday"
                  value={schedule.sunday}
                  onChange={handleChange}
                  placeholder="Day Off"
                  className="brand-input-dark"
                />
              </div>
            </div>
          ) : (
            <div className="profile-container-card-body">
              <div className="profile-container-card-body-line">
                <h3 className="profile-container-card-body-subtitle">Monday</h3>
                <h3 className="profile-container-card-body-text">
                  {schedule.monday || "Day Off"}
                </h3>
              </div>
              <div className="profile-container-card-body-line">
                <h3 className="profile-container-card-body-subtitle">
                  Tuesday
                </h3>
                <h3 className="profile-container-card-body-text">
                  {schedule.tuesday || "Day Off"}
                </h3>
              </div>
              <div className="profile-container-card-body-line">
                <h3 className="profile-container-card-body-subtitle">
                  Wednesday
                </h3>
                <h3 className="profile-container-card-body-text">
                  {schedule.wednesday || "Day Off"}
                </h3>
              </div>
              <div className="profile-container-card-body-line">
                <h3 className="profile-container-card-body-subtitle">
                  Thursday
                </h3>
                <h3 className="profile-container-card-body-text">
                  {schedule.thursday || "Day Off"}
                </h3>
              </div>
              <div className="profile-container-card-body-line">
                <h3 className="profile-container-card-body-subtitle">Friday</h3>
                <h3 className="profile-container-card-body-text">
                  {schedule.friday || "Day Off"}
                </h3>
              </div>
              <div className="profile-container-card-body-line">
                <h3 className="profile-container-card-body-subtitle">
                  Saturday
                </h3>
                <h3 className="profile-container-card-body-text">
                  {schedule.saturday || "Day Off"}
                </h3>
              </div>
              <div className="profile-container-card-body-line">
                <h3 className="profile-container-card-body-subtitle">Sunday</h3>
                <h3 className="profile-container-card-body-text">
                  {schedule.sunday || "Day Off"}
                </h3>
              </div>
            </div>
          )}
        </span>
      )}
    </div>
  );
}

function mapStateToProps({
  profile: {
    data: { schedule, id }
  }
}) {
  return { schedule, userId: id };
}

export default connect(mapStateToProps)(Schedule);
