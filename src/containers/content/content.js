import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";

import ContentCard from "components/content-card/contentCard";

import "./content.css";

class Content extends Component {
  constructor(props, context) {
    super(props, context);

    this.content = [
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
      <div className="content">
        <div className="content-header brand-background-header">
          <h1>Content</h1>
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
