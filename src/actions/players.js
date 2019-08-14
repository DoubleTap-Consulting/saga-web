/**
 * Contents
 * 1. Players
 */

import { callApiWithJWT } from "../utils/api";

export const PLAYERS_REQUEST = "PLAYERS_REQUEST";
export const PLAYERS_SUCCESS = "PLAYERS_SUCCESS";
export const PLAYERS_FAILURE = "PLAYERS_FAILURE";

/**
 * Calls the players API.
 * @returns {object} The players object returned by the server.
 */
export function getPlayers(searchText) {
  const config = {
    url: `${
      process.env.REACT_APP_API_DOMAIN
    }/v1/users/search?search=${searchText}`,
    method: "GET",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json"
    }
  };

  return callApiWithJWT(config, playersRequest, playersSuccess, playersFailure);
}

function playersRequest() {
  return {
    type: PLAYERS_REQUEST
  };
}

function playersSuccess(payload) {
  return {
    type: PLAYERS_SUCCESS,
    data: payload.users
  };
}

function playersFailure(error) {
  return {
    type: PLAYERS_FAILURE,
    error
  };
}
