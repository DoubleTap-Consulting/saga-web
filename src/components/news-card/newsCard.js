import React, { Component } from "react";
import PropTypes from "prop-types";

import ProfileImage from "images/profile-image.jpeg";

import "./newsCard.css";

class NewsCard extends Component {
  static get contextTypes() {
    return {
      store: PropTypes.object.isRequired,
      router: PropTypes.object.isRequired
    };
  }

  constructor() {
    super();

    this.state = {};
  }

  render() {
    return (
      <div className="newsCard">
        <img src={ProfileImage} className="newsCard-image" />
        <div className="newsCard-content">
          <h2 className="newsCard-content-title">{this.props.news.title}</h2>
          <h5 className="newsCard-content-description">
            {this.props.news.description}
          </h5>
          <h4 className="newsCard-content-date">{this.props.news.date}</h4>
        </div>
      </div>
    );
  }
}

export default NewsCard;
