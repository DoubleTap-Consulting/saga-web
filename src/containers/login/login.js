import React, { Component } from "react";
import { connect } from "react-redux";
import { Link, withRouter } from "react-router-dom";
import PropTypes from "prop-types";

import { login } from "../../actions/auth";

import "./login.scss";

class Login extends Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      email: "",
      emailError: "",
      emailTouched: false,
      password: "",
      loggingIn: false
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

  emailTouched = () =>
    this.setState({
      emailTouched: true
    });

  /**
   * Key listener to login on 'enter'
   */
  handleKeyPress = e => {
    if (e.key === "Enter") {
      this.handleLogin();
    }
  };

  /**
   * Handles a login attempt by dispatching the login action.
   */
  handleLogin = () => {
    this.toggleLoggingIn();

    this.props
      .dispatch(login(this.state.email, this.state.password))
      .then(response => {
        this.toggleLoggingIn();
        if (response.type === "LOGIN_SUCCESS") {
          this.props.history.push("/");
        }
      });
  };

  toggleLoggingIn = () =>
    this.setState({
      loggingIn: !this.state.loggingIn
    });

  render() {
    return (
      <div className="login">
        <div className="login-container">
          <h1 className="logo-big">Saga.GG</h1>
          <h1 className="login-heading">Login</h1>
          <input
            id="email"
            className="login-input"
            placeholder="Email"
            value={this.state.email}
            onChange={this.updateEmail}
            autoComplete="email"
            onKeyPress={this.handleKeyPress}
            onBlur={this.emailTouched}
            type="email"
          />
          <input
            id="password"
            className="login-input"
            placeholder="Password"
            autoComplete="password"
            onKeyPress={this.handleKeyPress}
            onChange={this.inputChanged}
            type="password"
          />
          {this.props.auth.loginError && (
            <p className="warning">Incorrect email or password</p>
          )}
          <button
            disabled={this.state.loggingIn}
            className="login-submit"
            label="Login"
            onClick={this.handleLogin}
          >
            Login
          </button>
          <div className="login-textLinks">
            <p className="link">
              <Link to="/signup">Create Account</Link>
            </p>
            <p className="link">
              <Link to="/passwordreset/request">Forgot Password</Link>
            </p>
          </div>
        </div>
      </div>
    );
  }
}

Login.propTypes = {
  dispatch: PropTypes.func.isRequired,
  location: PropTypes.object.isRequired
};

function mapStateToProps({ auth }) {
  return { auth };
}

export default withRouter(connect(mapStateToProps)(Login));
