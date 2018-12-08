import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";

import "./faq.css";

class Faq extends Component {
  constructor(props, context) {
    super(props, context);

    this.state = {};
  }

  render() {
    return (
      <div className="faq">
        <div className="faq-header brand-background-header">
          <h1>FAQ</h1>
        </div>
        <div className="faq-container column">
          <h2 className="faq-container-question">
            How do I report someone acting as me or another person?
          </h2>
          <p className="faq-container-answer">
            - Please get in touch with us on{" "}
            <a
              href="www.twitter.com/sagaHQ_GG"
              target="_blank"
              rel="noopener noreferrer"
              className="hyperlink"
            >
              Twitter
            </a>{" "}
            or{" "}
            <a
              href="https://discord.gg/9Qa94Vw"
              target="_blank"
              rel="noopener noreferrer"
              className="hyperlink"
            >
              Discord
            </a>
            and we'll have the issue fixed immediately.
          </p>
          <h2>How do I suggest new features?</h2>
          <p className="faq-container-answer">
            - We'd love to hear what features you think would be best to add to
            Saga.GG. We greatly value feedback from our users. Please get in
            touch with us on{" "}
            <a
              href="www.twitter.com/sagaHQ_GG"
              target="_blank"
              rel="noopener noreferrer"
              className="hyperlink"
            >
              Twitter
            </a>{" "}
            or{" "}
            <a
              href="https://discord.gg/9Qa94Vw"
              target="_blank"
              rel="noopener noreferrer"
              className="hyperlink"
            >
              Discord
            </a>
            .
          </p>
          <h2>Where can I provide feedback on the design?</h2>
          <p className="faq-container-answer">
            - Please get in touch with us on{" "}
            <a
              href="www.twitter.com/sagaHQ_GG"
              target="_blank"
              rel="noopener noreferrer"
              className="hyperlink"
            >
              Twitter
            </a>{" "}
            or{" "}
            <a
              href="https://discord.gg/9Qa94Vw"
              target="_blank"
              rel="noopener noreferrer"
              className="hyperlink"
            >
              Discord
            </a>{" "}
            and let us know what you think we can improve and how! :) We love to
            hear feedback on how we can improve the site for you. .
          </p>
        </div>
      </div>
    );
  }
}

Faq.propTypes = {
  dispatch: PropTypes.func.isRequired,
  location: PropTypes.object.isRequired,
  auth: PropTypes.object.isRequired
};

Faq.contextTypes = {
  router: PropTypes.object.isRequired,
  store: PropTypes.object.isRequired
};

function mapStateToProps({ auth }) {
  return { auth };
}

export default connect(mapStateToProps)(Faq);
