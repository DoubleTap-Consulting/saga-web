import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";

import Search from "components/search/search";
import FeaturedPlayers from "./components/featured-players/featuredPlayers";
import FeaturedTournaments from "./components/featured-tournaments/featuredTournaments";

import pubgMobileImage from "images/pubgMobile.jpg";

import "./home.css";

class Home extends Component {
  constructor(props, context) {
    super(props, context);

    this.state = {};
  }

  search = event => {
    // TODO: finish search
    console.log("searchText", event.target.value);
  };

  render() {
    return (
      <div className="home">
        <div
          className="home-header"
          style={{
            background: `linear-gradient(to bottom, rgba(0,0,0,0.5), rgba(0,0,0,0.9)), url(${pubgMobileImage})`,
            backgroundSize: "cover",
            height: 600,
            width: "100%"
          }}
        >
          <h5 className="home-header-secondary">
            The home of all esports players
          </h5>
          <div className="home-search">
            <Search search={this.search} />
          </div>
        </div>
        <div className="home-featuredPlayers">
          <FeaturedPlayers />
        </div>
        <div className="home-featuredTournaments">
          <FeaturedTournaments />
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

function mapStateToProps({ auth }) {
  return { auth };
}

export default connect(mapStateToProps)(Home);
