/**
 * Contents
 * 1. Content
 */

import { callApi } from "../utils/api";

export const CONTENT_REQUEST = "CONTENT_REQUEST";
export const CONTENT_SUCCESS = "CONTENT_SUCCESS";
export const CONTENT_FAILURE = "CONTENT_FAILURE";

/**
 * Calls the content API.
 * @returns {object} The content object returned by the server.
 */
export function getContent(email, password) {
  const config = {
    url: `${process.env.REACT_APP_API_DOMAIN}/v1/content`,
    method: "get",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json"
    }
  };

  return callApi(config, contentRequest(email), contentSuccess, contentFailure);
}

function contentRequest() {
  return {
    type: CONTENT_REQUEST
  };
}

function contentSuccess(payload) {
  if (payload.content) {
    return {
      type: CONTENT_SUCCESS,
      content: payload.content
    };
  }
  return {
    type: CONTENT_FAILURE,
    error: payload.error
  };
}

function contentFailure(error) {
  if (error) {
    return {
      type: CONTENT_FAILURE,
      error
    };
  }
  return {
    type: CONTENT_FAILURE,
    error
  };
}
