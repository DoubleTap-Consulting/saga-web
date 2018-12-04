import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";

import Search from "components/search/search";
import FeaturedPlayers from "./components/featured-players/featuredPlayers";
import FeaturedTournaments from "./components/featured-tournaments/featuredTournaments";
import FeaturedContent from "./components/featured-news/featuredNews";

import ProfilePreview from "images/profilepreview.png";
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
          <h4 className="logo-big">Saga.GG</h4>
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
              <h1 className="home-sellingPoints-section-title">Resume</h1>
              <img
                src={ProfilePreview}
                className="home-sellingPoints-section-image"
              />
              <h3 className="home-sellingPoints-section-description">
                Saga.GG is your esports resume. Beautiful, fast and trustworthy.
                If you're in the scene or aspiring to be, this is what teams and
                managers will look at to see if you have what it takes.
              </h3>
            </div>
            <div className="home-sellingPoints-section">
              <h1 className="home-sellingPoints-section-title">Content</h1>
              <img
                src={ContentPreview}
                className="home-sellingPoints-section-image"
              />
              <h3 className="home-sellingPoints-section-description">
                Forget about having to scour Twitter for breaking news, Saga.GG
                provides curated content from top tier pros, managers, coaches,
                casters and more at the tip of your fingers. You'll find the
                best and most up to date content here.
              </h3>
            </div>
            <div className="home-sellingPoints-section">
              <h1 className="home-sellingPoints-section-title">Events</h1>
              <img
                src={TournamentsPreview}
                className="home-sellingPoints-section-image"
              />
              <h3 className="home-sellingPoints-section-description">
                Be the first to know about who, what, when and where from our
                beautiful interface. From million dollar tournaments to weekly
                leagues games, we've got you covered.
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
