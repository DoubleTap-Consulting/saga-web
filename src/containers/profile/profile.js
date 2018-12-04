import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import moment from "moment";

import { getUserInfo, saveUserInfo } from "actions/user";

import ProfileImage from "images/profile-image.jpeg";

import TwitterIcon from "images/twitter.png";
import InstagramIcon from "images/instagram.png";
import DiscordIcon from "images/discord.png";
import TwitchIcon from "images/twitch.png";

import Icon from "@material-ui/core/Icon";

import "./profile.css";

class Profile extends Component {
  constructor(props, context) {
    super(props, context);

    this.getUserData();

    this.state = {
      editingPersonal: false,
      editingHeader: false,
      editingExperience: null,
      firstName: "",
      lastName: "",
      location: "",
      birthday: "",
      tagline: "",
      gamerTag: "",
      game: "",
      teamName: "",
      role: "",
      dateFrom: "",
      dateTo: "",
      description: "",
      hacker: false,
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

  editHeader = () => {
    this.setState({
      editingHeader: true
    });
  };

  editPersonal = () => {
    this.setState({
      editingPersonal: true
    });
  };

  editExperience = event => {
    this.setState({
      editingExperience: event.target.name
    });
  };

  getUserData = () => {
    this.props.dispatch(getUserInfo(1));
  };

  submitHeader = () => {
    this.props
      .dispatch(
        saveUserInfo({
          gamerTag: this.state.gamerTag,
          tagline: this.state.tagline
        })
      )
      .then(() => this.getUserData());
    this.setState({
      editingHeader: false
    });
  };

  submitPersonal = () => {
    this.props
      .dispatch(
        saveUserInfo({
          firstName: this.state.firstName,
          lastName: this.state.lastName,
          birthday: this.state.birthday,
          location: this.state.location
        })
      )
      .then(() => this.getUserData());
    this.setState({
      editingPersonal: false
    });
  };

  submitExperience = () => {
    this.setState({
      editingExperience: false
    });
  };

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  render() {
    return (
      <div className="profile">
        <div className="profile-header brand-background-light">
          <h1>Profile</h1>
        </div>
        <div className="profile-playerHeader brand-background-dark">
          <img
            className="profile-playerHeader-profileImage"
            src={ProfileImage}
          />
          <div className="profile-playerHeader-info">
            {/* TODO: if own profile, show edit button */}
            {this.state.editingHeader ? (
              <button
                className="profile-playerHeader-info-edit profile-playerHeader-info-edit-main"
                onClick={this.submitHeader}
              >
                Save
              </button>
            ) : (
              <button
                className="profile-playerHeader-info-edit profile-playerHeader-info-edit-main"
                onClick={this.editHeader}
              >
                Edit
              </button>
            )}
            <div className="column">
              {this.state.editingHeader ? (
                <input
                  value={this.state.gamerTag}
                  onChange={this.handleChange}
                  name="gamerTag"
                  placeholder="Gamer Tag"
                  className="profile-container-card-body-input"
                />
              ) : (
                <h1 className="profile-playerHeader-info-gamerTag">
                  {this.state.gamerTag}
                </h1>
              )}
              {this.state.editingHeader ? (
                <input
                  value={this.state.tagline}
                  onChange={this.handleChange}
                  name="tagline"
                  placeholder="Tagline"
                  className="profile-container-card-body-input"
                />
              ) : (
                <h4 className="profile-playerHeader-info-tagline">
                  {this.state.tagline}
                </h4>
              )}
            </div>
            <div className="row profile-playerHeader-info-socials">
              <a
                href={this.props.player.twitterLink}
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={TwitterIcon} className="social-icon" alt="twitter" />
              </a>
              <a
                href={this.props.player.instagramLink}
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src={InstagramIcon}
                  className="social-icon"
                  alt="instgram"
                />
              </a>
              <a
                href={this.props.player.discordLink}
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={DiscordIcon} className="social-icon" alt="discord" />
              </a>
              <a
                href={this.props.player.twitchLink}
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={TwitchIcon} className="social-icon" alt="twitch" />
              </a>
            </div>
          </div>
        </div>
        <button className="profile-container-editAvatar">Edit Avatar</button>
        {this.props.player.hacker && (
          <div className="profile-hacker">
            <h3>
              * This player has been officially accused and confirmed hacking.
              #GG
            </h3>
          </div>
        )}
        <div className="profile-container">
          <div className="profile-container-card brand-background-dark">
            <div className="profile-container-card-header">
              <Icon className="profile-container-card-header-icon">person</Icon>
              <h3>Personal</h3>
              {/* TODO: if own profile, show edit button */}
              {this.state.editingPersonal ? (
                <button
                  className="profile-playerHeader-info-edit"
                  onClick={this.submitPersonal}
                >
                  Save
                </button>
              ) : (
                <button
                  className="profile-playerHeader-info-edit"
                  onClick={this.editPersonal}
                >
                  Edit
                </button>
              )}
            </div>
            {this.state.editingPersonal ? (
              <div className="profile-container-card-body">
                <input
                  name="firstName"
                  value={this.state.firstName}
                  onChange={this.handleChange}
                  placeholder="First Name"
                  className="brand-input-dark"
                />
                <input
                  name="lastName"
                  value={this.state.lastName}
                  onChange={this.handleChange}
                  placeholder="Last Name"
                  className="brand-input-dark"
                />
                <input
                  name="birthday"
                  value={this.state.birthday}
                  onChange={this.handleChange}
                  placeholder="Birthday (MM/DD/YYYY)"
                  className="brand-input-dark"
                />
                <input
                  name="location"
                  value={this.state.location}
                  onChange={this.handleChange}
                  placeholder="Location"
                  className="brand-input-dark"
                />
              </div>
            ) : (
              <div className="profile-container-card-body">
                <h3>First Name: {this.state.firstName}</h3>
                <h3>Last Name: {this.state.lastName}</h3>
                <h3>
                  Age:{" "}
                  {this.state.birthday
                    ? moment().diff(this.state.birthday, "years")
                    : ""}
                </h3>
                <h3>Location: {this.state.location}</h3>
              </div>
            )}
          </div>
          <div className="profile-container-card brand-background-dark">
            <div className="profile-container-card-header">
              <Icon className="profile-container-card-header-icon">work</Icon>
              <h3>Experience</h3>
            </div>
            {this.state.experiences.map(exp => (
              <div
                className="profile-playerHeader-info-experience"
                key={`profileExperiences${exp.id}`}
              >
                {/* TODO: if own profile, show edit button */}
                {this.state.editingExperience == exp.id ? (
                  <button
                    className="profile-playerHeader-info-edit"
                    onClick={this.submitExperience}
                  >
                    Save
                  </button>
                ) : (
                  <button
                    className="profile-playerHeader-info-edit"
                    onClick={this.editExperience}
                    name={exp.id}
                  >
                    Edit
                  </button>
                )}
                {this.state.editingExperience == exp.id ? (
                  <div className="column">
                    <input
                      name="teamName"
                      value={this.state.teamName}
                      onChange={this.handleChange}
                      placeholder="Team Name"
                      className="brand-input-dark"
                    />
                    <input
                      name="game"
                      value={this.state.game}
                      onChange={this.handleChange}
                      placeholder="Game"
                      className="brand-input-dark"
                    />
                    <input
                      name="role"
                      value={this.state.role}
                      onChange={this.handleChange}
                      placeholder="Role"
                      className="brand-input-dark"
                    />
                    <input
                      name="dateFrom"
                      value={this.state.dateFrom}
                      onChange={this.handleChange}
                      placeholder="Date Started (MM/DD/YYYY)"
                      className="brand-input-dark"
                    />
                    <input
                      name="dateTo"
                      value={this.state.dateTo}
                      onChange={this.handleChange}
                      placeholder="Date Ended (MM/DD/YYYY)"
                      className="brand-input-dark"
                    />
                    <textarea
                      name="description"
                      value={this.state.description}
                      onChange={this.handleChange}
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
        </div>
      </div>
    );
  }
}

Profile.propTypes = {
  dispatch: PropTypes.func.isRequired,
  location: PropTypes.object.isRequired,
  auth: PropTypes.object.isRequired,
  player: PropTypes.shape({
    gamerTag: PropTypes.string,
    firstName: PropTypes.string,
    lastName: PropTypes.string,
    hacker: PropTypes.bool,
    birthday: PropTypes.string,
    location: PropTypes.string,
    twitterLink: PropTypes.string,
    twitchLink: PropTypes.string,
    instagramLink: PropTypes.string,
    discordLink: PropTypes.string,
    experiences: PropTypes.array
  })
};

Profile.defaultProps = {
  player: PropTypes.shape({
    gamerTag: "",
    firstName: "",
    lastName: "",
    birthday: "",
    location: "",
    hacker: false,
    twitterLink: "",
    twitchLink: "",
    instagramLink: "",
    discordLink: "",
    experiences: []
  })
};

Profile.contextTypes = {
  router: PropTypes.object.isRequired,
  store: PropTypes.object.isRequired
};

function mapStateToProps({ auth }) {
  return { auth };
}

export default connect(mapStateToProps)(Profile);
