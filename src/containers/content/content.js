import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";

import NewsCard from "components/news-card/newsCard";

import ProfileImage from "images/profile-image.jpeg";
import Article1Image from "images/article1.jpeg";
import Article2Image from "images/article2.jpg";
import Article3Image from "images/article3.jpg";

import "./content.css";

class Content extends Component {
  constructor(props, context) {
    super(props, context);

    this.content = [
      {
        id: 1,
        title: "Test Content",
        summary:
          "Something no one is talking about is this dirty little secret that will help you be the best.",
        image: Article1Image,
        author: "Michael Mitrakos",
        date: "12/12/2012",
        role: "Caster"
      },
      {
        id: 2,
        title: "PUBG Article",
        summary:
          "Something no one is talking about is this dirty little secret that will help you be the best. Something no one is talking about is this dirty little secret that will help you be the best.",
        image: Article2Image,
        author: "Bulba",
        date: "04/12/2018",
        role: "Pro"
      },
      {
        id: 3,
        title: "Best advice from a pro",
        summary:
          "Something no one is talking about is this dirty little secret that will help you be the best. Let me tell you all about it.",
        image: Article3Image,
        author: "Ghost_Mccoy",
        date: "02/19/1990",
        role: "Pro"
      },
      {
        id: 4,
        title: "Test Content",
        summary:
          "Something no one is talking about is this dirty little secret that will help you be the best.",
        image: Article1Image,
        author: "Michael Mitrakos",
        date: "12/12/2012",
        role: "Caster"
      },
      {
        id: 5,
        title: "PUBG Article",
        summary:
          "Something no one is talking about is this dirty little secret that will help you be the best. Something no one is talking about is this dirty little secret that will help you be the best.",
        image: Article2Image,
        author: "Bulba",
        date: "04/12/2018",
        role: "Pro"
      },
      {
        id: 6,
        title: "Best advice from a pro",
        summary:
          "Something no one is talking about is this dirty little secret that will help you be the best. Let me tell you all about it.",
        image: Article3Image,
        author: "Ghost_Mccoy",
        date: "02/19/1990",
        role: "Pro"
      },
      {
        id: 7,
        title: "Test Content",
        summary:
          "Something no one is talking about is this dirty little secret that will help you be the best.",
        image: Article1Image,
        author: "Michael Mitrakos",
        date: "12/12/2012",
        role: "Caster"
      },
      {
        id: 8,
        title: "PUBG Article",
        summary:
          "Something no one is talking about is this dirty little secret that will help you be the best. Something no one is talking about is this dirty little secret that will help you be the best.",
        image: Article2Image,
        author: "Bulba",
        date: "04/12/2018",
        role: "Pro"
      },
      {
        id: 9,
        title: "Best advice from a pro",
        summary:
          "Something no one is talking about is this dirty little secret that will help you be the best. Let me tell you all about it.",
        image: Article3Image,
        author: "Ghost_Mccoy",
        date: "02/19/1990",
        role: "Pro"
      }
    ];

    this.state = {};
  }

  render() {
    return (
      <div className="content">
        <div className="content-header brand-background-header">
          <h1>Curated Content</h1>
        </div>
        <div className="content-container">
          {this.content.map(news => (
            <NewsCard news={news} key={`featuredNews${news.id}`} />
          ))}
        </div>
      </div>
    );
  }
}

Content.propTypes = {
  dispatch: PropTypes.func.isRequired,
  location: PropTypes.object.isRequired,
  auth: PropTypes.object.isRequired
};

Content.defaultProps = {
  user: null
};

Content.contextTypes = {
  router: PropTypes.object.isRequired,
  store: PropTypes.object.isRequired
};

function mapStateToProps({ auth, user }) {
  return { auth, user };
}

export default connect(mapStateToProps)(Content);
