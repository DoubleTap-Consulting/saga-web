import React, { Component } from "react";
import { connect } from 'react-redux'
import { getAllPlayers } from './actions'

import PlayerCard from "components/player-card/playerCard";

import "./featuredPlayers.scss";

class FeaturedPlayers extends Component {
  constructor() {
    super();

    this.state = {};
  }

  componentWillMount() {
    const { getAllPlayers } = this.props
    getAllPlayers()
  }

  render() {
    const { players = [] } = this.props
    return (
      <div className="featuredPlayers">
        <h1 className="heading-2">Featured Players</h1>
        <div className="featuredPlayers-cards">
          {players.map(player => (
            <PlayerCard
              key={`featuredPlayer${player.id}`}
              player={player}
              showStatLine
            />
          ))}
        </div>
      </div>
    );
  }
}

const actionCreators = {
  getAllPlayers
}

const mapStateToProps = ({ players: { players } }) => ({
  players
})

export default connect(mapStateToProps, actionCreators)(FeaturedPlayers);