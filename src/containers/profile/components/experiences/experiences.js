import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";

import Icon from "@material-ui/core/Icon";

import "./experiences.css";

class Experiences extends Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      experiences: [
        {
          team: "Saga",
          game: "PUBG",
          role: "IGL",
          dateFrom: "11/03/2018",
          dateTo: "Current",
          id: 1,
          description:
            "Some description. Some description Some description Some description Some descriptionSome description Some description Some description. Some description Some description Some description Some description."
        },
        {
          team: "FAZE",
          game: "PUBG",
          role: "IGL",
          dateFrom: "11/05/2017",
          dateTo: "11/02/2018",
          id: 2,
          description: "Some description"
        }
      ]
    };
  }

  render() {
    return (
      <div className="profile-container-card brand-background-dark">
        <div className="profile-container-card-header">
          <Icon className="profile-card-header-icon">work</Icon>
          <h3>Experience</h3>
        </div>
        {this.state.experiences.map(exp => (
          <div
            className="profile-playerHeader-info-experience"
            key={`profileExperiences${exp.id}`}
          >
            {this.props.isOwnProfile && (
              <button
                className={`profile-playerHeader-info-button profile-playerHeader-info-edit-main ${this
                  .props.editingExperience == exp.id &&
                  "profile-playerHeader-info-button-save"}`}
                name={exp.id}
                onClick={
                  this.props.editingExperience == exp.id
                    ? this.props.submitExperience
                    : this.props.editExperience
                }
              >
                {this.props.editingExperience == exp.id ? "Save" : "Edit"}
              </button>
            )}
            {this.props.editingExperience == exp.id ? (
              <div className="column">
                <input
                  name="teamName"
                  value={this.props.player.teamName}
                  onChange={this.handleChange}
                  placeholder="Team Name"
                  className="brand-input-dark"
                />
                <input
                  name="game"
                  value={this.props.player.game}
                  onChange={this.props.handleChange}
                  placeholder="Game"
                  className="brand-input-dark"
                />
                <input
                  name="role"
                  value={this.props.player.role}
                  onChange={this.props.handleChange}
                  placeholder="Role"
                  className="brand-input-dark"
                />
                <input
                  name="dateFrom"
                  value={this.props.dateFrom}
                  onChange={this.props.handleChange}
                  placeholder="Date Started (MM/DD/YYYY)"
                  className="brand-input-dark"
                />
                <input
                  name="dateTo"
                  value={this.props.dateTo}
                  onChange={this.props.handleChange}
                  placeholder="Date Ended (MM/DD/YYYY)"
                  className="brand-input-dark"
                />
                <textarea
                  name="description"
                  value={this.props.description}
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

function mapStateToProps({ auth }) {
  return { auth };
}

export default connect(mapStateToProps)(Experiences);
