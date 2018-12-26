import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";

import "./league.css";

class League extends Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      league: {
        name: "GLL - Season 3",
        game: "PUBG",
        date: "Every Tuesday",
        time: "6:30 PST",
        twitchStream: "gll",
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
    // getLeagueInfo(this.props.location.pathname.slice(8)).then(league => {
    //   this.setState({
    //     league
    //   });
    // });
  }

  render() {
    return (
      // map settings, stats, schedule, leaderboards
      <div className="league">
        <div className="league-header brand-background-header">
          <h1>{this.state.league.name}</h1>
        </div>
        <div className="league-container">
          <div className="league-overview">
            <div>
              <h2>General Info</h2>
              <div>
                <div>
                  <h4>{this.state.league.prizePool}</h4>
                  <h4>{this.state.league.region}</h4>
                </div>
                <div>
                  <h4>{this.state.league.game}</h4>
                  <h4>{this.state.league.gameType}</h4>
                </div>
              </div>
            </div>
            <div>
              <h2>Date & Time</h2>
              <div>
                <div>
                  <h4>{this.state.league.date}</h4>
                </div>
                <div>
                  <h4>{this.state.league.time}</h4>
                </div>
              </div>
            </div>
          </div>
          <div className="league-twitchStream">
            <iframe
              src={`https://player.twitch.tv/?channel=${
                this.state.league.twitchStream
              }&muted=true`}
              title="LeagueTwitchLiveStream"
              id="LeagueTwitchLiveStream"
              width="100%"
              height="500px"
              theme="dark"
              frameBorder="0"
              scrolling="no"
              allowFullScreen={true}
            />
          </div>
          <div className="league-leaderboard">
            <h2>Leaderboard</h2>
            <div className="league-leaderboard-labels">
              <h5>#</h5>
              <h5>NAME</h5>
              <h5>TOTAL KILLS</h5>
              <h5>KILL PTS</h5>
              <h5>PLACEMENT PTS</h5>
              <h5>TOTAL PTS</h5>
            </div>
            {this.state.league.leaderboard.map((team, index) => (
              <div
                className="league-leaderboard-row"
                key={`leagueLeaderboard${team.name}`}
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
          <div className="league-rules">
            <h2>Rules</h2>
          </div>
        </div>
      </div>
    );
  }
}

League.propTypes = {
  dispatch: PropTypes.func.isRequired,
  location: PropTypes.object.isRequired,
  auth: PropTypes.object.isRequired
};

League.contextTypes = {
  router: PropTypes.object.isRequired,
  store: PropTypes.object.isRequired
};

function mapStateToProps({ auth }) {
  return { auth };
}

export default connect(mapStateToProps)(League);
