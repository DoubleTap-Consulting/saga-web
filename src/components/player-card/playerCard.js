import React, { Component } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

import ProfileImage from "images/profile-image.jpeg";
import ReactTooltip from "react-tooltip";

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
      <div
        className="playerCard"
        style={this.props.showStatLine ? { height: 600 } : { height: 420 }}
      >
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
            <h2
              className="name"
              data-tip="You must sign in to view a player's profile"
            >
              {this.props.player.gamerTag}
            </h2>
          </Link>
          {/* TODO: if user not logged in, make unclickable */}
          {/* TODO: if user logged in, don't show tooltip */}
          <ReactTooltip />
          <h4 className="job-title">
            {this.props.player.team} - {this.props.player.role}
          </h4>
          {this.props.showStatLine && (
            <div className="brand-background-dark featured">
              <h4 className="featured-title">
                {this.props.player.featured.tournament}
              </h4>
              <div className="featured-stats row">
                <div className="column">
                  <h5 className="featured-stats-title">Games</h5>
                  <p>{this.props.player.featured.stats.games}</p>
                </div>
                <div className="column">
                  <h5 className="featured-stats-title">K/D</h5>
                  <p>{this.props.player.featured.stats.kd}</p>
                </div>
                <div className="column">
                  <h5 className="featured-stats-title">ADR</h5>
                  <p>{this.props.player.featured.stats.adr}</p>
                </div>
              </div>
            </div>
          )}
        </div>

        <div className="playerCard-footer">
          <div className="stats">
            <a
              href={`${this.props.player.twitchLink}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="stat">
                <img src={TwitchIcon} className="social-icon" alt="twitch" />
                <span className="label">Followers</span>
                <span className="value">56K</span>
              </div>
            </a>
            <a
              href={`${this.props.player.twitterLink}`}
              target="_blank"
              rel="noopener noreferrer"
              alt="twitter"
            >
              <div className="stat">
                <img src={TwitterIcon} className="social-icon" alt="twitter" />
                <span className="label">Followers</span>
                <span className="value">940</span>
              </div>
            </a>
            <a
              href={`${this.props.player.instagramLink}`}
              target="_blank"
              rel="noopener noreferrer"
              alt="instagram"
            >
              <div className="stat">
                <img
                  src={InstagramIcon}
                  className="social-icon"
                  alt="instagram"
                />
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

PlayerCard.propTypes = {
  player: PropTypes.shape({
    instagramLink: PropTypes.string,
    twitterLink: PropTypes.string,
    twitchLink: PropTypes.string,
    team: PropTypes.string,
    role: PropTypes.string,
    gamerTag: PropTypes.string,
    featured: PropTypes.shape({
      tournament: PropTypes.string,
      stats: PropTypes.shape({
        games: PropTypes.number,
        kd: PropTypes.number,
        adr: PropTypes.number
      })
    })
  }),
  showStatLine: PropTypes.bool
};

PlayerCard.defaultProps = {
  player: {
    instagramLink: "",
    twitterLink: "",
    twitchLink: "",
    team: "",
    role: "",
    gamerTag: "",
    featured: {
      tournament: "",
      stats: {
        games: 0,
        adr: 0,
        kd: 0
      }
    }
  }
};

PlayerCard.contextTypes = {
  store: PropTypes.object.isRequired,
  router: PropTypes.object.isRequired
};

export default PlayerCard;
