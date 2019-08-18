import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";

import PlayerCard from "components/player-card/playerCard";
import Search from "components/search/search";

import { getPlayers } from "actions/players";

import "./players.css";

class Players extends Component {
  constructor(props, context) {
    super(props, context);

    this.requestSearchUsers = searchText => {
      this.props.dispatch(getPlayers(searchText));
    };

    this.players = [
      {
        gamerTag: "Sultyn",
        id: 1,
        role: "IGL",
        team: "Faze Clan"
      },
      {
        gamerTag: "Bulba",
        id: 2,
        role: "IGL",
        team: "Faze Clan"
      },
      {
        gamerTag: "BigT",
        id: 3,
        role: "IGL",
        team: "Faze Clan"
      },
      {
        gamerTag: "Sultyn",
        id: 4,
        role: "IGL",
        team: "Faze Clan"
      },
      {
        gamerTag: "Bulba",
        id: 5,
        role: "IGL",
        team: "Faze Clan"
      },
      {
        gamerTag: "BigT",
        id: 6,
        role: "IGL",
        team: "Faze Clan"
      }
    ];

    this.state = {
      searchText: ""
    };
  }

  updateSearch = event => {
    this.setState({
      searchText: event.target.value
    });
    this.requestSearchUsers(event.target.value);
  };

  render() {
    return (
      <div className="players">
        <div className="players-header">
          <h1>Players</h1>
        </div>
        <div className="players-search">
          <Search
            results={this.props.players.data}
            updateSearch={this.updateSearch}
          />
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

function mapStateToProps({ auth, players }) {
  return { auth, players };
}

export default connect(mapStateToProps)(Players);
