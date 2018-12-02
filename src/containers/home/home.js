import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";

import Search from "components/search/search";
import FeaturedPlayers from "./components/featured-players/featuredPlayers";
import FeaturedTournaments from "./components/featured-tournaments/featuredTournaments";
import FeaturedContent from "./components/featured-news/featuredNews";

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
          <h5 className="home-header-secondary">
            Your Home for All Things Esports
          </h5>
          {!this.props.user && (
            <div className="home-search">
              <Search />
            </div>
          )}
          {this.props.user && <div className="home-sellingPoints" />}
        </div>
        <div className="home-featuredContent">
          <FeaturedContent />
        </div>
        <div className="home-featuredTournaments">
          <FeaturedTournaments />
        </div>
        <div className="home-featuredPlayers">
          <FeaturedPlayers />
        </div>
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
