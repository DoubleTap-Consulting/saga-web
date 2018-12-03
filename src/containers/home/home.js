import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";

import Search from "components/search/search";
import FeaturedPlayers from "./components/featured-players/featuredPlayers";
import FeaturedTournaments from "./components/featured-tournaments/featuredTournaments";
import FeaturedContent from "./components/featured-news/featuredNews";

import ProfilePreview from "images/profilePreview.png";
import ContentPreview from "images/content.png";
import TournamentsPreview from "images/tournaments.png";

import "./home.css";

class Home extends Component {
  constructor(props, context) {
    super(props, context);

    this.state = {};
  }

  render() {
    return (
      <div className="home">
        <div className="home-header">
          <h4 className="logo">Saga.GG</h4>
          <h5 className="home-header-secondary">
            Your Home for All Things Esports
          </h5>
          {this.props.user && (
            <div className="home-search">
              <Search />
            </div>
          )}
        </div>
        {this.props.user && (
          <div className="home-sellingPoints">
            <div className="home-sellingPoints-section">
              <h1 className="home-sellingPoints-section-title">
                Your Esports Resume
              </h1>
              <img
                src={ProfilePreview}
                className="home-sellingPoints-section-image"
              />
              <h3 className="home-sellingPoints-section-description">
                Saga.GG is your new esports resume. Beautiful, fast and
                trustworthy. If you're in the scene or are aspiring to be, this
                is what teams and managers will look at to see if you have what
                it takes.
              </h3>
            </div>
            <div className="home-sellingPoints-section">
              <h1 className="home-sellingPoints-section-title">Top Content</h1>
              <img
                src={ContentPreview}
                className="home-sellingPoints-section-image"
              />
              <h3 className="home-sellingPoints-section-description">
                All the esports content you've ever wanted from pros to the most
                influential content creators in each title.
              </h3>
            </div>
            <div className="home-sellingPoints-section">
              <h1 className="home-sellingPoints-section-title">
                Upcoming Events
              </h1>
              <img
                src={TournamentsPreview}
                className="home-sellingPoints-section-image"
              />
              <h3 className="home-sellingPoints-section-description">
                Stay up to date with all the top tournaments and leagues with a
                beautiful interface for when things are happening, where, and so
                much more.
              </h3>
            </div>
          </div>
        )}
        <FeaturedContent />
        <FeaturedTournaments />
        <FeaturedPlayers />
      </div>
    );
  }
}

Home.propTypes = {
  dispatch: PropTypes.func.isRequired,
  location: PropTypes.object.isRequired,
  auth: PropTypes.object.isRequired
};

Home.defaultProps = {
  user: null
};

Home.contextTypes = {
  store: PropTypes.object.isRequired,
  router: PropTypes.object.isRequired
};

function mapStateToProps({ auth, user }) {
  console.log("user", user);
  return { auth, user };
}

export default connect(mapStateToProps)(Home);
