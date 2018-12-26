/**
 * Contents
 * 1. Leagues
 */

import { callApi } from "../utils/api";

export const LEAGUES_REQUEST = "LEAGUES_REQUEST";
export const LEAGUES_SUCCESS = "LEAGUES_SUCCESS";
export const LEAGUES_FAILURE = "LEAGUES_FAILURE";

/**
 * Calls the leagues API.
 * @returns {object} The leagues object returned by the server.
 */
export function getLeagues(email, password) {
  const config = {
    url: `${process.env.REACT_APP_API_DOMAIN}/v1/leagues`,
    method: "get",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json"
    }
  };

  return callApi(config, leaguesRequest(email), leaguesSuccess, leaguesFailure);
}

function leaguesRequest() {
  return {
    type: LEAGUES_REQUEST
  };
}

function leaguesSuccess(payload) {
  if (payload.leagues) {
    return {
      type: LEAGUES_SUCCESS,
      leagues: payload.leagues
    };
  }
  return {
    type: LEAGUES_FAILURE,
    error: payload.error
  };
}

function leaguesFailure(error) {
  if (error) {
    return {
      type: LEAGUES_FAILURE,
      error
    };
  }
  return {
    type: LEAGUES_FAILURE,
    error
  };
}
