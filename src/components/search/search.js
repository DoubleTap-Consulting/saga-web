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
        <label>Name</label>
      </div>
    );
  }
}

Search.propTypes = {
  search: PropTypes.func.isRequired
};

Search.contextTypes = {
  store: PropTypes.object.isRequired,
  router: PropTypes.object.isRequired
};

export default Search;
