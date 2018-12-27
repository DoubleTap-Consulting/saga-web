import Axios from "axios";

const axios = Axios.create({
  baseURL: process.env.REACT_APP_FORTNITE_DOMAIN,
  timeout: 9000,
  headers: {
    Accept: "application/vnd.api+json",
    "Content-Type": "application/json",
    "TRN-Api-Key": process.env.REACT_APP_FORTNITE_KEY
  }
});

export function getPlayer(gamerTag) {
  const config = {
    url: `${process.env.REACT_APP_FORTNITE_DOMAIN}/profile/pc/${gamerTag}`,
    method: "GET"
  };
  return axios
    .request(config)
    .then(res => res.data)
    .catch(error => error);
}

// TODO: Save player accountId upon signup if they select fortnite as their game
// Account ID: A Guid, found in the Get BR Player Stats Endpoint.
export function getLastTenGames(playerId) {
  const config = {
    url: `${
      process.env.REACT_APP_FORTNITE_DOMAIN
    }/profile/account/${playerId}/matches`,
    method: "GET"
  };
  return axios
    .request(config)
    .then(res => {})
    .catch(error => error);
}

// Account ID: A Guid, found in the Get BR Player Stats Endpoint.
export function getLifetimeStats(playerId) {
  const config = {
    url: `${
      process.env.REACT_APP_FORTNITE_DOMAIN
    }/profile/account/${playerId}/matches`,
    method: "GET"
  };
  return axios
    .request(config)
    .then(res => res.data)
    .catch(error => error);
}

// Account ID: A Guid, found in the Get BR Player Stats Endpoint.
export function getSeasonStats(playerId) {
  const config = {
    url: `${
      process.env.REACT_APP_FORTNITE_DOMAIN
    }/profile/account/${playerId}/matches`,
    method: "GET"
  };
  return axios
    .request(config)
    .then(res => res.data)
    .catch(error => error);
}
