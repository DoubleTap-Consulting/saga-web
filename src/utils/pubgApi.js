import Axios from "axios";

const axios = Axios.create({
  baseURL: process.env.REACT_APP_PUBG_DOMAIN,
  timeout: 9000,
  headers: {
    Accept: "application/vnd.api+json",
    "Content-Type": "application/json",
    Authorization: `Bearer ${process.env.REACT_APP_PUBG_KEY}`
  }
});

export function getPlayerId(playerName) {
  const config = {
    url: `${
      process.env.REACT_APP_PUBG_DOMAIN
    }/shards/steam/players/${playerName}/seasons/lifetime`,
    method: "GET"
  };
  return axios
    .request(config)
    .then(res => res.data.id)
    .catch(error => error);
}

export function getPlayerGames(playerId) {
  const config = {
    url: `${
      process.env.REACT_APP_PUBG_DOMAIN
    }/shards/steam/players/${playerId}`,
    method: "GET"
  };
  return axios
    .request(config)
    .then(res => res.data.data.relationships.matches.data)
    .catch(error => error);
}

export function getLastTenGames(playerId) {
  const config = {
    url: `${
      process.env.REACT_APP_PUBG_DOMAIN
    }/shards/steam/players/${playerId}`,
    method: "GET"
  };
  return axios
    .request(config)
    .then(res => {
      // res.data.data.relationships.matches.data.slice(0, 10)
      let gamePromises = [];
      for (let i = 0; i < 10; i++) {
        gamePromises.push(
          new Promise(function(resolve, reject) {
            const config = {
              url: `${process.env.REACT_APP_PUBG_DOMAIN}/shards/steam/matches/${
                res.data.data.relationships.matches.data[i].id
              }`,
              method: "GET"
            };
            return axios.request(config).then(res => {
              // TODO: to return the player's stats, need to loop through res.data.included, then search for item.id that equals to our current player
              resolve(res.data);
            });
          })
        );
      }
      Promise.all(gamePromises).then(games => {
        console.log("games!", games);
        return games;
      });
    })
    .catch(error => error);
}

export function getLeaderboard(gameMode) {
  const config = {
    url: `${process.env.REACT_APP_PUBG_DOMAIN}/leaderboards/${gameMode}`,
    method: "GET"
  };
  return axios
    .request(config)
    .then(res => res.data.data)
    .catch(error => error);
}

export function getLifetimeStats(playerId) {
  const config = {
    url: `${
      process.env.REACT_APP_PUBG_DOMAIN
    }/shards/steam/players/${playerId}/seasons/lifetime`,
    method: "GET"
  };
  return axios
    .request(config)
    .then(res => res.data.data.attributes.gameModeStats)
    .catch(error => error);
}

// TODO: put this into action to save seasons in redux then cache
export function getSeasons() {
  const config = {
    url: `${process.env.REACT_APP_PUBG_DOMAIN}/shards/steam/seasons`,
    method: "GET"
  };
  return axios
    .request(config)
    .then(res => res.data.data)
    .catch(error => error);
}

export function getSeasonStats(playerId, seasonId) {
  const config = {
    url: `${
      process.env.REACT_APP_PUBG_DOMAIN
    }/shards/steam/players/${playerId}/seasons/${seasonId}`,
    method: "GET"
  };
  return axios
    .request(config)
    .then(res => res.data.data.attributes.gameModeStats)
    .catch(error => error);
}
