import React, { useState } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { updateProfileData, updateProfile } from "actions/profile";

import Icon from "@material-ui/core/Icon";

import "./experiences.css";

function Experiences({ experiences = [], isOwnProfile, dispatch }) {
  const [editingExperience, setEditingExperience] = useState(false);
  console.log("experinces", experiences);

  const submitExperience = () => {
    setEditingExperience(false);
    dispatch(updateProfile(experiences));
  };

  const editExperience = event => {
    setEditingExperience(event.target.id);
  };

  const handleChange = event => {
    let experiences = experiences.slice();
    experiences[event.target.id][event.target.name] = event.target.value;
    dispatch(updateProfileData({ experiences }));
  };

  return (
    <div className="profile-container-card brand-background-dark">
      <div className="profile-container-card-header">
        <Icon className="profile-container-card-header-icon">work</Icon>
        <h3>Experience</h3>
      </div>
      {experiences &&
        experiences.map(exp => (
          <div
            className="profile-playerHeader-info-experience"
            key={`profileExperiences${exp.id}`}
          >
            {isOwnProfile && (
              <button
                className={`profile-playerHeader-info-button profile-playerHeader-info-edit-main ${editingExperience ===
                  exp.id && "profile-playerHeader-info-button-save"}`}
                name={exp.id}
                onClick={
                  editingExperience === exp.id
                    ? submitExperience
                    : editExperience
                }
              >
                {editingExperience === exp.id ? "Save" : "Edit"}
              </button>
            )}
            {editingExperience === exp.id ? (
              <div className="column">
                <input
                  name="team"
                  id={exp.id}
                  value={exp.team}
                  onChange={handleChange}
                  placeholder="Team Name"
                  className="brand-input-dark"
                />
                <input
                  name="game"
                  id={exp.id}
                  value={exp.game}
                  onChange={handleChange}
                  placeholder="Game"
                  className="brand-input-dark"
                />
                <input
                  name="role"
                  id={exp.id}
                  value={exp.role}
                  onChange={handleChange}
                  placeholder="Role"
                  className="brand-input-dark"
                />
                <input
                  name="dateFrom"
                  id={exp.id}
                  value={exp.dateFrom}
                  onChange={handleChange}
                  placeholder="Date Started (MM/DD/YYYY)"
                  className="brand-input-dark"
                />
                <input
                  name="dateTo"
                  id={exp.id}
                  value={exp.dateTo}
                  onChange={handleChange}
                  placeholder="Date Ended (MM/DD/YYYY)"
                  className="brand-input-dark"
                />
                <textarea
                  name="description"
                  id={exp.id}
                  value={exp.description}
                  onChange={handleChange}
                  placeholder="Description"
                  className="brand-text-area-dark"
                  rows="5"
                  maxLength="255"
                />
              </div>
            ) : (
              <div>
                <h2 className="profile-playerHeader-info-experience-team">
                  {exp.team}, {exp.game}
                </h2>
                <h5 className="profile-playerHeader-info-experience-role">
                  Role: {exp.role}
                </h5>
                <h5 className="profile-playerHeader-info-experience-date">
                  {exp.dateFrom} - {exp.dateTo}
                </h5>
                <h5 className="profile-playerHeader-info-experience-description">
                  {exp.description}
                </h5>
              </div>
            )}
          </div>
        ))}
    </div>
  );
}

Experiences.propTypes = {
  dispatch: PropTypes.func.isRequired
};

function mapStateToProps({
  auth,
  profile: {
    data: { experiences }
  }
}) {
  return { auth, experiences };
}

export default connect(mapStateToProps)(Experiences);
