import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import PropTypes from "prop-types";
import { requestPasswordReset } from "actions/password-reset";
// Direct path imports
import envelope from "images/envelope.png";
import "./request.scss";

class Request extends Component {
  static get propTypes() {
    return {
      dispatch: PropTypes.func.isRequired,
      history: PropTypes.object.isRequired
    };
  }

  constructor(props, context) {
    super(props, context);

    this.state = {
      email: "",
      sentRecoveryEmail: false,
      errorDialogOpen: false,
      errorFields: {}
    };
  }

  /**
   * Putting this into an object here to keep the param list short. Should also
   * perform any stripping of empty data or other modifications/final checks on user input
   * here.
   */
  objectifyFormData() {
    const { email } = this.state;
    const formData = {
      email
    };
    return formData;
  }

  updateLocalState = () => {};

  /**
   * Updates the local state of Login Component.
   */
  inputChanged = event => {
    this.updateLocalState(event, this);
  };

  handleEmailSubmit = () => {
    this.props.dispatch(requestPasswordReset(this.state.email)).then(status => {
      if (status.response.status === "success") {
        this.props.history.push({
          pathname: "/passwordreset/sent",
          state: {
            email: this.state.email
          }
        });
      }
    });
  };

  render() {
    return (
      <div className="requestContainer brand-background-dark">
        <div className="requestContainer-parent align-center text-center row">
          <div className="requestContainer-formContainer column">
            <img src={envelope} alt="envelope" />
            <div>
              <h4 className="requestContainer-formContainer-header">
                PASSWORD HELP
              </h4>
              <p className="requestContainer-formContainer-subHeader">
                Enter the email associated with your Saga.GG account, then click
                Continue. We will email you a link to a secret level where you
                can summon a new password.
              </p>
            </div>
            <div className="column">
              <input
                id="email"
                className="requestContainer-input-text brand-input-dark"
                label="Email"
                onBlur={this.inputChanged}
                style={{ width: "300px" }}
              />
              <button
                onClick={this.handleEmailSubmit}
                className="brand-button-neutral"
              >
                Continue
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

function mapStateToProps() {
  return { user: null };
}

export default withRouter(connect(mapStateToProps)(Request));
