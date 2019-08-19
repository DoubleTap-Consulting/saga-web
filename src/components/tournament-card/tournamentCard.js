import React, { Component } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import ReactTooltip from "react-tooltip";
import moment from "moment";
import HkPubg from "images/hkpubg.jpg";

import "./tournamentCard.scss";

const  TournamentCard = (props) => {
    const tournamentDate = moment(props.tournament.data.start_date)
    const todaysDate = moment()
    const daysUntilTournament = tournamentDate.diff(todaysDate, 'days')
    return (
      <Link
        to={`/tournaments/${props.tournament.id}`}
        style={
          props.requiresLogin && !props.user
            ? { cursor: "not-allowed" }
            : {}
        }
        data-tip="You must sign in to view a tournament"
        data-tip-disable={
          props.requiresLogin && props.user ? true : false
        }
      >
        <div className="tournamentCard">
          <img
            src={HkPubg}
            className="tournamentCard-image"
            alt="tournament"
          />
          <h2 className="tournamentCard-date">
            Starting {daysUntilTournament} days from now
          </h2>
          <h2 className="tournamentCard-game">{props.tournament.data.game}</h2>
          <h2 className="tournamentCard-name">{props.tournament.data.title}</h2>
          <h2 className="tournamentCard-prize">
            {props.tournament.data.prize_pool} Prize Pool
          </h2>
        </div>
        <ReactTooltip />
      </Link>
    );
}

TournamentCard.propTypes = {
  tournament: PropTypes.shape({
    data: PropTypes.shape({
      title: PropTypes.string.isRequired,
      prize_pool: PropTypes.string.isRequired,
      image: PropTypes.string.isRequired,
      game: PropTypes.string.isRequired,
      start_date: PropTypes.string.isRequired
    })
  }).isRequired,
  requiresLogin: PropTypes.bool
};

TournamentCard.defaultProps = {
  requiresLogin: false
};
export default TournamentCard;
