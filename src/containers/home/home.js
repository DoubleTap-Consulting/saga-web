import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";

import Search from "components/search/search";
import FeaturedPlayers from "./components/featured-players/featuredPlayers";
import FeaturedTournaments from "./components/featured-tournaments/featuredTournaments";
import FeaturedContent from "./components/featured-news/featuredNews";
import SellingPoints from "./components/selling-points/sellingPoints";

import { getPlayers } from "actions/players";

import homeLogo from "images/brand/logo9.png";

import "./home.scss";

class Home extends Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      searchText: ""
    };

    this.requestSearchUsers = searchText => {
      this.props.dispatch(getPlayers(searchText));
    };
  }

  updateSearch = event => {
    this.setState({
      searchText: event.target.value
    });
    this.requestSearchUsers(event.target.value);
  };

  render() {
    return (
      <div className="home">
        <div className="home-header">
          <img src={homeLogo} className="logo-small" alt="logo" />
          <h5 className="home-header-secondary">
            Your Home for All Things Esports
          </h5>
          {this.props.auth.user && (
            <div className="home-search">
              <Search
                results={this.props.players.data}
                updateSearch={this.updateSearch}
              />
            </div>
          )}
        </div>
        {!this.props.auth.user && (
          <div style={{ width: "100%" }}>
            <SellingPoints />
          </div>
        )}
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

function mapStateToProps({ auth, players }) {
  return { auth, players };
}

export default connect(mapStateToProps)(Home);
