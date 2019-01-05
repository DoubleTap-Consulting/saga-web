import React, { Component } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

import ReactTooltip from "react-tooltip";

import { convertToCurrency } from "utils/currency";

import "./tournamentCard.css";

class TournamentCard extends Component {
  constructor() {
    super();

    this.state = {};
  }

  render() {
    return (
      <Link
        to={`/tournaments/${this.props.tournament.id}`}
        style={
          this.props.requiresLogin && !this.props.user
            ? { cursor: "not-allowed" }
            : {}
        }
        data-tip="You must sign in to view a tournament"
        data-tip-disable={
          this.props.requiresLogin && this.props.user ? true : false
        }
      >
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
        <ReactTooltip />
      </Link>
    );
  }
}

TournamentCard.propTypes = {
  tournament: PropTypes.shape({
    name: PropTypes.string.isRequired,
    prize: PropTypes.number.isRequired,
    image: PropTypes.string.isRequired,
    game: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired
  }).isRequired,
  requiresLogin: PropTypes.bool
};

TournamentCard.defaultProps = {
  requiresLogin: false
};
export default TournamentCard;
