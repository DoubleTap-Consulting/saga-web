import React from "react";

import "../experiences.css";

function Experience({
  experience,
  isOwnProfile,
  submitExperience,
  editExperience,
  handleChange,
  index,
  editingExperience
}) {
  return (
    <div
      className="profile-playerHeader-info-experience"
      key={`profileExperiences${index}`}
    >
      {isOwnProfile && (
        <button
          className={`profile-playerHeader-info-button profile-playerHeader-info-edit-main ${editingExperience ===
            index && "profile-playerHeader-info-button-save"}`}
          id={index}
          onClick={
            editingExperience === index ? submitExperience : editExperience
          }
        >
          {editingExperience === index ? "Save" : "Edit"}
        </button>
      )}
      {editingExperience === index ? (
        <div className="column">
          <input
            name="team"
            id={index}
            value={experience.team}
            onChange={handleChange}
            placeholder="Team Name"
            className="brand-input-dark"
          />
          <input
            name="game"
            id={index}
            value={experience.game}
            onChange={handleChange}
            placeholder="Game"
            className="brand-input-dark"
          />
          <input
            name="role"
            id={index}
            value={experience.role}
            onChange={handleChange}
            placeholder="Role"
            className="brand-input-dark"
          />
          <input
            name="dateFrom"
            id={index}
            value={experience.dateFrom}
            onChange={handleChange}
            placeholder="Date Started (MM/DD/YYYY)"
            className="brand-input-dark"
          />
          <input
            name="dateTo"
            id={index}
            value={experience.dateTo}
            onChange={handleChange}
            placeholder="Date Ended (MM/DD/YYYY)"
            className="brand-input-dark"
          />
          <textarea
            name="description"
            id={index}
            value={experience.description}
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
            {experience.team}, {experience.game}
          </h2>
          <h5 className="profile-playerHeader-info-experience-role">
            Role: {experience.role}
          </h5>
          <h5 className="profile-playerHeader-info-experience-date">
            {experience.dateFrom} - {experience.dateTo}
          </h5>
          <h5 className="profile-playerHeader-info-experience-description">
            {experience.description}
          </h5>
        </div>
      )}
    </div>
  );
}

export default Experience;
