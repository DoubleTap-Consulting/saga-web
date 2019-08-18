import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

import Icon from "@material-ui/core/Icon";

import "./tournament.scss";

class Tournament extends Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      selectedVideo: null,
      selectedTeam: null,
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
            totalPoints: 3200,
            players: [
              {
                gamerTag: "sultyn"
              }
            ],
            id: 123
          },
          {
            name: "FaZe Clan",
            totalKills: 55,
            killPoints: 248,
            placementPoints: 982,
            totalPoints: 3200,
            players: [
              {
                gamerTag: "sultyn1"
              }
            ],
            id: 543
          },
          {
            name: "TwistedSin Esports",
            totalKills: 55,
            killPoints: 248,
            placementPoints: 982,
            totalPoints: 3200,
            players: [
              {
                gamerTag: "sultyn2"
              }
            ],
            id: 983
          },
          {
            name: "Team Saga",
            totalKills: 55,
            killPoints: 248,
            placementPoints: 982,
            totalPoints: 3200,
            players: [
              {
                gamerTag: "sultyn3"
              }
            ],
            id: 254
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

  selectTeam = team => {
    this.setState({
      selectedTeam: team
    });
  };

  unselectTeam = () => {
    this.setState({
      selectedTeam: null
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
        <Link to={`/tournaments`} className="row center tournament-backButton">
          <Icon className="icon" fontSize="large">
            reply
          </Icon>
          <h3>Back to tournaments</h3>
        </Link>
        <div className="tournament-container">
          <div className="tournament-overview">
            <div>
              <h2>General Info</h2>
              <div>
                <div className="tournament-overview-row">
                  <div className="tournament-overview-info">
                    <h5>Prize</h5>
                    <h3>{this.state.tournament.prizePool}</h3>
                  </div>
                  <div className="tournament-overview-info">
                    <h5>Region</h5>
                    <h3>{this.state.tournament.region}</h3>
                  </div>
                </div>
                <div className="tournament-overview-row">
                  <div className="tournament-overview-info">
                    <h5>Game</h5>
                    <h3>{this.state.tournament.game}</h3>
                  </div>
                  <div className="tournament-overview-info">
                    <h5>Game Type</h5>
                    <h3>{this.state.tournament.gameType}</h3>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <h2>Date & Time</h2>
              <div>
                <div>
                  <div className="tournament-overview-info">
                    <h5>Date</h5>
                    <h3>
                      {this.state.tournament.startDate} -{" "}
                      {this.state.tournament.endDate}
                    </h3>
                  </div>
                </div>
                <div>
                  <div className="tournament-overview-info">
                    <h5>Time</h5>
                    <h3>{this.state.tournament.time}</h3>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="tournament-twitchStream">
            {!this.state.tournament.completed && (
              <iframe
                src={`https://player.twitch.tv/?channel=${
                  this.state.tournament.twitchStream
                }&muted=true`}
                title="tournamentTwitchStream"
                id="ProfileTwitchLiveStream"
                width="100%"
                height="500px"
                theme="dark"
                frameBorder="0"
                scrolling="no"
                allowFullScreen={true}
              />
            )}
            {this.state.tournament.completed && this.state.selectedVideo ? (
              <div>
                <div className="row center">
                  <Icon
                    className="icon"
                    onClick={this.resetVideosList}
                    fontSize="large"
                  >
                    reply
                  </Icon>
                  <h4
                    onClick={this.resetVideosList}
                    style={{ cursor: "pointer" }}
                  >
                    {" "}
                    Back to videos
                  </h4>
                </div>
                <iframe
                  src={`https://player.twitch.tv/?video=v${
                    this.state.selectedVideo
                  }&muted=true`}
                  height="520"
                  width="100%"
                  title="TournamentTwitchStream"
                  theme="dark"
                  layout="video"
                  allowFullScreen={true}
                />
              </div>
            ) : (
              <div className="tournament-videos">
                <h2>Recorded Videos</h2>
                {this.state.tournament.videos.map((video, index) => (
                  <div
                    className="tournament-videos-row"
                    onClick={() => {
                      this.selectVideo(video);
                    }}
                    key={`selectedTwitchVideo${video}`}
                  >
                    <h4>{`Day ${index + 1}`}</h4>
                  </div>
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
              <span key={`tournamentLeaderboard${team.name}`}>
                <div
                  className="tournament-leaderboard-row"
                  style={
                    index % 2 === 0
                      ? { backgroundColor: "#16162e" }
                      : { backgroundColor: "rgb(55, 46, 80)" }
                  }
                >
                  <h3>{index + 1}</h3>
                  <h3>{team.name}</h3>
                  <h3>{team.totalKills}</h3>
                  <h3>{team.killPoints}</h3>
                  <h3>{team.placementPoints}</h3>
                  <h3>{team.totalPoints}</h3>
                  {this.state.selectedTeam === team.id ? (
                    <Icon
                      className="icon"
                      fontSize="large"
                      onClick={this.unselectTeam}
                      style={{
                        position: "absolute",
                        right: 0,
                        width: "10px"
                      }}
                    >
                      expand_less
                    </Icon>
                  ) : (
                    <Icon
                      className="icon"
                      fontSize="large"
                      onClick={() => this.selectTeam(team.id)}
                      style={{
                        position: "absolute",
                        right: 0,
                        width: "10px"
                      }}
                    >
                      expand_more
                    </Icon>
                  )}
                </div>
                {this.state.selectedTeam === team.id && (
                  <div>
                    {team.players.map(player => (
                      <Link
                        to={`/${player.gamerTag}`}
                        key={`tournamentPlayer${player.gamerTag}`}
                      >
                        <div className="tournament-leaderboard-row-player row">
                          <h4>{player.gamerTag}</h4>
                        </div>
                      </Link>
                    ))}
                  </div>
                )}
              </span>
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

function mapStateToProps({ auth }) {
  return { auth };
}

export default connect(mapStateToProps)(Tournament);
