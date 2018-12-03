import React, { Component } from "react";
import PropTypes from "prop-types";

import PlayerCard from "components/player-card/playerCard";

import "./featuredPlayers.css";

class FeaturedPlayers extends Component {
  constructor() {
    super();

    this.players = [
      {
        gamerTag: "Sultyn",
        id: 1
      },
      {
        gamerTag: "Bulba",
        id: 2
      },
      {
        gamerTag: "BigT",
        id: 3
      }
    ];

    this.state = {};
  }

  render() {
    return (
      <div className="featuredPlayers">
        <h1 className="heading-2">Featured Players</h1>
        <div className="featuredPlayers-cards">
          {this.players.map(player => (
            <PlayerCard key={`featuredPlayer${player.id}`} player={player} />
          ))}
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
