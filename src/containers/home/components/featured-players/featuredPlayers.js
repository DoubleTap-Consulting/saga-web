import React, { Component } from "react";
import PropTypes from "prop-types";

import PlayerCard from "components/player-card/playerCard";

import "./featuredPlayers.css";

class FeaturedPlayers extends Component {
  constructor() {
    super();

    this.state = {};
  }

  render() {
    return (
      <div className="featuredPlayers section">
        <h1 className="heading-2">Featured Players</h1>
        <div className="featuredPlayers-cards">
          <PlayerCard />
          <PlayerCard />
          <PlayerCard />
        </div>
      </div>
    );
  }
}

FeaturedPlayers.contextTypes = {
  store: PropTypes.object.isRequired,
  router: PropTypes.object.isRequired
};

export default FeaturedPlayers;
