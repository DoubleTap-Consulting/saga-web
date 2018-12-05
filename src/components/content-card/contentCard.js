import React, { Component } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

import "./contentCard.css";

class ContentCard extends Component {
  constructor() {
    super();

    this.state = {};
  }

  render() {
    return <Link to={`/article/${this.props.content.id}`} />;
  }
}

ContentCard.contextTypes = {
  content: PropTypes.shape({
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired
  })
};

ContentCard.contextTypes = {
  store: PropTypes.object.isRequired,
  router: PropTypes.object.isRequired
};

export default ContentCard;
