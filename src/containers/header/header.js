import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

import ClickAwayListener from "@material-ui/core/ClickAwayListener";
import Grow from "@material-ui/core/Grow";
import Paper from "@material-ui/core/Paper";
import Popper from "@material-ui/core/Popper";
import MenuItem from "@material-ui/core/MenuItem";
import MenuList from "@material-ui/core/MenuList";
import Icon from "@material-ui/core/Icon";
import Divider from "@material-ui/core/Divider";

import { logout } from "actions/auth";

import "./header.css";

class Header extends Component {
  constructor(props) {
    super(props);

    this.state = {
      mobileMenuOpen: false
    };
  }

  handleToggle = event => {
    this.setState(state => ({ mobileMenuOpen: !state.mobileMenuOpen }));
    if (event.target.id) {
      this.context.router.history.push(event.target.id);
    }
  };

  logout = () => {
    this.props.dispatch(logout());
    this.context.router.history.push("/login");
  };

  render() {
    let onAuth =
      this.props.location.pathname === "/signup" ||
      this.props.location.pathname === "/login";
    const { mobileMenuOpen } = this.state;
    var styles = {
      dropDown: {
        zIndex: "9999"
      }
    };
    return (
      <div className="header" role="navigation">
        <div className="header-navLinks header-desktopMenu">
          <Link to={"/"}>
            <p className="logo-small">Saga.GG</p>
          </Link>
          {this.props.auth.user && (
            <div className="header-navLinks-row">
              <Link to={"/users"}>
                <p className="header-navLinks-text" id="Players">
                  Players
                </p>
              </Link>
              <Link to={"/tournaments"}>
                <p className="header-navLinks-text" id="Tournaments">
                  Tournaments
                </p>
              </Link>
              <Link to={"/leagues"}>
                <p className="header-navLinks-text" id="Leagues">
                  Leagues
                </p>
              </Link>
              <Link to={"/content"}>
                <p className="header-navLinks-text" id="Content">
                  Curated Content
                </p>
              </Link>
              <Link to={"/marketplace"}>
                <p className="header-navLinks-text" id="Marketplace">
                  Marketplace
                </p>
              </Link>
            </div>
          )}
        </div>
        <div className="header-authActions header-desktopMenu">
          {this.props.auth.user ? (
            <div className="header-navLinks-row">
              <Link to={`/${this.props.auth.user.gamerTag}`}>
                <p className="header-navLinks-text" id="Profile">
                  My Profile
                </p>
              </Link>
              <p className="header-navLinks-text" onClick={this.logout}>
                Logout
              </p>
            </div>
          ) : (
            <div className="header-navLinks-row">
              <Link to={"/login"}>
                <p className="header-navLinks-login" id="Login">
                  Login
                </p>
              </Link>
              <Link to={"/signup"}>
                <p className="header-navLinks-signup" id="Signup">
                  Signup
                </p>
              </Link>
            </div>
          )}
        </div>
        <div className="header-mobileMenu">
          <Icon
            className="profile-container-card-header-icon"
            aria-owns={mobileMenuOpen ? "menu-list-grow" : undefined}
            aria-haspopup="true"
            onClick={this.handleToggle}
            style={{ cursor: "pointer" }}
            fontSize="large"
          >
            menu
          </Icon>
          <Popper
            open={mobileMenuOpen}
            anchorEl={this.anchorEl}
            transition
            disablePortal
          >
            {({ TransitionProps, placement }) => (
              <Grow
                {...TransitionProps}
                id="menu-list-grow"
                style={{
                  transformOrigin:
                    placement === "bottom" ? "center top" : "center bottom"
                }}
              >
                <Paper>
                  <ClickAwayListener onClickAway={this.handleToggle}>
                    <MenuList style={styles}>
                      <MenuItem
                        onClick={this.handleToggle}
                        id="/"
                        className="header-navItem"
                      >
                        Home
                      </MenuItem>
                      {this.props.auth.user && (
                        <span>
                          <MenuItem onClick={this.handleToggle} id="/players">
                            Players
                          </MenuItem>
                          <MenuItem
                            onClick={this.handleToggle}
                            id="/tournaments"
                          >
                            Tournaments
                          </MenuItem>
                          <MenuItem onClick={this.handleToggle} id="/leagues">
                            Leagues
                          </MenuItem>
                          <MenuItem onClick={this.handleToggle} id="/content">
                            Curated Content
                          </MenuItem>
                          <MenuItem
                            onClick={this.handleToggle}
                            id="/marketplace"
                          >
                            Marketplace
                          </MenuItem>
                        </span>
                      )}
                      <Divider />
                      {this.props.auth.user ? (
                        <span>
                          {/* `/${this.props.auth.user.gamerTag}` */}
                          <MenuItem onClick={this.handleToggle} id="/profile">
                            Profile
                          </MenuItem>
                          <MenuItem onClick={this.logout}>Logout</MenuItem>
                        </span>
                      ) : (
                        <span>
                          <MenuItem onClick={this.handleToggle} id="/login">
                            Login
                          </MenuItem>
                          <MenuItem onClick={this.handleToggle} id="/signup">
                            Signup
                          </MenuItem>
                        </span>
                      )}
                    </MenuList>
                  </ClickAwayListener>
                </Paper>
              </Grow>
            )}
          </Popper>
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
