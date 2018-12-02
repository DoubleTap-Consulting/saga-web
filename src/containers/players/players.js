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
        name: ""
      },
      {
        name: ""
      },
      {
        name: ""
      },
      {
        name: ""
      },
      {
        name: ""
      },
      {
        name: ""
      },
      {
        name: ""
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
        <Search />
        <div className="players-container">
          {this.players.map(player => (
            <PlayerCard className="players-container-player" />
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
