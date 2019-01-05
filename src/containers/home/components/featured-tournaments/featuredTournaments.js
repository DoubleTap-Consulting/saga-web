import React, { Component } from "react";
import PropTypes from "prop-types";
import moment from "moment";

import TournamentCard from "components/tournament-card/tournamentCard";
import PgiImage from "images/pgi.jpg";
import GllImage from "images/gll.jpg";
import HkPubg from "images/hkpubg.jpg";

import "./featuredTournaments.css";

class FeaturedTournaments extends Component {
  constructor() {
    super();

    this.tournaments = [
      {
        name: "PGI - PUBG Global Invitational",
        game: "PUBG",
        prize: 2000000,
        id: 1,
        date: moment()
          .add(7, "days")
          .fromNow(),
        image: PgiImage,
        link: "https://twitch.tv"
      },
      {
        name: "GLL Season 2 World Championship",
        game: "PUBG",
        prize: 1000000,
        id: 2,
        date: moment()
          .add(7, "days")
          .fromNow(),
        image: GllImage,
        link: "https://twitch.tv"
      },
      {
        name: "Hong Kong World Invitational",
        game: "PUBG",
        prize: 1000000,
        id: 3,
        date: moment()
          .add(7, "days")
          .fromNow(),
        image: HkPubg,
        link: "https://twitch.tv"
      }
    ];

    this.state = {};
  }

  render() {
    return (
      <div className="featuredTournaments section">
        <h1 className="heading-2">Featured Tournaments</h1>
        <div className="featuredTournaments-cards">
          {this.tournaments.map(tournament => (
            <TournamentCard
              tournament={tournament}
              key={`featuredTournament${tournament.id}`}
              requiresLogin
              user={this.props.user}
            />
          ))}
        </div>
      </div>
    );
  }
}

FeaturedTournaments.contextTypes = {
  store: PropTypes.object.isRequired,
  router: PropTypes.object.isRequired
};

export default FeaturedTournaments;
