import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";

import Article2Image from "images/article2.jpg";

import renderHTML from "react-render-html";

import "./article.css";

class Article extends Component {
  constructor(props, context) {
    super(props, context);

    // TODO: fix articleId param in props so I can grab article info with ID

    this.article = {
      title: "DreamHack enters partnership with Esport-Management for 2019",
      image: Article2Image,
      description: `<p>Marcus Lindmark, CEO of DreamHack discussed the partnership: “We at DreamHack are very pleased to have reached an agreement with Esport-Management. They are helping build the tools to help the next generation of esport superstars, and we’re excited to be a part of that journey. Now we’re looking forward to an exciting 2019 together and we are sure that this is only beginning of a successful and long-term partnership.”<br>
        Starting with DreamHack Leipzig over February 15-17th, Esport-Management will be a sponsor and global partner for the DreamHack Pro Circuit. G2 Esports partnered with the platform in October, with content being one of the main collaborative efforts between the two parties.<br>
        Mike Hessabi, CEO of Esport-Management also commented: “We are extremely proud to have the privilege of being the global exclusive partner (in our category) of DreamHack. Together, Esport-Management and DreamHack share the same passion for Esports and video gaming. As we help amateur players improve their skills and progressing their game, our partnership with DreamHack provides a wonderful opportunity for our members to participate first-hand in DreamHack events and festivals. It also enables Esport-Management to be at the forefront of key events attracting some of the most passionate Esport players and gamers.”<br>
        Earlier this month DreamHack unveiled its full roster of events for 2019, taking place over three continents – demonstrating the company’s efforts in expanding its reach behind Europe and North America.
        </p>`,
      author: "Michael Mitrakos",
      date: "November 2nd, 2018"
    };

    this.state = {};
  }

  render() {
    return (
      <div className="article">
        <div className="article-header">
          <h1>{this.article.title}</h1>
        </div>
        <div className="article-container">
          <img
            src={this.article.image}
            className="article-container-banner"
            alt="Article Header"
          />
          <div className="article-container-articleView">
            <p className="article-container-articleView-date">
              {this.article.date}
            </p>
            <p className="article-container-text">
              {renderHTML(this.article.description)}
            </p>
          </div>
        </div>
      </div>
    );
  }
}

Article.propTypes = {
  dispatch: PropTypes.func.isRequired,
  location: PropTypes.object.isRequired,
  auth: PropTypes.object.isRequired
};

Article.defaultProps = {
  user: null
};

Article.contextTypes = {
  router: PropTypes.object.isRequired,
  store: PropTypes.object.isRequired
};

function mapStateToProps({ auth, user }) {
  return { auth, user };
}

export default connect(mapStateToProps)(Article);
