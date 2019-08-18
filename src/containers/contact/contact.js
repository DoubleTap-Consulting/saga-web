import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";

import "./contact.scss";

class Contact extends Component {
  constructor(props, context) {
    super(props, context);

    this.state = {};
  }

  render() {
    return (
      <div className="contact">
        <div className="contact-header brand-background-header">
          <h1>Contact</h1>
        </div>
        <div className="contact-container">
          <h1>Need to get into contact with us?</h1>
          <h4>
            Please either tweet us at
            <a
              href="www.twitter.com/sagaHQ_GG"
              target="_blank"
              rel="noopener noreferrer"
              className="hyperlink"
            >
              {" "}
              @SagaHQ_GG
            </a>{" "}
            or join our{" "}
            {/* TODO: if logged in user, give one link. If not signed in, give other link */}
            <a
              href="https://discord.gg/9Qa94Vw"
              target="_blank"
              rel="noopener noreferrer"
              className="hyperlink"
            >
              discord server
            </a>
          </h4>
        </div>
      </div>
    );
  }
}

Contact.propTypes = {
  dispatch: PropTypes.func.isRequired,
  location: PropTypes.object.isRequired,
  auth: PropTypes.object.isRequired
};

function mapStateToProps({ auth }) {
  return { auth };
}

export default connect(mapStateToProps)(Contact);
