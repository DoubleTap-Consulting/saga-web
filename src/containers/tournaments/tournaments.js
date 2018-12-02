import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import moment from "moment";

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
        id: 1,
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
        id: 2,
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
        id: 3,
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
        id: 4,
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
        id: 5,
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
        id: 6,
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
        <div className="tournaments-header">
          <h1>Tournaments</h1>
        </div>
        <div className="tournaments-container">
          {this.tournaments.map(tournament => (
            <TournamentCard
              tournament={tournament}
              key={`tournamentList${tournament.id}`}
            />
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

Tournaments.defaultProps = {
  user: null
};

Tournaments.contextTypes = {
  router: PropTypes.object.isRequired,
  store: PropTypes.object.isRequired
};

function mapStateToProps({ auth, user }) {
  return { auth, user };
}

export default connect(mapStateToProps)(Tournaments);
