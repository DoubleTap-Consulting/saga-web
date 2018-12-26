import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import moment from "moment";
import { Link } from "react-router-dom";

import TournamentCard from "components/tournament-card/tournamentCard";
import PgiImage from "images/pgi.jpg";

import "./tournaments.css";

class Tournaments extends Component {
  constructor(props, context) {
    super(props, context);

    this.tournaments = [
      {
        name: "PGI World Qualifiers",
        prize: 1000000,
        game: "PUBG",
        id: "346304342",
        date: moment()
          .add(7, "days")
          .fromNow(),
        image: PgiImage,
        link: "https://twitch.tv"
      },
      {
        name: "PGI World Qualifiers",
        prize: 1000000,
        id: "146304342",
        game: "PUBG",
        date: moment()
          .add(7, "days")
          .fromNow(),
        image: PgiImage,
        link: "https://twitch.tv"
      },
      {
        name: "PGI World Qualifiers",
        prize: 1000000,
        id: "246304342",
        game: "PUBG",
        date: moment()
          .add(7, "days")
          .fromNow(),
        image: PgiImage,
        link: "https://twitch.tv"
      },
      {
        name: "PGI World Qualifiers",
        prize: 1000000,
        id: "446304342",
        game: "PUBG",
        date: moment()
          .add(7, "days")
          .fromNow(),
        image: PgiImage,
        link: "https://twitch.tv"
      },
      {
        name: "PGI World Qualifiers",
        prize: 1000000,
        id: "546304342",
        game: "PUBG",
        date: moment()
          .add(7, "days")
          .fromNow(),
        image: PgiImage,
        link: "https://twitch.tv"
      },
      {
        name: "PGI World Qualifiers",
        prize: 1000000,
        id: "646304342",
        game: "PUBG",
        date: moment()
          .add(7, "days")
          .fromNow(),
        image: PgiImage,
        link: "https://twitch.tv"
      }
    ];

    this.state = {};
  }

  render() {
    return (
      <div className="tournaments">
        <div className="tournaments-header brand-background-header">
          <h1>Tournaments</h1>
        </div>
        <div className="tournaments-container">
          {this.tournaments.map(tournament => (
            <Link
              to={`/tournaments/${tournament.id}`}
              key={`tournamentList${tournament.id}`}
            >
              <TournamentCard tournament={tournament} />
            </Link>
          ))}
        </div>
      </div>
    );
  }
}

Tournaments.propTypes = {
  dispatch: PropTypes.func.isRequired,
  location: PropTypes.object.isRequired,
  auth: PropTypes.object.isRequired
};

Tournaments.contextTypes = {
  router: PropTypes.object.isRequired,
  store: PropTypes.object.isRequired
};

function mapStateToProps({ auth }) {
  return { auth };
}

export default connect(mapStateToProps)(Tournaments);
