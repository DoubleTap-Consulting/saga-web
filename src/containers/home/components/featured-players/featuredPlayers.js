import React, { Component } from "react";
import PropTypes from "prop-types";

import PlayerCard from "components/player-card/playerCard";

import "./featuredPlayers.css";

class FeaturedPlayers extends Component {
  constructor() {
    super();

    this.players = [
      {
        gamerTag: "Sultyn",
        id: 1,
        role: "Fragger",
        team: "Saga",
        twitterLink: "http://www.twitter.com/mike_mitrakos",
        instagramLink: "http://www.instagram.com/michael_mitrakos",
        twitchLink: "http://www.twitch.tv/sultyn",
        featured: {
          tournament: "Hong Kong Invitational",
          stats: {
            games: 5,
            kd: 6.4,
            adr: 689
          }
        }
      },
      {
        gamerTag: "Bulba",
        id: 2,
        role: "IGL",
        team: "Saga",
        twitterLink: "http://www.twitter.com/bulba",
        instagramLink: "http://www.instagram.com/bulba",
        twitchLink: "http://www.twitch.tv/bulba",
        featured: {
          tournament: "GLL Season 2 Week 3",
          stats: {
            games: 9,
            kd: 4.3,
            adr: 489
          }
        }
      },
      {
        gamerTag: "BigT",
        id: 3,
        role: "Sniper",
        team: "TwistedSin",
        twitterLink: "http://www.twitter.com/bigt",
        instagramLink: "http://www.instagram.com/bigt",
        twitchLink: "http://www.twitch.tv/thebigt22",
        featured: {
          tournament: "Auzom Season 1 Finals",
          stats: {
            games: 13,
            kd: 3.3,
            adr: 389
          }
        }
      }
    ];

    this.state = {};
  }

  render() {
    return (
      <div className="featuredPlayers">
        <h1 className="heading-2">Featured Players</h1>
        <div className="featuredPlayers-cards">
          {this.players.map(player => (
            <PlayerCard
              key={`featuredPlayer${player.id}`}
              player={player}
              showStatLine
            />
          ))}
        </div>
      </div>
    );
  }
}

FeaturedPlayers.contextTypes = {
  store: PropTypes.object.isRequired,
  router: PropTypes.object.isRequired
};

export default FeaturedPlayers;
