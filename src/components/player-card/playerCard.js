import React, { Component } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

import ProfileImage from "images/profile-image.jpeg";

import TwitterIcon from "images/twitter.png";
import InstagramIcon from "images/instagram.png";
import TwitchIcon from "images/twitch.png";

import "./playerCard.css";

class PlayerCard extends Component {
  constructor() {
    super();

    this.state = {};
  }

  render() {
    return (
      <div className="playerCard">
        <div
          className="playerCard-header"
          style={{
            background: `url(${ProfileImage})`,
            backgroundSize: "cover"
          }}
        >
          <div className="playerCard-header-slanted-edge">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 200">
              <path className="polygon" d="M-20,200,1000,0V200Z" />
            </svg>
          </div>
        </div>

        <div className="playerCard-body">
          <Link to={`/profile/${this.props.player.gamerTag}`}>
            <h2 className="name">{this.props.player.gamerTag}</h2>
          </Link>
          <h4 className="job-title">Team Liquid - Fragger</h4>
          {/* <div className="bio">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Dignissimos, aperiam.
          </div> */}
        </div>

        <div className="playerCard-footer">
          <div className="stats">
            <a href={`${this.props.player.twitchLink}`} target="_blank">
              <div className="stat">
                <img src={TwitchIcon} className="social-icon" />
                <span className="label">Followers</span>
                <span className="value">56K</span>
              </div>
            </a>
            <a href={`${this.props.player.twitterLink}`} target="_blank">
              <div className="stat">
                <img src={TwitterIcon} className="social-icon" />
                <span className="label">Followers</span>
                <span className="value">940</span>
              </div>
            </a>
            <a href={`${this.props.player.instagramLink}`} target="_blank">
              <div className="stat">
                <img src={InstagramIcon} className="social-icon" />
                <span className="label">Followers</span>
                <span className="value">320</span>
              </div>
            </a>
          </div>
        </div>
      </div>
    );
  }
}

PlayerCard.contextTypes = {
  store: PropTypes.object.isRequired,
  router: PropTypes.object.isRequired
};

export default PlayerCard;
