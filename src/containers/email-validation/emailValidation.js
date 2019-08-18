import React, { Component } from "react";
import PropTypes from "prop-types";

import "./emailValidation.scss";

class EmailValidation extends Component {
  constructor(props) {
    super(props);

    let token = this.props.match.params.token;
    this.setState({
      token
    });
    // validateEmail(token).then(response => {
    //   if (response.validated) {
    //     this.setState({
    //       emailVerified: true,
    //       verifying: false
    //     });
    //   } else {
    //     this.setState({
    //       verificationError: true,
    //       error: response.error
    //     });
    //   }
    // });

    this.state = {
      token: "",
      emailVerified: false,
      verifying: true,
      error: "",
      verificationError: false
    };
  }

  render() {
    return (
      <div className="emailValidation">
        <h1>Email Validation</h1>
        {this.state.verifying && <p>Verifying... be patient</p>}
        {this.state.emailVerified && <p>Email Verified</p>}
      </div>
    );
  }
}

EmailValidation.propTypes = {
  location: PropTypes.object
};

export default EmailValidation;
