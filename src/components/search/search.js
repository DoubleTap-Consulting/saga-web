import React, { Component } from "react";
import PropTypes from "prop-types";

import "./search.css";

class Search extends Component {
  constructor() {
    super();

    this.state = {};
  }

  render() {
    return (
      <div className="search">
        <input type="text" required />
        <span className="highlight" />
        <span className="bar" />
        <label>Search for a gamertag or team</label>
        {!this.props.hideResults && (
          <div className="search-results">
            {this.props.results.map(row => (
              <div className="search-results-row">
                <h3>Michael Mitrakos</h3>
              </div>
            ))}
          </div>
        )}
      </div>
    );
  }
}

Search.propTypes = {
  results: PropTypes.array.isRequired,
  hideResults: PropTypes.array
};

Search.defaultProps = {
  hideResults: false,
  results: []
};

Search.contextTypes = {
  store: PropTypes.object.isRequired,
  router: PropTypes.object.isRequired
};

export default Search;
