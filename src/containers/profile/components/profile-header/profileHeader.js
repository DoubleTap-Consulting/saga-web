import React, { useState } from "react";
import { connect } from "react-redux";
import { updateProfileData, updateProfile } from "actions/profile";

import ProfileImage from "images/profile-image.jpeg";
import TwitterIcon from "images/twitter.png";
import InstagramIcon from "images/instagram.png";
import DiscordIcon from "images/discord.png";
import TwitchIcon from "images/twitch.png";
import EyeIcon from "images/eye.svg";

import "./profileHeader.scss";

function ProfileHeader({ isOwnProfile, dispatch, profile }) {
  const [editingHeader, setEditingHeader] = useState(false);

  const submitHeader = () => {
    setEditingHeader(false);
    dispatch(
      updateProfile(profile.id, {
        tagline: profile.tagline
      })
    );
  };

  const editHeader = event => {
    setEditingHeader(true);
  };

  const handleChange = event => {
    let tempValue = event.target.value;
    dispatch(updateProfileData({ [event.target.name]: tempValue }));
  };

  return (
    <span>
      <div className="profile-playerHeader brand-background-dark">
        <img
          className="profile-playerHeader-profileImage"
          src={ProfileImage}
          alt="Profile"
        />
        <div className="profile-playerHeader-info">
          {isOwnProfile && (
            <button
              className={`profile-playerHeader-info-button profile-playerHeader-info-edit-main ${editingHeader &&
                "profile-playerHeader-info-button-save"}`}
              onClick={editingHeader ? submitHeader : editHeader}
            >
              {editingHeader ? "Save" : "Edit"}
            </button>
          )}
          <div className="column">
            <h1 className="profile-playerHeader-info-gamerTag">
              {profile.gamerTag}
            </h1>
            {editingHeader ? (
              <input
                value={profile.tagline}
                onChange={handleChange}
                maxLength="100"
                name="tagline"
                placeholder="Tagline"
                className="brand-input-dark"
              />
            ) : (
              <h4 className="profile-playerHeader-info-tagline">
                {profile.tagline}
              </h4>
            )}
          </div>
          <div className="row profile-playerHeader-info-socials">
            {profile.twitter_username && (
              <a
                href={`https://www.twitter.com/${profile.twitter_username}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={TwitterIcon} className="social-icon" alt="twitter" />
              </a>
            )}
            {profile.instagram_url && (
              <a
                href={profile.instagram_url}
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
            {profile.discord_url && (
              <a
                href={`http://www.discord.com/${profile.discord_url}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={DiscordIcon} className="social-icon" alt="discord" />
              </a>
            )}
            {profile.twitch_username && (
              <a
                href={`http://www.twitch.com/${profile.twitch_username}`}
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
          <p>{profile.profile_views}</p>
        </div>
      </div>
      {isOwnProfile && (
        <button className="profile-container-editAvatar">Edit Avatar</button>
      )}
    </span>
  );
}

function mapStateToProps({ profile: { data: profile } }) {
  return { profile };
}

export default connect(mapStateToProps)(ProfileHeader);
