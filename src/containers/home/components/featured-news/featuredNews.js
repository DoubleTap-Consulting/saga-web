import React, { Component } from "react";
import PropTypes from "prop-types";

import NewsCard from "components/news-card/newsCard";

import "./featuredNews.css";

class FeaturedNews extends Component {
  constructor() {
    super();

    this.featuredNews = [
      {
        title: "Title #1",
        description:
          "This is the worst description of all time. This is the worst description of all time. This is the worst description of all time. This is the worst description of all time. ",
        date: "November 3rd, 2018",
        id: 1
      },
      {
        title: "Title #2",
        description:
          "This is the worst description of all time. This is the worst description of all time. This is the worst description of all time. This is the worst description of all time. ",
        date: "November 3rd, 2018",
        id: 2
      },
      {
        title: "Title #3",
        description:
          "This is the worst description of all time. This is the worst description of all time. This is the worst description of all time. This is the worst description of all time. ",
        date: "November 3rd, 2018",
        id: 3
      }
    ];

    this.state = {};
  }

  render() {
    return (
      <div className="featuredNews section">
        <h1 className="heading-2">Featured Content</h1>
        <div className="featuredNews-cards">
          {this.featuredNews.map(news => (
            <NewsCard news={news} key={`featuredNews${news.id}`} />
          ))}
        </div>
      </div>
    );
  }
}

FeaturedNews.contextTypes = {
  store: PropTypes.object.isRequired,
  router: PropTypes.object.isRequired
};

export default FeaturedNews;
