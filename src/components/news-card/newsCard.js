import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import ReactTooltip from "react-tooltip";

import { trackClick } from "utils/googleAnalytics";

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
          style={!this.props.auth.user ? { cursor: "not-allowed" } : {}}
          data-tip="You must sign in to view articles"
          data-tip-disable={this.props.auth.user ? true : false}
          id="NewsCard"
          name="News"
          onClick={trackClick}
        >
          <img
            src={this.props.news.image}
            className="newsCard-image"
            alt="news"
          />
          <div className="newsCard-content">
            <h2 className="newsCard-content-title">{this.props.news.title}</h2>
            <h5 className="newsCard-content-description">
              {this.props.news.summary}
            </h5>
            <h4 className="newsCard-content-date">{this.props.news.date}</h4>
            <h4 className="newsCard-content-author">
              {this.props.news.author}
            </h4>
          </div>
        </div>
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

function mapStateToProps({ auth }) {
  return { auth };
}

export default connect(mapStateToProps)(NewsCard);
