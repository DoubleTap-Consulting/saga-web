import React, { Component } from "react";
import { connect } from 'react-redux'
import { getAllTournaments } from './actions'

import TournamentCard from "components/tournament-card/tournamentCard";

import "./featuredTournaments.scss";

class FeaturedTournaments extends Component {
  constructor() {
    super();

    this.state = {};
  }

  componentWillMount() {
    console.log('mounting featured tournaments')
    const { getAllTournaments } = this.props
    console.log('this.props', this.props)
    getAllTournaments()
  }

  render() {
    const { tournaments } = this.props
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
  getAllTournaments
}

const mapStateToProps = ({ tournaments: { tournaments } }) => ({
  tournaments
})

export default connect(mapStateToProps, actionCreators)(FeaturedTournaments);
