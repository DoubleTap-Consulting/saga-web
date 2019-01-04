import React, { Component } from "react";
import PropTypes from "prop-types";

import ProfilePreview from "images/profilePreview.png";
import ContentPreview from "images/content.png";
import TournamentsPreview from "images/tournaments.png";

import Icon from "@material-ui/core/Icon";

import "./sellingPoints.css";

class SellingPoints extends Component {
  constructor() {
    super();

    this.state = {};

    // Create ref for scrollTo
    this.proRef = React.createRef();
    this.aspiringProRef = React.createRef();
    this.streamerRef = React.createRef();
    this.teamRef = React.createRef();
    this.esportsRef = React.createRef();
  }

  scrollToMyRef = event => {
    this[event.target.id].current.scrollIntoView({
      behavior: "smooth",
      block: "start",
      inline: "center"
    });
  };

  render() {
    return (
      <div className="sellingPoints">
        <div className="sellingPoints-row">
          <div className="sellingPoints-smallSection">
            <h4 className="sellingPoints-smallSection-description">
              you are a
            </h4>
            <h2 className="sellingPoints-smallSection-title">Professional</h2>
            <Icon
              onClick={this.scrollToMyRef}
              style={{ cursor: "pointer" }}
              fontSize="large"
              id="proRef"
            >
              arrow_downward
            </Icon>
          </div>
          <div className="sellingPoints-smallSection">
            <h4 className="sellingPoints-smallSection-description">
              you are a
            </h4>
            <h2 className="sellingPoints-smallSection-title">Aspiring Pro</h2>
            <Icon
              onClick={this.scrollToMyRef}
              style={{ cursor: "pointer" }}
              fontSize="large"
              id="aspiringProRef"
            >
              arrow_downward
            </Icon>
          </div>
          <div className="sellingPoints-smallSection">
            <h4 className="sellingPoints-smallSection-description">
              you are a
            </h4>
            <h2 className="sellingPoints-smallSection-title">Streamer</h2>
            <Icon
              onClick={this.scrollToMyRef}
              style={{ cursor: "pointer" }}
              fontSize="large"
              id="streamerRef"
            >
              arrow_downward
            </Icon>
          </div>
          <div className="sellingPoints-smallSection">
            <h4 className="sellingPoints-smallSection-description">
              you are a
            </h4>
            <h2 className="sellingPoints-smallSection-title">
              Team or manager
            </h2>
            <Icon
              onClick={this.scrollToMyRef}
              style={{ cursor: "pointer" }}
              fontSize="large"
              id="teamRef"
            >
              arrow_downward
            </Icon>
          </div>
          <div className="sellingPoints-smallSection">
            <h4 className="sellingPoints-smallSection-description">you are</h4>
            <h2 className="sellingPoints-smallSection-title">
              interested in esports
            </h2>
            <Icon
              onClick={this.scrollToMyRef}
              style={{ cursor: "pointer" }}
              fontSize="large"
              id="esportsRef"
            >
              arrow_downward
            </Icon>
          </div>
        </div>
        <div className="sellingPoints-playerTypeContainer" ref={this.proRef}>
          <h5 className="sellingPoints-playerTypeContainer-description">
            you are a
          </h5>
          <h2 className="sellingPoints-playerTypeContainer-title">
            Professional
          </h2>
          <h4 className="sellingPoints-playerTypeContainer-help">
            We help pros show their skill, prestige and experience
          </h4>
        </div>
        <div
          className="sellingPoints-playerTypeContainer brand-background-dark"
          ref={this.aspiringProRef}
        >
          <h5
            className="sellingPoints-playerTypeContainer-description"
            ref={this.myRef}
          >
            you are a
          </h5>
          <h2 className="sellingPoints-playerTypeContainer-title">
            Aspiring Professional
          </h2>
          <h4 className="sellingPoints-playerTypeContainer-help">
            We help players get recruited and stand out from the crowd
          </h4>
        </div>
        <div
          className="sellingPoints-playerTypeContainer"
          ref={this.streamerRef}
        >
          <h5
            className="sellingPoints-playerTypeContainer-description"
            ref={this.myRef}
          >
            you are a
          </h5>
          <h2 className="sellingPoints-playerTypeContainer-title">Streamer</h2>
          <h4 className="sellingPoints-playerTypeContainer-help">
            We help streamers stand out by providing your own personal website
          </h4>
        </div>
        <div
          className="sellingPoints-playerTypeContainer brand-background-dark"
          ref={this.teamRef}
        >
          <h5
            className="sellingPoints-playerTypeContainer-description"
            ref={this.myRef}
          >
            you are a
          </h5>
          <h2 className="sellingPoints-playerTypeContainer-title">
            Manager or Team
          </h2>
          <h4 className="sellingPoints-playerTypeContainer-help">
            We help teams connect with the best players and teams in each game
          </h4>
        </div>
        <div
          className="sellingPoints-playerTypeContainer"
          ref={this.esportsRef}
        >
          <h5
            className="sellingPoints-playerTypeContainer-description"
            ref={this.myRef}
          >
            you are
          </h5>
          <h2 className="sellingPoints-playerTypeContainer-title">
            Interested in Esports
          </h2>
          <h4 className="sellingPoints-playerTypeContainer-help">
            Maybe playing isn't your forte -- well we've got you covered with
            all types of opportunities in esports
          </h4>
        </div>
        <div className="sellingPoints-row">
          <div className="sellingPoints-section">
            <h1 className="sellingPoints-section-title">Resume</h1>
            <img
              src={ProfilePreview}
              className="sellingPoints-section-image"
              alt="profile preview"
            />
            <h3 className="sellingPoints-section-description">
              Saga.GG is your esports resume. Beautiful, fast and trustworthy.
              If you're in the scene or aspiring to be, this is what teams and
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
      </div>
    );
  }
}

SellingPoints.contextTypes = {
  store: PropTypes.object.isRequired,
  router: PropTypes.object.isRequired
};

export default SellingPoints;
