import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

import { trackClick } from "utils/googleAnalytics";

import "./footer.css";

class Footer extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <div className="footer">
        <div className="column">
          <h3>Company</h3>
          <Link to="/about">
            <p id="About" name="Footer" onClick={trackClick}>
              About Us
            </p>
          </Link>
          <Link to="/partners">
            <p id="Partners" name="Footer" onClick={trackClick}>
              Partners
            </p>
          </Link>
        </div>
        <div className="column">
          <h3>Helpful Links</h3>
          <Link to="/contact">
            <p id="Contact" name="Footer" onClick={trackClick}>
              Contact
            </p>
          </Link>
          <Link to="/faq">
            <p id="FAQ" name="Footer" onClick={trackClick}>
              FAQ
            </p>
          </Link>
          <Link to="/privacy">
            <p id="Privacy" name="Footer" onClick={trackClick}>
              Privacy Policy
            </p>
          </Link>
        </div>
      </div>
    );
  }
}

Footer.propTypes = {
  user: PropTypes.shape({
    gamerTag: PropTypes.string
  })
};

Footer.contextTypes = {
  store: PropTypes.object.isRequired,
  router: PropTypes.object.isRequired
};

function mapStateToProps({ auth, user }) {
  return { auth, user };
}

export default connect(mapStateToProps)(Footer);
