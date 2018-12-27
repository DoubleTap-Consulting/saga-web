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
                  value={this.props.player.gamerTag}
                  onChange={this.props.handlePlayerChange}
                  name="gamerTag"
                  placeholder="Gamer Tag"
                  className="brand-input-dark"
                />
              ) : (
                <h1 className="profile-playerHeader-info-gamerTag">
                  {this.props.isOwnProfile
                    ? this.props.auth.user.gamerTag
                    : this.props.player.gamerTag}
                </h1>
              )}
              {this.props.editingHeader ? (
                <input
                  value={this.props.player.tagline}
                  onChange={this.props.handlePlayerChange}
                  maxLength="100"
                  name="tagline"
                  placeholder="Tagline"
                  className="brand-input-dark"
                />
              ) : (
                <h4 className="profile-playerHeader-info-tagline">
                  {this.props.player.tagline}
                </h4>
              )}
            </div>
            <div className="row profile-playerHeader-info-socials">
              {this.props.player.twitterUrl && (
                <a
                  href={this.props.player.twitterUrl}
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
              {this.props.player.instagramUrl && (
                <a
                  href={this.props.player.instagramUrl}
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
              {this.props.player.discordUrl && (
                <a
                  href={this.props.player.discordUrl}
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
              {this.props.player.twitchUrl && (
                <a
                  href={this.props.player.twitchUrl}
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
            <p>{this.props.player.views}</p>
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

function mapStateToProps({ auth }) {
  return { auth };
}

export default connect(mapStateToProps)(ProfileHeader);
