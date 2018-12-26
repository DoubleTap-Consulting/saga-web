import React, { Component } from "react";
import PropTypes from "prop-types";

import { convertToCurrency } from "utils/currency";

import "./tournamentCard.css";

class TournamentCard extends Component {
  constructor() {
    super();

    this.state = {};
  }

  render() {
    return (
      <div className="tournamentCard">
        <img
          src={this.props.tournament.image}
          className="tournamentCard-image"
          alt="tournament"
        />
        <h2 className="tournamentCard-date">
          Starting {this.props.tournament.date}
        </h2>
        <h2 className="tournamentCard-game">{this.props.tournament.game}</h2>
        <h2 className="tournamentCard-name">{this.props.tournament.name}</h2>
        <h2 className="tournamentCard-prize">
          {convertToCurrency(this.props.tournament.prize)} Prize Pool
        </h2>
      </div>
    );
  }
}

TournamentCard.propTypes = {
  tournament: PropTypes.shape({
    name: PropTypes.string.isRequired,
    prize: PropTypes.number.isRequired,
    image: PropTypes.string.isRequired,
    game: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    link: PropTypes.string.isRequired
  }).isRequired
};

TournamentCard.contextTypes = {
  store: PropTypes.object.isRequired,
  router: PropTypes.object.isRequired
};

export default TournamentCard;
