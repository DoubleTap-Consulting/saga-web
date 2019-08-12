import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";

import Icon from "@material-ui/core/Icon";

import "./experiences.css";

class Experiences extends Component {
  render() {
    return (
      <div className="profile-container-card brand-background-dark">
        <div className="profile-container-card-header">
          <Icon className="profile-container-card-header-icon">work</Icon>
          <h3>Experience</h3>
        </div>
        {this.props.profile.experiences &&
          this.props.profile.experiences.map(exp => (
            <div
              className="profile-playerHeader-info-experience"
              key={`profileExperiences${exp.id}`}
            >
              {this.props.isOwnProfile && (
                <button
                  className={`profile-playerHeader-info-button profile-playerHeader-info-edit-main ${this
                    .props.editingExperience === exp.id &&
                    "profile-playerHeader-info-button-save"}`}
                  name={exp.id}
                  onClick={
                    this.props.editingExperience === exp.id
                      ? this.props.submitExperience
                      : this.props.editExperience
                  }
                >
                  {this.props.editingExperience === exp.id ? "Save" : "Edit"}
                </button>
              )}
              {this.props.editingExperience === exp.id ? (
                <div className="column">
                  <input
                    name="team"
                    id={exp.id}
                    value={exp.team}
                    onChange={this.props.handleChange}
                    placeholder="Team Name"
                    className="brand-input-dark"
                  />
                  <input
                    name="game"
                    id={exp.id}
                    value={exp.game}
                    onChange={this.props.handleChange}
                    placeholder="Game"
                    className="brand-input-dark"
                  />
                  <input
                    name="role"
                    id={exp.id}
                    value={exp.role}
                    onChange={this.props.handleChange}
                    placeholder="Role"
                    className="brand-input-dark"
                  />
                  <input
                    name="dateFrom"
                    id={exp.id}
                    value={exp.dateFrom}
                    onChange={this.props.handleChange}
                    placeholder="Date Started (MM/DD/YYYY)"
                    className="brand-input-dark"
                  />
                  <input
                    name="dateTo"
                    id={exp.id}
                    value={exp.dateTo}
                    onChange={this.props.handleChange}
                    placeholder="Date Ended (MM/DD/YYYY)"
                    className="brand-input-dark"
                  />
                  <textarea
                    name="description"
                    id={exp.id}
                    value={exp.description}
                    onChange={this.props.handleChange}
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
}

Experiences.propTypes = {
  dispatch: PropTypes.func.isRequired
};

Experiences.contextTypes = {
  router: PropTypes.object.isRequired,
  store: PropTypes.object.isRequired
};

function mapStateToProps({ auth, profile: { data: profile } }) {
  return { auth, profile };
}

export default connect(mapStateToProps)(Experiences);
