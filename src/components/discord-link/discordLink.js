import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";

import "./discordLink.css";

class DiscordLink extends Component {
  constructor(props, context) {
    super(props, context);

    this.state = {};
  }

  render() {
    return (
      <a
        href="https://discord.gg/9Qa94Vw"
        target="_blank"
        rel="noopener noreferrer"
        className="hyperlink"
      >
        Discord
      </a>
    );
  }
}

DiscordLink.propTypes = {
  dispatch: PropTypes.func.isRequired,
  location: PropTypes.object.isRequired,
  auth: PropTypes.object.isRequired
};

DiscordLink.contextTypes = {
  router: PropTypes.object.isRequired,
  store: PropTypes.object.isRequired
};

function mapStateToProps({ auth }) {
  return { auth };
}

export default connect(mapStateToProps)(DiscordLink);
