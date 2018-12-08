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
            <p>About Us</p>
          </Link>
          <Link to="/partners">
            <p>Partners</p>
          </Link>
        </div>
        <div className="column">
          <h3>Helpful Links</h3>
          <Link to="/contact">
            <p>Contact</p>
          </Link>
          <Link to="/faq">
            <p>FAQ</p>
          </Link>
          <Link to="/privacy">
            <p>Privacy Policy</p>
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
