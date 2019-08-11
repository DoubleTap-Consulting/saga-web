import React, { Component } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

import Icon from "@material-ui/core/Icon";

import ProfilePreview from "images/profilePreview.png";
import TournamentsImage from "images/tournaments.png";
import ContentImage from "images/content.png";

import "./sellingPoints.css";

class SellingPoints extends Component {
  constructor() {
    super();

    this.state = {};

    // Create refs for scrollTo
    this.proRef = React.createRef();
    this.aspiringProRef = React.createRef();
    this.streamerRef = React.createRef();
    this.teamRef = React.createRef();
    this.esportsRef = React.createRef();

    this.playerTypeSections = [
      {
        description: "you are a",
        role: "Professional",
        ref: this.proRef,
        id: "proRef",
        subTitle: "We help pros show their skill, prestige and experience",
        bullets: [
          {
            id: 1,
            bold:
              "This is your own personal esports website. For pros, built by pros.",
            text:
              "From your experience, stream, detailed stats and much more, this is the place for people to find and follow you and your esports career."
          },
          {
            id: 2,
            bold:
              "This is your own personal esports website. For pros, built by pros.",
            text:
              "From your experience, stream, detailed stats and much more, this is the place for people to find and follow you and your esports career."
          }
        ]
      },
      {
        description: "you are an",
        role: "Aspiring Pro",
        ref: this.aspiringProRef,
        id: "aspiringProRef",
        subTitle: "We help players get recruited and stand out from the crowd",
        darkTheme: true,
        bullets: [
          {
            id: 1,
            bold:
              "This is your own personal esports website. For pros, built by pros.",
            text:
              "From your experience, stream, detailed stats and much more, this is the place for people to find and follow you and your esports career."
          }
        ]
      },
      {
        description: "you are a",
        role: "Streamer",
        ref: this.streamerRef,
        id: "streamerRef",
        subTitle:
          "We help streamers stand out by providing your own personal website",
        bullets: [
          {
            id: 1,
            bold:
              "This is your own personal esports website. For pros, built by pros.",
            text:
              "From your experience, stream, detailed stats and much more, this is the place for people to find and follow you and your esports career."
          }
        ]
      },
      {
        description: "you are a",
        role: "Team or Manager",
        ref: this.teamRef,
        id: "teamRef",
        darkTheme: true,
        subTitle:
          "We help teams connect with the best players and teams in each game",
        bullets: [
          {
            id: 1,
            bold:
              "This is your own personal esports website. For pros, built by pros.",
            text:
              "From your experience, stream, detailed stats and much more, this is the place for people to find and follow you and your esports career."
          },
          {
            id: 2,
            bold:
              "This is your own personal esports website. For pros, built by pros.",
            text:
              "From your experience, stream, detailed stats and much more, this is the place for people to find and follow you and your esports career."
          }
        ]
      },
      {
        description: "you are",
        role: "Interested in Esports",
        ref: this.esportsRef,
        id: "esportsRef",
        subTitle:
          "Maybe playing isn't your forte -- well we've got you covered with all types of opportunities in esports",
        bullets: [
          {
            id: 1,
            bold:
              "This is your own personal esports website. For pros, built by pros.",
            text:
              "From your experience, stream, detailed stats and much more, this is the place for people to find and follow you and your esports career."
          }
        ]
      }
    ];
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
          {this.playerTypeSections.map(type => (
            <div
              className="sellingPoints-playerTypeSection"
              onClick={this.scrollToMyRef}
              id={type.id}
              key={`homePlayerTypeSection${type.id}`}
            >
              <h4 className="sellingPoints-playerTypeSection-description">
                {type.description}
              </h4>
              <h2 className="sellingPoints-playerTypeSection-title">
                {type.role}
              </h2>
              <Icon
                fontSize="large"
                className="sellingPoints-playerTypeSection-icon"
              >
                arrow_downward
              </Icon>
            </div>
          ))}
        </div>
        {this.playerTypeSections.map(type => (
          <div
            className={`sellingPoints-playerTypeContainer ${
              type.darkTheme ? "brand-background-dark" : ""
            }`}
            ref={type.ref}
            key={`homePlayerTypeSectionCard${type.id}`}
          >
            <h5 className="sellingPoints-playerTypeContainer-description">
              {type.description}
            </h5>
            <h2 className="sellingPoints-playerTypeContainer-title">
              {type.role}
            </h2>
            <h4 className="sellingPoints-playerTypeContainer-help">
              {type.subTitle}
            </h4>
            {type.bullets.map(bullet => (
              <div
                className="sellingPoints-playerTypeContainer-paragraph"
                key={`homePlayerTypeBullets${type.id}bullet${bullet.id}`}
              >
                <p>
                  <strong>{bullet.bold}</strong> {bullet.text}
                </p>
              </div>
            ))}
          </div>
        ))}
        <div className="home-signupNow">
          <h3 className="home-signupNow-text">
            Show the esports world who you are. #MySaga
          </h3>
          <Link to="/signup">
            <h3 className="brand-button-neutral">Join</h3>
          </Link>
        </div>
        <div className="sellingPoints-section-row">
          <div className="sellingPoints-section">
            <h1 className="sellingPoints-section-title">Resume</h1>
            <img
              src={ProfilePreview}
              alt=""
              className="sellingPoints-section-image"
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
              src={ContentImage}
              alt=""
              className="sellingPoints-section-image"
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
              src={TournamentsImage}
              alt=""
              className="sellingPoints-section-image"
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
