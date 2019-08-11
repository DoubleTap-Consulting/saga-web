/**
 * Contents
 * 1. Login
 * 2. Registration
 * 3. Email Confirmed
 * 4. Save User to Store
 */

import {
  callApi,
  callApiWithJWT,
  decodeUserProfile,
  removeTokens,
  setAccessToken
} from "../utils/api";

export const LOGIN_REQUEST = "LOGIN_REQUEST";
export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
export const LOGIN_FAILURE = "LOGIN_FAILURE";
export const LOGOUT_REQUEST = "LOGOUT_REQUEST";
export const LOGOUT_SUCCESS = "LOGOUT_SUCCESS";
export const LOGOUT_FAILURE = "LOGOUT_FAILURE";
export const REGISTER_REQUEST = "REGISTER_REQUEST";
export const REGISTER_SUCCESS = "REGISTER_SUCCESS";
export const REGISTER_FAILURE = "REGISTER_FAILURE";
export const SAVE_USER_SUCCESS = "SAVE_USER_SUCCESS";

// Login

/**
 * Calls the login API.
 * @param {string} email The user's email.
 * @param {string} password The user's password.
 * @returns {object} The status object returned by the server.
 */
export function login(email, password) {
  const config = {
    url: `${process.env.REACT_APP_API_DOMAIN}/v1/auth/login`,
    method: "post",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json"
    },
    data: {
      email,
      password
    }
  };

  return callApi(config, loginRequest(email), loginSuccess, loginFailure);
}

function loginRequest(user) {
  return {
    type: LOGIN_REQUEST,
    user
  };
}

function loginSuccess(payload) {
  if (payload.tokens) {
    const accessToken = payload.tokens;
    const profile = decodeUserProfile(accessToken);
    setAccessToken(accessToken);
    return {
      type: LOGIN_SUCCESS,
      user: profile
    };
  }
  return {
    type: LOGIN_FAILURE
  };
}

function loginFailure(error) {
  if (error) {
    removeTokens();
    return {
      type: LOGIN_FAILURE,
      error
    };
  }
  return {
    type: LOGIN_FAILURE,
    error
  };
}

/**
 * Removes the locally stored refresh and access tokens and calls the logout API.
 */
export function logout() {
  const accessToken = localStorage.getItem("ACCESS_TOKEN");
  const config = {
    url: `${process.env.REACT_APP_API_DOMAIN}/v1/auth/logout`,
    method: "delete",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization: `${accessToken}`
    }
  };

  return callApiWithJWT(config, logoutRequest, logoutSuccess, logoutFailure);
}

function logoutRequest() {
  return {
    type: LOGOUT_REQUEST
  };
}

function logoutSuccess() {
  removeTokens();
  return {
    type: LOGOUT_SUCCESS,
    auth: null
  };
}

function logoutFailure(error) {
  removeTokens();
  return {
    type: LOGOUT_FAILURE,
    error
  };
}

// Registration
function registerFailure(response) {
  return {
    response,
    type: REGISTER_FAILURE
  };
}

function registerRequest(response) {
  return {
    type: REGISTER_REQUEST,
    response
  };
}

function registerSuccess(response) {
  return {
    response,
    type: REGISTER_SUCCESS
  };
}

// Confirm Email
export function emailConfirmed(token) {
  const config = {
    url: `${
      process.env.REACT_APP_API_DOMAIN
    }/v1/auth/verify-email?activationToken=${token}`,
    method: "get",
    header: {
      Accept: "application/json",
      "Content-Type": "application/json"
    }
  };
  return callApi(config, registerRequest, registerSuccess, registerFailure);
}

/**
 * Saves the user to the redux store.
 */
export function saveUserToStore() {
  const user = decodeUserProfile(localStorage.getItem("ACCESS_TOKEN"));
  return dispatch => dispatch(saveUserSuccess(user));
}

function saveUserSuccess(user) {
  return {
    type: SAVE_USER_SUCCESS,
    user
  };
}
