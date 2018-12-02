import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";

import "./article.css";

class Article extends Component {
  constructor(props, context) {
    super(props, context);

    console.log("this", this.props);
    // TODO: fix articleId param in props so I can grab article info with ID

    this.article = {
      title: "Article Title",
      description: "This is my faovrite article. <br> Hi there!"
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
          <p>{this.article.description}</p>
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
