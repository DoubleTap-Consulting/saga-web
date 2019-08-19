import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

import ProfileImage from "images/profile-image.jpeg";
import ReactTooltip from "react-tooltip";

import TwitterIcon from "images/twitter.png";
import InstagramIcon from "images/instagram.png";
import TwitchIcon from "images/twitch.png";

import { trackClick } from "utils/googleAnalytics";

import "./playerCard.scss";

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
          <Link
            to={`/${this.props.player.gamerTag}`}
            style={!this.props.auth.user ? { cursor: "not-allowed" } : {}}
            data-tip="You must sign in to view a player's profile"
            data-tip-disable={this.props.auth.user ? true : false}
          >
            <h2
              className="gamerTag"
              id="PlayerCard"
              name="Players"
              onClick={trackClick}
            >
              {this.props.player.gamerTag}
            </h2>
          </Link>
          <ReactTooltip />
          <h4 className="job-title">
            {this.props.player.team} - {this.props.player.role}
          </h4>
          {this.props.showStatLine && (
            <div className="brand-background-dark featured">
              <h4 className="featured-title">
                {this.props.player.tournament_name}
              </h4>
              <div className="featured-stats row">
                {this.props.player.data.stats.map((stat) => (
                  <div className="column">
                    <h5 className="featured-stats-title">{Object.keys(stat)[0]}</h5>
                    <p>{Object.values(stat)[0]}</p>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        <div className="playerCard-footer">
          <div className="stats">
            {this.props.player.twitch_username && (
              <a
                href={`www.twitch.tv/${this.props.player.twitch_username}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="stat">
                  <img src={TwitchIcon} className="social-icon" alt="twitch" />
                  {!this.props.hideSocialStats && (
                    <span className="label">Followers</span>
                  )}
                  {!this.props.hideSocialStats && (
                    <span className="value">
                      {this.props.player.twitch_follower}
                    </span>
                  )}
                </div>
              </a>
            )}
            {this.props.player.twitter_username && (
              <a
                href={`www.twitter.com/${this.props.player.twitter_username}`}
                target="_blank"
                rel="noopener noreferrer"
                alt="twitter"
              >
                <div className="stat">
                  <img
                    src={TwitterIcon}
                    className="social-icon"
                    alt="twitter"
                  />
                  {!this.props.hideSocialStats && (
                    <span className="label">Followers</span>
                  )}
                  {!this.props.hideSocialStats && (
                    <span className="value">
                      {this.props.player.twitter_follower}
                    </span>
                  )}
                </div>
              </a>
            )}
            {this.props.player.instagram_username && (
              <a
                href={`www.instagram.com/${
                  this.props.player.instagram_username
                }`}
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
                  {!this.props.hideSocialStats && (
                    <span className="label">Followers</span>
                  )}
                  {!this.props.hideSocialStats && (
                    <span className="value">
                      {this.props.player.instagram_follower}
                    </span>
                  )}
                </div>
              </a>
            )}
          </div>
        </div>
      </div>
    );
  }
}

PlayerCard.propTypes = {
  hideSocialStats: PropTypes.bool,
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
  hideSocialStats: false,
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

function mapStateToProps({ auth }) {
  return { auth };
}

export default connect(mapStateToProps)(PlayerCard);
