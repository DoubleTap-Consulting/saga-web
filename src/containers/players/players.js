import React, { useState } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";

import PlayerCard from "components/player-card/playerCard";
import Search from "components/search/search";

import { getPlayers } from "actions/players";

import "./players.scss";

function Players({ players = [], dispatch }) {
  const [searchText, setSearchText] = useState("");

  const requestSearchUsers = searchText => {
    dispatch(getPlayers(searchText));
  };

  const updateSearch = event => {
    setSearchText(event.target.value);
    requestSearchUsers(event.target.value);
  };

  return (
    <div className="players">
      <div className="players-header">
        <h1>Players</h1>
      </div>
      <div className="players-search">
        <Search results={players} updateSearch={updateSearch} hideResults />
      </div>
      <div className="players-container">
        {players.map(player => (
          <PlayerCard
            player={player}
            key={`playersList${player.id}`}
            hideSocialStats
          />
        ))}
        {players.length === 0 && <h3>No players to show.</h3>}
      </div>
    </div>
  );
}

Players.propTypes = {
  dispatch: PropTypes.func.isRequired,
  location: PropTypes.object.isRequired,
  auth: PropTypes.object.isRequired
};

function mapStateToProps({ auth, players: { data: players } }) {
  return { auth, players };
}

export default connect(mapStateToProps)(Players);
