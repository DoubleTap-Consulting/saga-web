import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";

import { getUserInfo } from "actions/user";

import ProfileImage from "images/profile-image.jpeg";

import TwitterIcon from "images/twitter.png";
import InstagramIcon from "images/instagram.png";
import DiscordIcon from "images/discord.png";

import "./profile.css";

class Profile extends Component {
  constructor(props, context) {
    super(props, context);

    this.props.dispatch(getUserInfo(this.props.auth.profile.id));

    this.state = {
      editingPersonal: false,
      editingExperiences: false,
      editingHeader: false
    };

    this.experiences = [
      {
        team: "Liquid",
        game: "PUBG",
        role: "Fragger",
        name: "PGI - Berlin World Championships",
        dateFrom: "11/03/2018",
        dateTo: "Current",
        description: "Some description",
        stats: {
          kills: 142,
          assists: 98,
          ADR: 872
        }
      },
      {
        team: "FAZE",
        game: "PUBG",
        role: "IGL",
        name: "GLL - Season 2 LAN",
        dateFrom: "11/05/2017",
        dateTo: "11/02/2018",
        description: "Some description"
      }
    ];
  }

  editProfile = () => {
    console.log("edit profile");
  };

  render() {
    return (
      <div className="profile">
        <div className="profile-header">
          <h1>Profile</h1>
        </div>
        <div className="profile-playerHeader">
          <img
            className="profile-playerHeader-profileImage"
            src={ProfileImage}
          />
          <div className="profile-playerHeader-info">
            {/* TODO: if own profile, show edit button */}
            <button
              className="profile-playerHeader-info-edit"
              onClick={this.editProfile}
            >
              Edit
            </button>
            <h1 className="profile-playerHeader-info-username">Sultyn</h1>
          </div>
        </div>
        {/* TODO: ONLY SHOWER IF HACKER FLAG */}
        {/* <div className="profile-hacker">
          <h3>
            This player has been officially accused and confirmed hacking.
          </h3>
        </div> */}
        <div className="profile-container">
          <div className="left-column">
            <div className="row center">
              <img className="social-icon" src={TwitterIcon} />
              <h4>Twitter</h4>
            </div>
            <div className="row center">
              <img className="social-icon" src={InstagramIcon} />
              <h4>Instagram</h4>
            </div>
            <div className="row center">
              <img className="social-icon" src={DiscordIcon} />
              <h4>Discord</h4>
            </div>
          </div>
          <div className="right-column">
            <div className="profile-container-card">
              <div className="profile-container-card-header">
                <h3>Personal</h3>
                {/* TODO: if own profile, show edit button */}
                <button
                  className="profile-playerHeader-info-edit"
                  onClick={this.editProfile}
                >
                  Edit
                </button>
              </div>
              <div className="profile-container-card-body">
                <h3>First Name: Michael</h3>
                <h3>Last Name: Mitrakos</h3>
                <h3>Age: 28</h3>
                <h3>Location: Texas, United States</h3>
              </div>
            </div>
            <div className="profile-container-card">
              <div className="profile-container-card-header">
                <h3>Experience</h3>
              </div>
              {this.experiences.map(exp => (
                <div className="profile-container-card-body">
                  {/* TODO: if own profile, show edit button */}
                  <button
                    className="profile-playerHeader-info-edit"
                    onClick={this.editProfile}
                  >
                    Edit
                  </button>
                  <div className="profile-playerHeader-info-experience">
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
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

Profile.propTypes = {
  dispatch: PropTypes.func.isRequired,
  location: PropTypes.object.isRequired,
  auth: PropTypes.object.isRequired
};

Profile.defaultProps = {
  user: null
};

Profile.contextTypes = {
  router: PropTypes.object.isRequired,
  store: PropTypes.object.isRequired
};

function mapStateToProps({ auth, user }) {
  return { auth, user };
}

export default connect(mapStateToProps)(Profile);
