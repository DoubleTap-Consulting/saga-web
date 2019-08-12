/**
 * Contents
 * 1. Profile
 */

import { callApiWithJWT } from "../utils/api";

export const PROFILE_REQUEST = "PROFILE_REQUEST";
export const PROFILE_SUCCESS = "PROFILE_SUCCESS";
export const PROFILE_FAILURE = "PROFILE_FAILURE";

/**
 * Calls the profile API.
 * @returns {object} The player object returned by the server.
 */
export function getProfile(gamerTag) {
  const config = {
    url: `${process.env.REACT_APP_API_DOMAIN}/v1/users/${gamerTag}`,
    method: "GET",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json"
    }
  };

  return callApiWithJWT(config, profileRequest, profileSuccess, profileFailure);
}

function profileRequest() {
  return {
    type: PROFILE_REQUEST
  };
}

function profileSuccess(payload) {
  return {
    type: PROFILE_SUCCESS,
    profile: payload
  };
}

function profileFailure(error) {
  return {
    type: PROFILE_FAILURE,
    error
  };
}
