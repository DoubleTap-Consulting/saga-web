import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";

import ContentCard from "components/content-card/contentCard";

import ProfileImage from "images/profile-image.jpeg";

import "./content.css";

class Content extends Component {
  constructor(props, context) {
    super(props, context);

    this.content = [
      {
        title: "Test Content",
        summary:
          "Something no one is talking about is this dirty little secret that will help you be the best.",
        image: ProfileImage,
        author: "Michael Mitrakos",
        date: "12/12/2012",
        role: "Caster"
      },
      {
        title: "PUBG Article",
        summary:
          "Something no one is talking about is this dirty little secret that will help you be the best. Something no one is talking about is this dirty little secret that will help you be the best.",
        image: ProfileImage,
        author: "Bulba",
        date: "04/12/2018",
        role: "Pro"
      },
      {
        title: "Best advice from a pro",
        summary:
          "Something no one is talking about is this dirty little secret that will help you be the best. Let me tell you all about it.",
        image: ProfileImage,
        author: "Ghost_Mccoy",
        date: "02/19/1990",
        role: "Pro"
      },
      {
        title: "Test Content",
        summary:
          "Something no one is talking about is this dirty little secret that will help you be the best.",
        image: ProfileImage,
        author: "Michael Mitrakos",
        date: "12/12/2012",
        role: "Caster"
      },
      {
        title: "PUBG Article",
        summary:
          "Something no one is talking about is this dirty little secret that will help you be the best. Something no one is talking about is this dirty little secret that will help you be the best.",
        image: ProfileImage,
        author: "Bulba",
        date: "04/12/2018",
        role: "Pro"
      },
      {
        title: "Best advice from a pro",
        summary:
          "Something no one is talking about is this dirty little secret that will help you be the best. Let me tell you all about it.",
        image: ProfileImage,
        author: "Ghost_Mccoy",
        date: "02/19/1990",
        role: "Pro"
      },
      {
        title: "Test Content",
        summary:
          "Something no one is talking about is this dirty little secret that will help you be the best.",
        image: ProfileImage,
        author: "Michael Mitrakos",
        date: "12/12/2012",
        role: "Caster"
      },
      {
        title: "PUBG Article",
        summary:
          "Something no one is talking about is this dirty little secret that will help you be the best. Something no one is talking about is this dirty little secret that will help you be the best.",
        image: ProfileImage,
        author: "Bulba",
        date: "04/12/2018",
        role: "Pro"
      },
      {
        title: "Best advice from a pro",
        summary:
          "Something no one is talking about is this dirty little secret that will help you be the best. Let me tell you all about it.",
        image: ProfileImage,
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
          {this.content.map(content => (
            <ContentCard
              className="content-container-player"
              content={content}
            />
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
