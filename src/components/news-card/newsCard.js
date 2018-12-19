import React, { Component } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import ReactTooltip from "react-tooltip";

import "./newsCard.css";

class NewsCard extends Component {
  constructor() {
    super();

    this.state = {};
  }

  render() {
    return (
      <Link to={`/article/${this.props.news.id}`}>
        <div
          className="newsCard brand-background-dark"
          data-tip="You must sign in to view articles"
        >
          <img
            src={this.props.news.image}
            className="newsCard-image"
            alt="news"
          />
          <div className="newsCard-content">
            <h2 className="newsCard-content-title">{this.props.news.title}</h2>
            <h5 className="newsCard-content-description">
              {this.props.news.description}
            </h5>
            <h4 className="newsCard-content-date">{this.props.news.date}</h4>
          </div>
        </div>
        {/* TODO: if user not logged in, make unclickable */}
        {/* TODO: if user logged in, don't show tooltip */}
        <ReactTooltip />
      </Link>
    );
  }
}

NewsCard.contextTypes = {
  news: PropTypes.shape({
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired
  })
};

NewsCard.contextTypes = {
  store: PropTypes.object.isRequired,
  router: PropTypes.object.isRequired
};

export default NewsCard;
