/**
 * Contents
 * 1. Article
 */

import { callApi } from "../utils/api";

export const ARTICLE_REQUEST = "ARTICLE_REQUEST";
export const ARTICLE_SUCCESS = "ARTICLE_SUCCESS";
export const ARTICLE_FAILURE = "ARTICLE_FAILURE";
export const ARTICLE_CLEAR = "ARTICLE_CLEAR";

/**
 * Calls the content API.
 * @returns {object} The content object returned by the server.
 */
export function getArticle(articleId) {
  console.log("hi", articleId);
  const config = {
    url: `${process.env.REACT_APP_API_DOMAIN}/v1/content/${articleId}`,
    method: "GET",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json"
    }
  };

  return callApi(config, articleRequest, articleSuccess, articleFailure);
}

function articleRequest() {
  return {
    type: ARTICLE_REQUEST
  };
}

function articleSuccess(payload) {
  console.log("payo", payload);
  return {
    type: ARTICLE_SUCCESS,
    data: payload
  };
}

function articleFailure(error) {
  return {
    type: ARTICLE_FAILURE,
    error
  };
}

export function clearArticle() {
  return {
    type: ARTICLE_CLEAR
  };
}
