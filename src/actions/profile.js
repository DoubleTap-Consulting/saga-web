/**
 * Contents
 * 1. Profile
 */

import { callApiWithJWT } from "../utils/api";

export const PROFILE_REQUEST = "PROFILE_REQUEST";
export const PROFILE_SUCCESS = "PROFILE_SUCCESS";
export const PROFILE_FAILURE = "PROFILE_FAILURE";
export const PROFILE_UPDATE_REQUEST = "PROFILE_UPDATE_REQUEST";
export const PROFILE_UPDATE_SUCCESS = "PROFILE_UPDATE_SUCCESS";
export const PROFILE_UPDATE_FAILURE = "PROFILE_UPDATE_FAILURE";
export const PROFILE_UPDATE_INPUT = "PROFILE_UPDATE_INPUT";

/**
 * Gets the player profile.
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

/**
 * Updates player profile
 * @returns {object} The player object returned by the server.
 */
export function updateProfile(id, data) {
  const config = {
    url: `${process.env.REACT_APP_API_DOMAIN}/v1/users/${id}`,
    method: "PUT",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json"
    },
    data
  };

  return callApiWithJWT(
    config,
    updateProfileRequest,
    updateProfileSuccess,
    updateProfileFailure
  );
}

export function updateProfileData(dataToUpdate) {
  return {
    type: PROFILE_UPDATE_INPUT,
    dataToUpdate
  };
}

function updateProfileRequest() {
  return {
    type: PROFILE_UPDATE_REQUEST
  };
}

function updateProfileSuccess(payload) {
  return {
    type: PROFILE_UPDATE_SUCCESS,
    profile: payload
  };
}

function updateProfileFailure(error) {
  return {
    type: PROFILE_UPDATE_FAILURE,
    error
  };
}
