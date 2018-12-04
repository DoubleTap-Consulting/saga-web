import React, { Component } from "react";
import { connect } from "react-redux";
import FontAwesome from "react-fontawesome";
import { isSafari } from "utils/browserDetector";
import PropTypes from "prop-types";
import queryString from "query-string";
import { submitPasswordReset } from "actions/password-reset";
// Direct path imports
import key from "images/key.png";
import "./submit-password.css";

class SubmitPassword extends Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      password: "",
      readonly: true,
      invalidTokenError: false,
      passwordTypeValidation: false,
      passwordLengthValidation: false
    };
  }

  /**
   * Putting this into an object here to keep the param list short. Should also
   * perform any stripping of empty data or other modifications/final checks on user input
   * here.
   */
  objectifyFormData() {
    const { password } = this.state;
    const formData = {
      password
    };
    return formData;
  }

  updateLocalState = event => {
    this.setState({
      password: event.target.value
    });
  };

  /**
   * Updates the local state of Login Component.
   */
  inputChanged = event => {
    this.updateLocalState(event, this);
    const password = event.target.value;
    const uppercaseRegex = password.match(/[A-Z]/g);
    const lowercaseRegex = password.match(/[a-z]/g);
    const symbolRegex = password.match(/[!@#$%^&*()]/g);
    const numberRegex = password.match(/[0-9]/g);

    if (password.length >= 8) {
      this.setState({
        passwordLengthValidation: true
      });
    } else {
      this.setState({
        passwordLengthValidation: false
      });
    }

    if (
      uppercaseRegex === null ||
      lowercaseRegex === null ||
      (symbolRegex === null && numberRegex === null)
    ) {
      this.setState({
        passwordTypeValidation: false
      });
      return;
    }
    this.setState({
      passwordTypeValidation: true
    });
  };

  handlePasswordSubmit = () => {
    const parsed = queryString.parse(this.props.location.search);

    if (
      this.state.passwordTypeValidation === false ||
      this.state.passwordLengthValidation === false
    ) {
      return;
    }

    this.props
      .dispatch(submitPasswordReset(this.state.password, parsed.t))
      .then(status => {
        if (status.response.status === "success") {
          this.props.history.push("/login");
        } else {
          this.setState({
            invalidTokenError: true
          });
        }
      });
  };

  render() {
    return (
      <div className="column submitPasswordContainer brand-background-dark">
        <div className="submitPasswordContainer-formContainer column">
          <img src={key} alt="key" />
          <h1 className="submitPasswordContainer-formContainer-header">
            RESET PASSWORD
          </h1>
          <input
            id="password"
            className="brand-input-dark"
            label="New Password"
            type="password"
            onChange={this.inputChanged}
            readOnly={this.state.readonly}
            onFocus={() => {
              this.setState({
                readonly: false
              });
            }}
          />
          <div className="submitPasswordContainer-formContainer-password-validators row">
            <div
              className="column submitPasswordContainer-formContainer-password-validators-container"
              style={isSafari() ? { marginTop: "20px" } : {}}
            >
              <div className="row">
                <FontAwesome
                  className={
                    this.state.passwordLengthValidation
                      ? "color-positive icon"
                      : "color-warning icon"
                  }
                  name={
                    this.state.passwordLengthValidation
                      ? "check-circle"
                      : "times-circle"
                  }
                  style={{ fontSize: "12px" }}
                />
                <p className="submitPasswordContainer-formContainer-password-validators-container-requirements">
                  {" "}
                  Length 8+ characters
                </p>
              </div>
              <div className="row">
                <FontAwesome
                  className={
                    this.state.passwordTypeValidation
                      ? "color-positive icon"
                      : "color-warning icon"
                  }
                  name={
                    this.state.passwordTypeValidation
                      ? "check-circle"
                      : "times-circle"
                  }
                  style={{ fontSize: "12px" }}
                />
                <p className="submitPasswordContainer-formContainer-password-validators-container-requirements">
                  {" "}
                  Upper & lower + numeric or special character
                </p>
              </div>
            </div>
          </div>
          {this.state.invalidTokenError && (
            <p className="color-warning">
              The password reset link you are using is no longer valid. Please
              request a new one.
            </p>
          )}
          <button
            className={`submitPasswordContainer-formContainer-submitButton brand-button-neutral ${this
              .state.passwordTypeValidation &&
              this.state.passwordLengthValidation &&
              "submitPasswordContainer-formContainer-submitButton-show"}`}
            onClick={this.handlePasswordSubmit}
          >
            Submit
          </button>
        </div>
      </div>
    );
  }
}

SubmitPassword.propTypes = {
  dispatch: PropTypes.func.isRequired,
  location: PropTypes.shape({
    pathname: PropTypes.string.isRequired,
    search: PropTypes.string
  }),
  history: PropTypes.object.isRequired
};

function mapStateToProps() {
  return { user: null };
}

export default connect(mapStateToProps)(SubmitPassword);
