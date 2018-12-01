import React, { Component } from "react";
import PropTypes from "prop-types";

import "./playerCard.css";

class PlayerCard extends Component {
  constructor() {
    super();

    this.state = {};
  }

  render() {
    return (
      <div className="playerCard">
        <div
          className="playerCard-header"
          style={{
            backgroundImage:
              "url(https://res.cloudinary.com/dj14cmwoz/image/upload/v1491077482/profile-card/images/profile-picture.png)"
          }}
        >
          <div className="playerCard-header-bar">
            <a href="#" className="btn-message">
              <span className="sr-only">Message</span>
            </a>
            <a href="#" className="btn-menu">
              <span className="sr-only">Menu</span>
            </a>
          </div>

          <div className="playerCard-header-slanted-edge">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 200">
              <path className="polygon" d="M-20,200,1000,0V200Z" />
            </svg>
            <a href="#" className="btn-follow">
              <span className="sr-only">Follow</span>
            </a>
          </div>
        </div>

        <div className="playerCard-body">
          <h2 className="name">John Smith</h2>
          <h4 className="job-title">Product Designer</h4>
          <div className="bio">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Dignissimos, aperiam.
          </div>
          <div className="social-accounts">
            <a href="#">
              <img
                src="https://res.cloudinary.com/dj14cmwoz/image/upload/v1491077480/profile-card/images/dribbble.svg"
                alt=""
              />
              <span className="sr-only">Dribbble</span>
            </a>
            <a href="#">
              <img
                src="https://res.cloudinary.com/dj14cmwoz/image/upload/v1491077480/profile-card/images/twitter.svg"
                alt=""
              />
              <span className="sr-only">Twitter</span>
            </a>
            <a href="#">
              <img
                src="https://res.cloudinary.com/dj14cmwoz/image/upload/v1491077480/profile-card/images/instagram.svg"
                alt=""
              />
              <span className="sr-only">Instagram</span>
            </a>
          </div>
        </div>

        <div className="playerCard-footer">
          <div className="stats">
            <div className="stat">
              <span className="label">Following</span>
              <span className="value">56K</span>
            </div>
            <div className="stat">
              <span className="label">Followers</span>
              <span className="value">940</span>
            </div>
            <div className="stat">
              <span className="label">Likes</span>
              <span className="value">320</span>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

PlayerCard.contextTypes = {
  store: PropTypes.object.isRequired,
  router: PropTypes.object.isRequired
};

export default PlayerCard;
