import React, { Component } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

import { trackClick } from "utils/googleAnalytics";

import "./contentCard.css";

class ContentCard extends Component {
  constructor() {
    super();

    this.state = {};
  }

  render() {
    return (
      <Link to={`/article/${this.props.content.id}`}>
        <div className="content" />
      </Link>
    );
  }
}

ContentCard.contextTypes = {
  content: PropTypes.shape({
    title: PropTypes.string.isRequired,
    summary: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    role: PropTypes.string.isRequired
  })
};

ContentCard.contextTypes = {
  store: PropTypes.object.isRequired,
  router: PropTypes.object.isRequired
};

export default ContentCard;
