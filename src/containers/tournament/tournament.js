import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";

import Icon from "@material-ui/core/Icon";

import ReactTwitchEmbedVideo from "react-twitch-embed-video";

import "./tournament.css";

class Tournament extends Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      selectedVideo: null,
      tournament: {
        name: "GLL - Season 3 Championship",
        game: "PUBG",
        completed: true,
        startDate: "December 18th, 2018",
        endDate: "December 21st, 2018",
        time: "6:30 PST",
        twitchStream: "gll",
        videos: ["346304342", "345841753", "345413315", "345149421"],
        leaderboard: [
          {
            name: "Team Liquid",
            totalKills: 55,
            killPoints: 248,
            placementPoints: 982,
            totalPoints: 3200
          },
          {
            name: "FaZe Clan",
            totalKills: 55,
            killPoints: 248,
            placementPoints: 982,
            totalPoints: 3200
          },
          {
            name: "TwistedSin Esports",
            totalKills: 55,
            killPoints: 248,
            placementPoints: 982,
            totalPoints: 3200
          },
          {
            name: "Team Saga",
            totalKills: 55,
            killPoints: 248,
            placementPoints: 982,
            totalPoints: 3200
          }
        ],
        discord: "https://discordapp.com/invite/e3NQ3mk",
        twitter: "https://twitter.com/globalloot",
        rules: ``,
        prizePool: "$100k",
        gameType: "Squad FPP",
        region: "All"
      }
    };
  }

  componentDidMount() {
    // TODO: connect this endpoint
    // getTournamentInfo(this.props.location.pathname.slice(8)).then(tournament => {
    //   this.setState({
    //     tournament
    //   });
    // });
  }

  selectVideo = video => {
    this.setState({
      selectedVideo: video
    });
  };

  resetVideosList = () => {
    this.setState({
      selectedVideo: null
    });
  };

  render() {
    return (
      // map settings, stats, schedule, leaderboards
      <div className="tournament">
        <div className="tournament-header brand-background-header">
          <h1>{this.state.tournament.name}</h1>
        </div>
        <div className="tournament-container">
          <div className="tournament-overview">
            <div>
              <h2>General Info</h2>
              <div>
                <div>
                  <h4>{this.state.tournament.prizePool}</h4>
                  <h4>{this.state.tournament.region}</h4>
                </div>
                <div>
                  <h4>{this.state.tournament.game}</h4>
                  <h4>{this.state.tournament.gameType}</h4>
                </div>
              </div>
            </div>
            <div>
              <h2>Date & Time</h2>
              <div>
                <div>
                  <h4>{this.state.tournament.date}</h4>
                </div>
                <div>
                  <h4>{this.state.tournament.time}</h4>
                </div>
              </div>
            </div>
          </div>
          <div className="tournament-twitchStream">
            {!this.state.tournament.completed && (
              <ReactTwitchEmbedVideo
                id="tournamentTwitchStream"
                targetClass="twitch-stream"
                channel={this.state.tournament.twitchStream}
                width="100%"
                theme="dark"
                muted={true}
              />
            )}
            {this.state.tournament.completed && this.state.selectedVideo ? (
              <div>
                <Icon
                  className="profile-container-card-header-icon"
                  onClick={this.resetVideosList}
                >
                  reply
                </Icon>
                <iframe
                  src={`https://player.twitch.tv/?video=v${
                    this.state.selectedVideo
                  }&muted=true`}
                  height="520"
                  width="100%"
                  theme="dark"
                  layout="video"
                  allowFullScreen={true}
                />
              </div>
            ) : (
              <div className="tournament-videos">
                {this.state.tournament.videos.map((video, index) => (
                  <h4
                    onClick={() => {
                      this.selectVideo(video);
                    }}
                    key={`selectedTwitchVideo${video}`}
                  >{`Day ${index + 1}`}</h4>
                ))}
              </div>
            )}
          </div>
          <div className="tournament-leaderboard">
            <h2>Leaderboard</h2>
            <div className="tournament-leaderboard-labels">
              <h5>#</h5>
              <h5>NAME</h5>
              <h5>TOTAL KILLS</h5>
              <h5>KILL PTS</h5>
              <h5>PLACEMENT PTS</h5>
              <h5>TOTAL PTS</h5>
            </div>
            {this.state.tournament.leaderboard.map((team, index) => (
              <div
                className="tournament-leaderboard-row"
                key={`tournamentLeaderboard${team.name}`}
              >
                <h3>{index + 1}</h3>
                <h3>{team.name}</h3>
                <h3>{team.totalKills}</h3>
                <h3>{team.killPoints}</h3>
                <h3>{team.placementPoints}</h3>
                <h3>{team.totalPoints}</h3>
              </div>
            ))}
          </div>
          <div className="tournament-rules">
            <h2>Rules</h2>
          </div>
        </div>
      </div>
    );
  }
}

Tournament.propTypes = {
  dispatch: PropTypes.func.isRequired,
  location: PropTypes.object.isRequired,
  auth: PropTypes.object.isRequired
};

Tournament.contextTypes = {
  router: PropTypes.object.isRequired,
  store: PropTypes.object.isRequired
};

function mapStateToProps({ auth }) {
  return { auth };
}

export default connect(mapStateToProps)(Tournament);
