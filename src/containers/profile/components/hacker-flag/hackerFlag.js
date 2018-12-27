import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";

import "./hackerFlag.css";

class Hacker extends Component {
  constructor(props, context) {
    super(props, context);

    this.state = {};
  }

  render() {
    return (
      this.props.hacker && (
        <div className="profile-hacker">
          <h3>
            * This player has been officially accused and confirmed hacking. #GG
          </h3>
        </div>
      )
    );
  }
}

Hacker.propTypes = {
  dispatch: PropTypes.func.isRequired
};

Hacker.contextTypes = {
  router: PropTypes.object.isRequired,
  store: PropTypes.object.isRequired
};

function mapStateToProps({ auth }) {
  return { auth };
}

export default connect(mapStateToProps)(Hacker);
