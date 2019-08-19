import React, { useEffect } from "react";
import { connect } from "react-redux";
import { getTournaments } from "actions/tournaments";
import TournamentCard from "components/tournament-card/tournamentCard";

import "./tournaments.scss";

function Tournaments({ dispatch, tournaments = [] }) {
  useEffect(() => {
    dispatch(getTournaments());
  }, []);

  return (
    <div className="tournaments">
      <div className="tournaments-header brand-background-header">
        <h1>Tournaments</h1>
      </div>
      <div className="tournaments-container">
        {tournaments.map(tournament => (
          <TournamentCard
            tournament={tournament}
            key={`tournamentList${tournament.id}`}
          />
        ))}
      </div>
    </div>
  );
}

function mapStateToProps({ tournaments: { data: tournaments } }) {
  return { tournaments };
}

export default connect(mapStateToProps)(Tournaments);
