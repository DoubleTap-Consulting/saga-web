import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";

import Question from "./components/question/question";

import "./faq.css";

class Faq extends Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      questions: [
        {
          index: 0,
          question: "How do I report someone acting as me or another person?",
          answer: `<p className="question-answer">- Please get in touch with us on <a
              href="www.twitter.com/sagaHQ_GG"
              target="_blank"
              rel="noopener noreferrer"
              className="hyperlink"
            >
              Twitter
            </a> or <a
            href="https://discord.gg/9Qa94Vw"
            target="_blank"
            rel="noopener noreferrer"
            className="hyperlink"
          >
            Discord
          </a>
          and we'll have the issue fixed immediately.</p>`
        },
        {
          index: 1,
          question: "How do I suggest new features?",
          answer: `<p className="question-answer">- We'd love to hear what features you think would be best to add to
              Saga.GG. We greatly value feedback from our users. Please get in
              touch with us on <a
              href="http://www.twitter.com/sagaHQ_GG"
              target="_blank"
              rel="noopener noreferrer"
              className="hyperlink"
            >
              Twitter
            </a> or <a
            href="https://discord.gg/9Qa94Vw"
            target="_blank"
            rel="noopener noreferrer"
            className="hyperlink"
          >
            Discord
          </a>.</p>`
        },
        {
          index: 2,
          question: "Where can I provide feedback on the design?",
          answer: `<p className="question-answer">- Please get in touch with us on <a
              href="www.twitter.com/sagaHQ_GG"
              target="_blank"
              rel="noopener noreferrer"
              className="hyperlink"
            >
              Twitter
            </a> or <a
            href="https://discord.gg/9Qa94Vw"
            target="_blank"
            rel="noopener noreferrer"
            className="hyperlink"
          >
            Discord
          </a>
          and let us know what you think we can improve and how! :) We love to
          hear feedback on how we can improve the site for you.</p>`
        },
        {
          index: 3,
          question: "What if I don't see my game in the games list?",
          answer: `<p className="question-answer">- Please get in touch with us on <a
              href="www.twitter.com/sagaHQ_GG"
              target="_blank"
              rel="noopener noreferrer"
              className="hyperlink"
            >
              Twitter
            </a> or <a
            href="https://discord.gg/9Qa94Vw"
            target="_blank"
            rel="noopener noreferrer"
            className="hyperlink"
          >
            Discord
          </a>
          and let us know that we're letting you down, and that we should add your game.</p>`
        }
      ]
    };
  }

  render() {
    return (
      <div className="faq">
        <div className="faq-header brand-background-header">
          <h1>FAQ</h1>
        </div>
        <div className="faq-container column">
          {this.state.questions.map(question => (
            <Question
              question={question.question}
              answer={question.answer}
              key={`questionAndAnswer${question.index}`}
            />
          ))}
        </div>
      </div>
    );
  }
}

Faq.propTypes = {
  dispatch: PropTypes.func.isRequired,
  location: PropTypes.object.isRequired,
  auth: PropTypes.object.isRequired
};

function mapStateToProps({ auth }) {
  return { auth };
}

export default connect(mapStateToProps)(Faq);
