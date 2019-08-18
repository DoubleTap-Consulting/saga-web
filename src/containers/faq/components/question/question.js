import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";

import renderHTML from "react-render-html";

import "./question.scss";

class Question extends Component {
  constructor(props, context) {
    super(props, context);

    this.state = {};
  }

  render() {
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

function mapStateToProps({ auth }) {
  return { auth };
}

export default connect(mapStateToProps)(Question);
