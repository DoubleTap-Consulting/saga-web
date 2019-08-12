import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";

import ProfileImage from "images/profile-image.jpeg";
import TwitterIcon from "images/twitter.png";
import InstagramIcon from "images/instagram.png";
import DiscordIcon from "images/discord.png";
import TwitchIcon from "images/twitch.png";
import EyeIcon from "images/eye.svg";

import "./profileHeader.css";

class ProfileHeader extends Component {
  constructor(props, context) {
    super(props, context);

    this.state = {};
  }

  render() {
    return (
      <span>
        <div className="profile-playerHeader brand-background-dark">
          <img
            className="profile-playerHeader-profileImage"
            src={ProfileImage}
            alt="Profile"
          />
          <div className="profile-playerHeader-info">
            {this.props.isOwnProfile && (
              <button
                className={`profile-playerHeader-info-button profile-playerHeader-info-edit-main ${this
                  .props.editingHeader &&
                  "profile-playerHeader-info-button-save"}`}
                onClick={
                  this.props.editingHeader
                    ? this.props.submitHeader
                    : this.props.editHeader
                }
              >
                {this.props.editingHeader ? "Save" : "Edit"}
              </button>
            )}
            <div className="column">
              {this.props.editingHeader ? (
                <input
                  value={this.props.profile.gamerTag}
                  onChange={this.props.handlePlayerChange}
                  name="gamerTag"
                  placeholder="Gamer Tag"
                  className="brand-input-dark"
                />
              ) : (
                <h1 className="profile-playerHeader-info-gamerTag">
                  {this.props.profile.gamerTag}
                </h1>
              )}
              {this.props.editingHeader ? (
                <input
                  value={this.props.profile.tagline}
                  onChange={this.props.handlePlayerChange}
                  maxLength="100"
                  name="tagline"
                  placeholder="Tagline"
                  className="brand-input-dark"
                />
              ) : (
                <h4 className="profile-playerHeader-info-tagline">
                  {this.props.profile.tagline}
                </h4>
              )}
            </div>
            <div className="row profile-playerHeader-info-socials">
              {this.props.profile.twitter_username && (
                <a
                  href={`https://www.twitter.com/${
                    this.props.profile.twitter_username
                  }`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src={TwitterIcon}
                    className="social-icon"
                    alt="twitter"
                  />
                </a>
              )}
              {this.props.profile.instagram_url && (
                <a
                  href={this.props.profile.instagram_url}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src={InstagramIcon}
                    className="social-icon"
                    alt="instgram"
                  />
                </a>
              )}
              {this.props.profile.discord_username && (
                <a
                  href={this.props.profile.discord_username}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src={DiscordIcon}
                    className="social-icon"
                    alt="discord"
                  />
                </a>
              )}
              {this.props.profile.twitch_username && (
                <a
                  href={`www.twitch.com/${this.props.profile.twitch_username}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src={TwitchIcon} className="social-icon" alt="twitch" />
                </a>
              )}
            </div>
          </div>
          <div className="profile-playerHeader-views">
            <img src={EyeIcon} alt="Views" />
            <p>{this.props.profile.profile_views}</p>
          </div>
        </div>
        {this.props.isOwnProfile && (
          <button className="profile-container-editAvatar">Edit Avatar</button>
        )}
      </span>
    );
  }
}

ProfileHeader.propTypes = {
  dispatch: PropTypes.func.isRequired
};

ProfileHeader.contextTypes = {
  router: PropTypes.object.isRequired,
  store: PropTypes.object.isRequired
};

function mapStateToProps({ auth, profile: { data: profile } }) {
  return { auth, profile };
}

export default connect(mapStateToProps)(ProfileHeader);
