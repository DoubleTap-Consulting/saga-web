import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import ReactTooltip from "react-tooltip";

import { trackClick } from "utils/googleAnalytics";
import ArticleImage from "images/article2.jpg";

import "./newsCard.scss";

function NewsCard({ news, user }) {
  return (
    <Link to={`/article/${news.id}`}>
      <div
        className="newsCard brand-background-dark"
        style={!user ? { cursor: "not-allowed" } : {}}
        data-tip="You must sign in to view articles"
        data-tip-disable={user ? true : false}
        id="NewsCard"
        name="News"
        onClick={trackClick}
      >
        <img src={ArticleImage} className="newsCard-image" alt="news" />
        <div className="newsCard-content">
          <h2 className="newsCard-content-title">{news.title}</h2>
          <h5 className="newsCard-content-description">{news.description}</h5>
          <h4 className="newsCard-content-date">{news.date}</h4>
          <h4 className="newsCard-content-author">{news.author}</h4>
        </div>
      </div>
      <ReactTooltip />
    </Link>
  );
}

NewsCard.propTypes = {
  news: PropTypes.shape({
    title: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired
  })
};

export default NewsCard;
