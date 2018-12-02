import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";

import PlayerCard from "components/player-card/playerCard";
import Search from "components/search/search";

import "./players.css";

class Players extends Component {
  constructor(props, context) {
    super(props, context);

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
      },
      {
        gamerTag: "Sultyn",
        id: 4
      },
      {
        gamerTag: "Bulba",
        id: 5
      },
      {
        gamerTag: "BigT",
        id: 6
      }
    ];

    this.state = {};
  }

  render() {
    return (
      <div className="players">
        <div className="players-header">
          <h1>Players</h1>
        </div>
        <div className="players-search">
          <Search />
        </div>
        <div className="players-container">
          {this.players.map(player => (
            <PlayerCard player={player} key={`playersList${player.id}`} />
          ))}
        </div>
      </div>
    );
  }
}

Players.propTypes = {
  dispatch: PropTypes.func.isRequired,
  location: PropTypes.object.isRequired,
  auth: PropTypes.object.isRequired
};

Players.defaultProps = {
  user: null
};

Players.contextTypes = {
  router: PropTypes.object.isRequired,
  store: PropTypes.object.isRequired
};

function mapStateToProps({ auth, user }) {
  return { auth, user };
}

export default connect(mapStateToProps)(Players);
