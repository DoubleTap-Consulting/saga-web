import React, { Component } from "react";
import { connect } from "react-redux";
import { getFeaturedPlayers } from "./actions";

import PlayerCard from "components/player-card/playerCard";

import "./featuredPlayers.scss";

class FeaturedPlayers extends Component {
  constructor() {
    super();

    this.state = {};
  }

  componentWillMount() {
    const { getFeaturedPlayers } = this.props;
    getFeaturedPlayers();
  }

  render() {
    const { players = [] } = this.props;
    return (
      <div className="featuredPlayers">
        <h1 className="heading-2">Featured Players</h1>
        <div className="featuredPlayers-cards">
          {players.map(player => (
            <PlayerCard
              key={`featuredPlayer${player.id}`}
              player={player.data}
              showStatLine
            />
          ))}
        </div>
      </div>
    );
  }
}

const actionCreators = {
  getFeaturedPlayers
};

const mapStateToProps = ({ featuredPlayers: { players } }) => ({
  players
});

export default connect(
  mapStateToProps,
  actionCreators
)(FeaturedPlayers);
