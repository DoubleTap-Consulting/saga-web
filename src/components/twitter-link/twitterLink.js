import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";

import "./twitterLink.css";

class TwitterLink extends Component {
  constructor(props, context) {
    super(props, context);

    this.state = {};
  }

  render() {
    return (
      <a
        href="www.twitter.com/sagaHQ_GG"
        target="_blank"
        rel="noopener noreferrer"
        className="hyperlink"
      >
        Twitter
      </a>
    );
  }
}

TwitterLink.propTypes = {
  dispatch: PropTypes.func.isRequired,
  location: PropTypes.object.isRequired,
  auth: PropTypes.object.isRequired
};

TwitterLink.contextTypes = {
  router: PropTypes.object.isRequired,
  store: PropTypes.object.isRequired
};

function mapStateToProps({ auth }) {
  return { auth };
}

export default connect(mapStateToProps)(TwitterLink);
