import React, { Component } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import ReactTooltip from "react-tooltip";
import moment from "moment";
import HkPubg from "images/hkpubg.jpg";

import "./tournamentCard.scss";

const TournamentCard = ({ tournament, requiresLogin, user }) => {
  const tournamentDate = moment(tournament.date);
  const todaysDate = moment();
  const daysUntilTournament = tournamentDate.diff(todaysDate, "days");
  return (
    <Link
      to={`/tournaments/${tournament.id}`}
      style={requiresLogin && !user ? { cursor: "not-allowed" } : {}}
      data-tip="You must sign in to view a tournament"
      data-tip-disable={requiresLogin && user ? true : false}
    >
      <div className="tournamentCard">
        <img src={HkPubg} className="tournamentCard-image" alt="tournament" />
        <h2 className="tournamentCard-date">
          Starting {daysUntilTournament} days from now
        </h2>
        <h2 className="tournamentCard-game">{tournament.game}</h2>
        <h2 className="tournamentCard-name">{tournament.title}</h2>
        <h2 className="tournamentCard-prize">
          {tournament.prize_pool} Prize Pool
        </h2>
      </div>
      <ReactTooltip />
    </Link>
  );
};

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
