import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";

import "./hackerFlag.css";

class Hacker extends Component {
  render() {
    return (
      <span>
        {this.props.hacker && (
          <div className="profile-hacker">
            <h3>
              * This player has been officially accused and confirmed hacking.
              #GG
            </h3>
          </div>
        )}
      </span>
    );
  }
}

Hacker.propTypes = {
  dispatch: PropTypes.func.isRequired
};

function mapStateToProps({ auth, profile: { data: profile } }) {
  return { auth, profile };
}

export default connect(mapStateToProps)(Hacker);
