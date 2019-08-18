import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

import { checkGamerTag, registerUser } from "utils/signup";

import _ from "lodash";

import "./signup.scss";

class Signup extends Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      email: "",
      emailError: "",
      emailTouched: false,
      password: "",
      gamerTag: "",
      gamerTagTaken: false,
      signingUp: false,
      emailTakenError: false
    };
  }

  /**
   * Updates the local state of Login Component.
   */
  inputChanged = event => {
    this.setState({
      [event.target.id]: event.target.value
    });
  };

  isValidEmail = () => {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/; //eslint-disable-line
    return re.test(this.state.email);
  };

  validateEmail = () => {
    if (this.state.emailTouched && !this.isValidEmail()) {
      this.setState({
        emailError: "Should be a valid email (valid@email.com)"
      });
    } else {
      this.setState({
        emailError: ""
      });
    }
  };

  updateEmail = event => {
    this.setState(
      {
        email: event.target.value
      },
      this.validateEmail
    );
  };

  checkGamerTagTakenDebounced = _.debounce(() => {
    checkGamerTag(this.state.gamerTag).then(status => {
      this.setState({
        gamerTagTaken: status
      });
    });
  }, 500);

  updateGamerTag = event => {
    let newGamerTag = event.target.value;
    this.setState({
      gamerTag: newGamerTag
    });

    this.checkGamerTagTakenDebounced();
  };

  emailTouched = () => {
    if (this.state.emailTouched) {
      return;
    }
    this.setState({
      emailTouched: true
    });
  };

  /**
   * Key listener to login on 'enter'
   */
  handleKeyPress = e => {
    if (e.key === "Enter") {
      this.handleSignup();
    }
  };

  /**
   * Handles a login attempt by dispatching the login action.
   */
  handleSignup = () => {
    this.toggleSigningUp();

    registerUser(
      this.state.email,
      this.state.password,
      this.state.gamerTag
    ).then(response => {
      if (response.status === 409) {
        this.setState({
          emailError: response.data
        });
        return;
      }
      this.props.history.push("/confirm-email");
    });
  };

  toggleSigningUp = () =>
    this.setState({
      signingUp: !this.state.signingUp
    });

  render() {
    return (
      <div className="signup" autoComplete="off">
        <div className="signup-container">
          <h1 className="logo-big">Saga.GG</h1>
          <h1 className="signup-heading">Register</h1>
          <input
            id="email"
            className="signup-input"
            placeholder="Email"
            value={this.state.email}
            onChange={this.updateEmail}
            onKeyPress={this.handleKeyPress}
            onBlur={this.emailTouched}
            autoComplete="email"
            type="email"
          />
          {this.state.emailError && (
            <p className="warning">{this.state.emailError}</p>
          )}
          <input
            id="gamerTag"
            className={`signup-input ${
              this.state.gamerTagTaken ? "signup-input-error" : ""
            }`}
            placeholder="Gamer Tag"
            autoComplete="gamerTag"
            value={this.state.gamerTag}
            onChange={this.updateGamerTag}
            onKeyPress={this.handleKeyPress}
            onBlur={this.emailTouched}
            type="gamerTag"
          />
          {this.state.gamerTagTaken && (
            <p className="signup-error">GamerTag Taken</p>
          )}
          <input
            id="password"
            className="signup-input"
            autoComplete="password"
            placeholder="Password"
            onKeyPress={this.handleKeyPress}
            onChange={this.inputChanged}
            type="password"
          />
          <button
            disabled={this.state.signingUp}
            className="signup-submit"
            label="Signup"
            onClick={this.handleSignup}
          >
            Create Account
          </button>
          <div className="signup-textLinks">
            <p className="link">
              <Link to="/login">Login</Link>
            </p>
          </div>
        </div>
      </div>
    );
  }
}

Signup.propTypes = {
  dispatch: PropTypes.func.isRequired,
  location: PropTypes.object.isRequired,
  auth: PropTypes.object.isRequired
};

Signup.defaultProps = {
  user: null
};

function mapStateToProps({ auth }) {
  return { auth };
}

export default connect(mapStateToProps)(Signup);
