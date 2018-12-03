import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

import { logout } from "actions/auth";
import { clearUserInfo } from "actions/user";

import "./header.css";

class Header extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  logout = () => {
    this.props.dispatch(logout());
    this.props.dispatch(clearUserInfo());
    this.context.router.history.push("/login");
  };

  render() {
    let onAuth =
      this.props.location.pathname === "/signup" ||
      this.props.location.pathname === "/login";
    return (
      <div className="header" role="navigation">
        <div className="header-navLinks">
          <Link to={"/"}>
            <p className="header-navLinks-text">Saga.gg</p>
          </Link>
          {this.props.auth.profile && (
            <div className="header-navLinks-row">
              <Link to={"/players"}>
                <p className="header-navLinks-text">Players</p>
              </Link>
              <Link to={"/tournaments"}>
                <p className="header-navLinks-text">Tournaments</p>
              </Link>
            </div>
          )}
        </div>
        <div className="header-authActions">
          {this.props.auth.profile ? (
            <div className="header-navLinks-row">
              <Link to={"/profile"}>
                <p className="header-navLinks-text">My Profile</p>
              </Link>
              <p className="header-navLinks-text" onClick={this.logout}>
                Logout
              </p>
            </div>
          ) : (
            <div className="header-navLinks-row">
              {!onAuth && (
                <Link to={"/login"}>
                  <p className="header-navLinks-login ">Login</p>
                </Link>
              )}
              {!onAuth && (
                <Link to={"/signup"}>
                  <p className="header-navLinks-signup">Signup</p>
                </Link>
              )}
            </div>
          )}
        </div>
      </div>
    );
  }
}

Header.contextTypes = {
  store: PropTypes.object.isRequired,
  router: PropTypes.object.isRequired
};

function mapStateToProps({ auth }) {
  return { auth };
}

export default connect(mapStateToProps)(Header);
