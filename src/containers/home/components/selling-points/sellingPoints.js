import React, { Component } from "react";
import PropTypes from "prop-types";

import ProfilePreview from "images/profilePreview.png";
import ContentPreview from "images/content.png";
import TournamentsPreview from "images/tournaments.png";

import "./sellingPoints.css";

class SellingPoints extends Component {
  constructor() {
    super();

    this.state = {};
  }

  render() {
    return (
      <div className="sellingPoints">
        <div className="sellingPoints-section">
          <h1 className="sellingPoints-section-title">Resume</h1>
          <img
            src={ProfilePreview}
            className="sellingPoints-section-image"
            alt="profile preview"
          />
          <h3 className="sellingPoints-section-description">
            Saga.GG is your esports resume. Beautiful, fast and trustworthy. If
            you're in the scene or aspiring to be, this is what teams and
            managers will look at to see if you have what it takes.
          </h3>
        </div>
        <div className="sellingPoints-section">
          <h1 className="sellingPoints-section-title">Content</h1>
          <img
            src={ContentPreview}
            className="sellingPoints-section-image"
            alt="content preview"
          />
          <h3 className="sellingPoints-section-description">
            Forget about having to scour Twitter for breaking news, Saga.GG
            provides curated content from top tier pros, managers, coaches,
            casters and more at the tip of your fingers. You'll find the best
            and most up to date content here.
          </h3>
        </div>
        <div className="sellingPoints-section">
          <h1 className="sellingPoints-section-title">Events</h1>
          <img
            src={TournamentsPreview}
            className="sellingPoints-section-image"
            alt="tournaments preview"
          />
          <h3 className="sellingPoints-section-description">
            Be the first to know about who, what, when and where from our
            beautiful interface. From million dollar tournaments to weekly
            leagues games, we've got you covered.
          </h3>
        </div>
      </div>
    );
  }
}

SellingPoints.contextTypes = {
  store: PropTypes.object.isRequired,
  router: PropTypes.object.isRequired
};

export default SellingPoints;
