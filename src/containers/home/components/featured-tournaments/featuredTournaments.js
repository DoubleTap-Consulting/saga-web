import React, { Component } from "react";
import { connect } from "react-redux";
import { getFeaturedTournaments } from "./actions";

import TournamentCard from "components/tournament-card/tournamentCard";

import "./featuredTournaments.scss";

class FeaturedTournaments extends Component {
  constructor() {
    super();

    this.state = {};
  }

  componentWillMount() {
    const { getFeaturedTournaments } = this.props;
    getFeaturedTournaments();
  }

  render() {
    const { tournaments } = this.props;
    console.log("fea", tournaments);
    return (
      <div className="featuredTournaments section">
        <h1 className="heading-2">Featured Tournaments</h1>
        <div className="featuredTournaments-cards">
          {tournaments.map(tournament => (
            <TournamentCard
              tournament={tournament}
              key={`featuredTournament${tournament.id}`}
              requiresLogin
              user={this.props.user}
            />
          ))}
        </div>
      </div>
    );
  }
}

const actionCreators = {
  getFeaturedTournaments
};

const mapStateToProps = ({ featuredTournaments: { tournaments } }) => ({
  tournaments
});

export default connect(
  mapStateToProps,
  actionCreators
)(FeaturedTournaments);
