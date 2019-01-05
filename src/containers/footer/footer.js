import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

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
            <p id="About">About Us</p>
          </Link>
          <Link to="/partners">
            <p id="Partners">Partners</p>
          </Link>
        </div>
        <div className="column">
          <h3>Helpful Links</h3>
          <Link to="/contact">
            <p id="Contact">Contact</p>
          </Link>
          <Link to="/faq">
            <p id="FAQ">FAQ</p>
          </Link>
          <Link to="/privacy">
            <p id="Privacy">Privacy Policy</p>
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
