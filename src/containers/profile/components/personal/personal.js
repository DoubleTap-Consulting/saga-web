import React, { useState } from "react";
import { connect } from "react-redux";
import Icon from "@material-ui/core/Icon";
import moment from "moment";

import { updateProfileData, updateProfile } from "actions/profile";

import "./personal.scss";

function Personal({
  name,
  birthday,
  city,
  state,
  isOwnProfile,
  dispatch,
  userId
}) {
  const [editingPersonal, setEditingPersonal] = useState(false);

  const submitPersonal = () => {
    setEditingPersonal(false);
    dispatch(updateProfile(userId, { name, birthday, city, state }));
  };

  const editPersonal = () => {
    setEditingPersonal(true);
  };

  const handleChange = event => {
    let tempPersonal = [event.target.name].slice();
    tempPersonal = event.target.value;
    dispatch(updateProfileData({ [event.target.name]: tempPersonal }));
  };

  return (
    <div className="profile-container-card brand-background-dark">
      <div className="profile-container-card-header">
        <Icon className="profile-container-card-header-icon">person</Icon>
        <h3>Personal</h3>
        {isOwnProfile && (
          <button
            className={`profile-playerHeader-info-button profile-playerHeader-info-edit-main ${editingPersonal &&
              "profile-playerHeader-info-button-save"}`}
            onClick={editingPersonal ? submitPersonal : editPersonal}
          >
            {editingPersonal ? "Save" : "Edit"}
          </button>
        )}
      </div>
      {editingPersonal ? (
        <div className="profile-container-card-body">
          <input
            name="name"
            value={name}
            onChange={handleChange}
            placeholder="Name"
            className="brand-input-dark"
          />
          <input
            name="birthday"
            value={birthday}
            onChange={handleChange}
            placeholder="Birthday (MM/DD/YYYY)"
            className="brand-input-dark"
          />
          <input
            name="city"
            value={city}
            onChange={handleChange}
            placeholder="City"
            className="brand-input-dark"
          />
          <input
            name="state"
            value={state}
            onChange={handleChange}
            placeholder="State"
            className="brand-input-dark"
          />
        </div>
      ) : (
        <div className="profile-container-card-body">
          <div className="profile-container-card-body-line">
            <h2 className="profile-container-card-body-subtitle">Full Name</h2>
            <h3 className="profile-container-card-body-text">{`${name}`}</h3>
          </div>
          <div className="profile-container-card-body-line">
            <h2 className="profile-container-card-body-subtitle">Age</h2>
            <h3 className="profile-container-card-body-text">
              {birthday ? moment().diff(birthday, "years") : ""}
            </h3>
          </div>
          <div className="profile-container-card-body-line">
            <h2 className="profile-container-card-body-subtitle">Location</h2>
            <h3 className="profile-container-card-body-text">
              {city}, {state}
            </h3>
          </div>
        </div>
      )}
    </div>
  );
}

function mapStateToProps({
  profile: {
    data: { name, birthday, state, city, id }
  }
}) {
  return { city, state, birthday, name, userId: id };
}

export default connect(mapStateToProps)(Personal);
