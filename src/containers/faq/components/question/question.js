import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";

import renderHTML from "react-render-html";

import "./question.css";

class Question extends Component {
  constructor(props, context) {
    super(props, context);

    this.state = {};
  }

  render() {
    console.log("answe", this.props.answer);
    return (
      <div className="question">
        <h2>{this.props.question}</h2>
        {renderHTML(this.props.answer)}
      </div>
    );
  }
}

Question.propTypes = {
  dispatch: PropTypes.func.isRequired,
  location: PropTypes.object.isRequired,
  auth: PropTypes.object.isRequired
};

Question.contextTypes = {
  router: PropTypes.object.isRequired,
  store: PropTypes.object.isRequired
};

function mapStateToProps({ auth }) {
  return { auth };
}

export default connect(mapStateToProps)(Question);
