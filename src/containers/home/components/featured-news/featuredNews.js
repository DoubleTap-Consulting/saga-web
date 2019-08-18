import React, { Component } from "react";
import PropTypes from "prop-types";

import NewsCard from "components/news-card/newsCard";

import Article1Image from "images/article1.jpeg";
import Article2Image from "images/article2.jpg";
import Article3Image from "images/article3.jpg";

import "./featuredNews.css";

class FeaturedNews extends Component {
  constructor() {
    super();

    this.featuredNews = [
      {
        title: "Optic releases PUBG",
        summary:
          "OpTic Gaming entered PUBG esports in November 0f 2017 with the signing of Why Tempt Fate’s roster and went on to have a successful run with a handful of top finishes at various events throughout the year. In the wake of the announcement of details for the National PUBG League (NPL), however, OpTic Gaming announced on November 30 that they would not field a PUBG team for the upcoming season.",
        date: "November 3rd, 2018",
        image: Article1Image,
        id: 1,
        author: "Hypoc"
      },
      {
        title: "Flyquest - Exko cheating",
        summary:
          "Flyquest will be exiting competitive PUBG with the release of the entire roster. With the recent banning of Exko due to hacking, we've decided that' it's in the best interest of the org to take a step back.",
        date: "November 3rd, 2018",
        image: Article2Image,
        id: 2,
        author: "Michael Mitrakos"
      },
      {
        title: "Hooligans Qualify for NPL",
        summary:
          "The Hooligans, following 7 intense rounds of qualifiers, have made it into NA PUBG Pro League (NPL) and will be battling the top 16 teams in North America. WIth a star studded performance of Allajin, the Hooligans are bound to be a top contender.",
        date: "November 3rd, 2018",
        image: Article3Image,
        id: 3,
        author: "Gabriel Mitrakos"
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

export default FeaturedNews;
