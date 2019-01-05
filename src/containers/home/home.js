import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

import Search from "components/search/search";
import FeaturedPlayers from "./components/featured-players/featuredPlayers";
import FeaturedTournaments from "./components/featured-tournaments/featuredTournaments";
import FeaturedContent from "./components/featured-news/featuredNews";
import SellingPoints from "./components/selling-points/sellingPoints";

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
          {this.props.auth.user && (
            <div className="home-search">
              <Search />
            </div>
          )}
        </div>
        <div style={{ width: "100%" }}>
          <SellingPoints />
        </div>
        <FeaturedContent />
        <FeaturedTournaments user={this.props.auth.user} />
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

function mapStateToProps({ auth }) {
  return { auth };
}

export default connect(mapStateToProps)(Home);
