import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";

import { getUserInfo } from "actions/user";

import "./profile.css";

class Profile extends Component {
  constructor(props, context) {
    super(props, context);

    this.props.dispatch(getUserInfo(this.props.auth.profile.id));

    this.state = {};
  }

  render() {
    return (
      <div className="profile">
        <h1>Profile</h1>
      </div>
    );
  }
}

Profile.propTypes = {
  dispatch: PropTypes.func.isRequired,
  location: PropTypes.object.isRequired,
  auth: PropTypes.object.isRequired
};

Profile.defaultProps = {
  user: null
};

Profile.contextTypes = {
  router: PropTypes.object.isRequired,
  store: PropTypes.object.isRequired
};

function mapStateToProps({ auth, user }) {
  return { auth, user };
}

export default connect(mapStateToProps)(Profile);
