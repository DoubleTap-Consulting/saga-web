import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";

import NewsCard from "components/news-card/newsCard";

import "./news.css";

class News extends Component {
  constructor(props, context) {
    super(props, context);

    this.news = [
      {
        name: ""
      },
      {
        name: ""
      },
      {
        name: ""
      },
      {
        name: ""
      }
    ];

    this.state = {};
  }

  render() {
    return (
      <div className="news">
        <div className="news-header">
          <h1>News</h1>
        </div>
        <div className="news-container">
          {this.news.map(content => (
            <NewsCard className="news-container-player" />
          ))}
        </div>
      </div>
    );
  }
}

News.propTypes = {
  dispatch: PropTypes.func.isRequired,
  location: PropTypes.object.isRequired,
  auth: PropTypes.object.isRequired
};

News.defaultProps = {
  user: null
};

News.contextTypes = {
  router: PropTypes.object.isRequired,
  store: PropTypes.object.isRequired
};

function mapStateToProps({ auth, user }) {
  return { auth, user };
}

export default connect(mapStateToProps)(News);
