import React, { Component } from "react";
import PropTypes from "prop-types";

import TournamentCard from "components/tournament-card/tournamentCard";

import "./featuredTournaments.css";

class FeaturedTournaments extends Component {
  constructor() {
    super();

    this.state = {};
  }

  render() {
    return (
      <div className="featuredTournaments section">
        <h1 className="heading-2">Featured Tournaments</h1>
        <div className="featuredTournaments-cards">
          <TournamentCard />
          <TournamentCard />
          <TournamentCard />
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
