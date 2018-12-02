import React, { Component } from "react";
import PropTypes from "prop-types";

import pubgMobileImage from "images/pubgMobile.jpg";

import "./tournamentCard.css";

class TournamentCard extends Component {
  static get contextTypes() {
    return {
      store: PropTypes.object.isRequired,
      router: PropTypes.object.isRequired
    };
  }

  constructor() {
    super();

    this.state = {};
  }

  render() {
    return (
      <div className="tournamentCard">
        <h3 className="tournamentCard-name">PGI - PUBG Global Invitational</h3>
      </div>
    );
  }
}

export default TournamentCard;
