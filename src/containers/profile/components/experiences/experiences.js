import React, { useState } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { updateProfileData, updateProfile } from "actions/profile";
import Experience from "./components/experience";

import Icon from "@material-ui/core/Icon";

import "./experiences.css";

function Experiences({ experiences, isOwnProfile, dispatch, userId }) {
  const [editingExperience, setEditingExperience] = useState(false);

  const submitExperience = () => {
    setEditingExperience(false);
    dispatch(updateProfile(userId, { experiences }));
  };

  const editExperience = event => {
    setEditingExperience(parseInt(event.target.id));
  };

  const handleChange = event => {
    let tempExperiences = experiences.slice();
    tempExperiences[event.target.id][event.target.name] = event.target.value;
    dispatch(updateProfileData({ experiences: tempExperiences }));
  };

  return (
    <div className="profile-container-card brand-background-dark">
      <div className="profile-container-card-header">
        <Icon className="profile-container-card-header-icon">work</Icon>
        <h3>Experience</h3>
      </div>
      {experiences &&
        experiences.map((exp, index) => (
          <Experience
            experience={exp}
            index={index}
            handleChange={handleChange}
            editExperience={editExperience}
            submitExperience={submitExperience}
            editingExperience={editingExperience}
            isOwnProfile={isOwnProfile}
          />
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
    data: { experiences, id }
  }
}) {
  return { auth, experiences, userId: id };
}

export default connect(mapStateToProps)(Experiences);
