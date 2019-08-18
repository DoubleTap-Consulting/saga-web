import React, { Component } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

import "./search.scss";

class Search extends Component {
  render() {
    return (
      <div className="search">
        <input type="text" required onChange={this.props.updateSearch} />
        <span className="highlight" />
        <span className="bar" />
        <label>Search for a gamertag</label>
        {!this.props.hideResults && (
          <div className="search-results">
            {this.props.results.map(row => (
              <Link to={`/${row.gamerTag}`}>
                <div className="search-results-row">
                  <div className="search-results-column">
                    <h4 className="search-results-gamertag">{row.gamerTag}</h4>
                    {row.name && (
                      <p className="search-results-name">{row.name}</p>
                    )}
                  </div>
                  <h3 className="search-results-game">{row.game}</h3>
                </div>
              </Link>
            ))}
          </div>
        )}
      </div>
    );
  }
}

Search.propTypes = {
  results: PropTypes.array.isRequired,
  hideResults: PropTypes.bool
};

Search.defaultProps = {
  hideResults: false,
  results: []
};

export default Search;
