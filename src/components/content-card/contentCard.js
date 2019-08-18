import React, { Component } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

import { trackClick } from "utils/googleAnalytics";

import "./contentCard.scss";

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

ContentCard.propTypes = {
  content: PropTypes.shape({
    title: PropTypes.string.isRequired,
    summary: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    role: PropTypes.string.isRequired
  })
};

export default ContentCard;
