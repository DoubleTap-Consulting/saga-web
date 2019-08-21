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
export function getContent() {
  const config = {
    url: `${process.env.REACT_APP_API_DOMAIN}/v1/content`,
    method: "GET",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json"
    }
  };

  return callApi(config, contentRequest, contentSuccess, contentFailure);
}

function contentRequest() {
  return {
    type: CONTENT_REQUEST
  };
}

function contentSuccess(payload) {
  return {
    type: CONTENT_SUCCESS,
    data: payload
  };
}

function contentFailure(error) {
  return {
    type: CONTENT_FAILURE,
    error
  };
}
