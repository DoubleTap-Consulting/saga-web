/**
 * Contents
 * 1. Tournaments
 */

import { callApi } from "../utils/api";

export const TOURNAMENTS_REQUEST = "TOURNAMENTS_REQUEST";
export const TOURNAMENTS_SUCCESS = "TOURNAMENTS_SUCCESS";
export const TOURNAMENTS_FAILURE = "TOURNAMENTS_FAILURE";

/**
 * Calls the tournaments API.
 * @returns {object} The tournaments object returned by the server.
 */
export function getTournaments(email, password) {
  const config = {
    url: `${process.env.REACT_APP_API_DOMAIN}/v1/tournaments`,
    method: "get",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json"
    }
  };

  return callApi(
    config,
    tournamentsRequest(email),
    tournamentsSuccess,
    tournamentsFailure
  );
}

function tournamentsRequest() {
  return {
    type: TOURNAMENTS_REQUEST
  };
}

function tournamentsSuccess(payload) {
  if (payload.tournaments) {
    return {
      type: TOURNAMENTS_SUCCESS,
      tournaments: payload.tournaments
    };
  }
  return {
    type: TOURNAMENTS_FAILURE,
    error: payload.error
  };
}

function tournamentsFailure(error) {
  if (error) {
    return {
      type: TOURNAMENTS_FAILURE,
      error
    };
  }
  return {
    type: TOURNAMENTS_FAILURE,
    error
  };
}
